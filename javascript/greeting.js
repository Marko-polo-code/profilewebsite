
function greeting() {
  let count = -1; // Start at -1 to begin with the first greeting
  const wordsArray = ["Hola", "Salut", "Hallo", "你好", "Salam", "Konnichiwa", "Asalaam alaikum", "Hi"];
  const greetingElement = document.getElementById("greeting");

  setInterval(function () {
    count++;
    greetingElement.innerHTML = wordsArray[count % wordsArray.length];
  }, 4000);
}

greeting();
