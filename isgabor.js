//Inital Array
const names = [
  "István",
  "Katalin",
  "Attila",
  "Gábor",
  "Péter",
  "Anna",
  "Kitti",
];

//check for Gabor only
function isgabor(names) {
  let vangabor = 0;
  //checks the whole array
  for (let i = 0; i < names.length; i++)
    if (names[i] === "Gábor") {
      vangabor = 1;
      console.log("Gábor a", i, ". számú elem");
    }
  //if no Gabor is found
  if ((i = names.length && vangabor == 0)) {
    console.log("Nincs Gábor elem");
  }
}
