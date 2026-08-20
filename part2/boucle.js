//for   boucle a échéances
//while boucle a condition
/*let username = prompt("Veuillez saisir votre nom :");

while (username !== "john") {
  alert("vous n'etes pas la personne espérer");
  username = prompt("Veuillez saisir votre nom :");
}

 for (let i = 0; i < 5; i++) {
  console.log("abalo" + i);
  console.log("abalo" + i);
  console.log(`${i} ${i + 1} `);
} */

let number = 45;
let chosenNumber = Number(prompt("Veillez choisir votre nombre"));

while (number !== chosenNumber) {
  if (chosenNumber < number) {
    alert("plus");
    chosenNumber = Number(prompt("Veillez choisir votre nombre"));
  } else {
    alert("moins");
    chosenNumber = Number(prompt("Veillez choisir votre nombre"));
  }
}
alert("vous avez trouver le nombre exact");
