# Reconocimiento de Objetos con Teachable Machine y TensorFlowJS

Este proyecto implementa un modelo de clasificación de imágenes entrenado con [Teachable Machine](https://teachablemachine.withgoogle.com/) e integrado en una página web usando TensorFlowJS. La app detecta objetos reales en tiempo real usando la cámara del navegador y muestra imágenes de referencia según la clase detectada.

## 🧠 Modelo entrenado

Se entrenaron 3 clases:
- Laptop
- Carcasa
- Celular
- Audifonos
- Estuche de audifonos
- Lentes
- Mouse
- Teclado
El modelo fue exportado para uso web (`model.json`, `metadata.json`, `.bin`) y cargado dinámicamente desde JavaScript.

## 🌐 Tecnologías usadas

- HTML5
- JavaScript
- TensorFlowJS
- Teachable Machine
- Live Server (VSCode)

## 🖼️ Características

- Detección en tiempo real con webcam
- Imagen de referencia visual para cada objeto detectado
- Código limpio y portable

