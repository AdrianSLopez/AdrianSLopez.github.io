const greetings = ["Bonjour", "Hola", "Привет", "你好", "こんにちは", "안녕하세요", "Olá", "مرحبا", "γεια σας", "Hello"];
var randomNumber;

async function showGreetings(button) {
  const greetingContainer = document.getElementById('greeting-container');

  randomNumber = Math.floor(Math.random() * greetings.length);
  greetingContainer.innerText = greetings[randomNumber];
}
