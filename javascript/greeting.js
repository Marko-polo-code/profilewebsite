export function greeting() {
  let count = -1; // Start at -1 to begin with the first greeting
  const wordsArray = [
    "Hola, mi nombre es Mark!",
    "Salut, je m'appelle Mark!",
    "Hallo, mein Name ist Mark!",
    "你好，我叫Mark!",
    "Salam, nama saya Mark!",
    "こんにちは、私の名前はMarkです!",
    "السلام عليكم، اسمي مارك!",
    "Kia ora, ko Mark toku ingoa",
    "Hi, my name is Mark!"
  ];
  const greetingElement = document.getElementById("greeting");

  setInterval(function () {
    count++;
    greetingElement.innerHTML = wordsArray[count % wordsArray.length];
  }, 8000);
}
