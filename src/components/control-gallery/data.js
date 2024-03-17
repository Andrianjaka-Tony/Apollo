export const images = [
  {
    image: "/control/1.webp",
    width: "250px",
    x: "-245px",
    y: "452px",
    scale: getRandomScale(0.7, 1.2),
  },
  {
    image: "/control/2.webp",
    width: "520px",
    x: "-98px",
    y: "234px",
    scale: getRandomScale(0.7, 1.2),
  },
  {
    image: "/control/3.webp",
    width: "350px",
    x: "467px",
    y: "-329px",
    scale: getRandomScale(0.7, 1.2),
  },
  {
    image: "/control/4.webp",
    width: "250px",
    x: "-218px",
    y: "345px",
    scale: getRandomScale(0.7, 1.2),
  },
  {
    image: "/control/5.webp",
    width: "460px",
    x: "-583px",
    y: "-776px",
    scale: getRandomScale(0.7, 1.2),
  },
  {
    image: "/control/6.webp",
    width: "380px",
    x: "123px",
    y: "-456px",
    scale: getRandomScale(0.7, 1.2),
  },
  {
    image: "/control/7.webp",
    width: "340px",
    x: "-321px",
    y: "-654px",
    scale: getRandomScale(0.7, 1.2),
  },
  {
    image: "/control/8.webp",
    width: "260px",
    x: "357px",
    y: "345px",
    scale: getRandomScale(0.7, 1.2),
  },
  {
    image: "/control/9.webp",
    width: "420px",
    x: "-345px",
    y: "236px",
    scale: getRandomScale(0.7, 1.2),
  },
  {
    image: "/control/10.webp",
    width: "350px",
    x: "674px",
    y: "234px",
    scale: getRandomScale(0.7, 1.2),
  },
  {
    image: "/control/11.webp",
    width: "380px",
    x: "89px",
    y: "-342px",
    scale: getRandomScale(0.7, 1.2),
  },
  {
    image: "/control/12.webp",
    width: "380px",
    x: "-234px",
    y: "678px",
    scale: getRandomScale(0.7, 1.2),
  },
];

function getRandomScale(min, max) {
  return Math.random() * (max - min) + min;
}
