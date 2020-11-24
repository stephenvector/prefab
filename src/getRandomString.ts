const ABC = "abcdefghijklmnopqrstuvwxyz";

export default function getRandomString(length: number = 16) {
  return new Array(length)
    .fill(" ")
    .map(() => {
      const randomIndex = Math.floor(Math.random() * ABC.length);
      return ABC[randomIndex];
    })
    .join("");
}
