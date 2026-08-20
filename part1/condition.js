/* let number = Number(prompt("Veuillez entrer un nombre"));
if (number > 10) {
  console.log("sup10");
} else {
  console.log("inf10");
}
 */
/* let name = prompt("veuillez saisir le name");
if (name === "Abalo") {
  console.log("vous avez trouver");
} else {
  console.log("échec");
} */

let sexe = prompt("Entrer votre sexe (F pour feminin et M pour masculin):");
let age = Number(prompt("Entrer votre age:"));

if (sexe === "M" && age >= 18) {
  alert("va travailler");
} else {
  alert("va cuisiner");
}
