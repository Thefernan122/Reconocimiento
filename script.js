const URL = "model/";
let model, webcam, labelContainer, maxPredictions;

async function start() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  const flip = true;
  webcam = new tmImage.Webcam(300, 300, flip);
  await webcam.setup();
  await webcam.play();
  window.requestAnimationFrame(loop);

  document.getElementById("webcam").appendChild(webcam.canvas);
  labelContainer = document.getElementById("label");
}

async function loop() {
  webcam.update();
  await predict();
  window.requestAnimationFrame(loop);
}

let lastPrediction = "";

async function predict() {
  const prediction = await model.predict(webcam.canvas);
  prediction.sort((a, b) => b.probability - a.probability);
  const top = prediction[0];

  const className = top.className;
  const confidence = (top.probability * 100).toFixed(1);

  labelContainer.innerHTML = `Objeto detectado: ${className} (${confidence}%)`;

  // Solo cambia la imagen si el objeto detectado ha cambiado
  if (className !== lastPrediction) {
    lastPrediction = className;
    const imageDisplay = document.getElementById("imageDisplay");
    imageDisplay.src = `img/${className.toLowerCase()}.jpg`;
    imageDisplay.alt = className;
  }
}
