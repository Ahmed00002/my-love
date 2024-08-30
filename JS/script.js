const images = [
  {
    src: "Assets/love_red.svg",
    text: "Press My Heart",
    background: "#FFF3F3",
    textColor: "#F9595F",
  },
  {
    src: "Assets/love_white.svg",
    text: "Do You know who r u? You are my one and only love. I really fallen love with you. Just keep me in your heart. I don't care how you looks like. I just wanna make you mine forever. I love you Fatu😊😚",
    background: "#F9595F",
    textColor: "#FFF3F3",
  },
];

let currentIndex = 0;

const imageElement = document.getElementById("image");
const textElement = document.getElementById("text");
const bodyElement = document.body;

imageElement.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length; // cycle the heart
  const currentImage = images[currentIndex];

  imageElement.src = currentImage.src;
  textElement.textContent = currentImage.text;
  bodyElement.style.backgroundColor = currentImage.background;
  textElement.style.color = currentImage.textColor;
});
