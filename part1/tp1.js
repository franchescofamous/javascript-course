/*let age = Number(prompt("veuillez saisir l'age(mineur et majeur"));
if (age < 18) {
  console.log("il est mineur");
} else {
  console.log("majeur");
}
*/

/*let prix = Number(prompt("demander à l'utilisateur le prix d'un produit"));
if (prix >= 10000) {
  let reduction = (12 * prix) / 100;
  console.log("vous avez une reduction de 12%" + reduction);
} else {
  let reduction = (6 * prix) / 100;
  console.log("vous avez une reduction de 6% " + reduction);
}
  */

/*let nombre = Number(prompt("veuiller saisir un nombre pair ou impair"));
if (nombre % 2 == 0) {
  console.log("pair");
} else {
  console.log("impair");
}*/

/*let number1 = Number(prompt("Veuillez entrer le 1e nombre"));
let number2 = Number(prompt("Veuillez entrer le 2e nombre"));
let nbr = number1 - number2;
if (nbr < 0) {
  alert("le 1e nombre est inferieur");
} else if(nbr > 0){
  alert("le 1e nombre est supérieur");
}else{
    alert("Les deux nombres sont égaux");
}


let number1 = Number(prompt("Veuillez entrer le 1e nombre"));
let number2 = Number(prompt("Veuillez entrer le 2e nombre"));
if((number1 > 0 && number2 > 0) || (number1 <0 && number2 < 0)  ){
    alert("Le produit sera positif")
}else{
    alert("Le produit sera négatif")
}*/
/* let number = Number(prompt("Entrez un numbre"));

if (number % 3 == 0 && number % 5 == 0) {
  alert("FizzBuzz");
} else if (number % 5 == 0) {
  alert("Buzz");
} else if (number % 3 == 0) {
  alert("Fizz");
} else {
  alert("Le nombre saisi n'est pas divisible par 3 et 5");
}
 */

//
/*
let annee = Number(prompt("entrer une année:"));
if (annee % 400 === 0 || (annee % 4 === 0 && annee % 100 != 0)) {
  alert("l'annee est bissextile:" + annee);
} else {
  alert("n'est bissextile");
}


let prixBoisson = Number(prompt("Saisir le prix de la boisson: "));
let montantPayé = Number(prompt("Saisir le montant payé: "));

if (
  montantPayé == 500 ||
  montantPayé == 1000 ||
  montantPayé == 2000 ||
  montantPayé == 5000 ||
  montantPayé == 10000
) {
  if (montantPayé < prixBoisson) {
    alert("Montant insuffisant");
  } else if (montantPayé == prixBoisson) {
    alert("Le compte est bon !");
  } else if (montantPayé > prixBoisson) {
    let monnaie = montantPayé - prixBoisson;
    alert(`Vous avez une monaie de ${monnaie} fcfa`);
  }
} else {
  alert("Payement refusé..!!");
}*/

//500 - 1000 - 2000 - 5000 - 10000

let day = Number(prompt("veillez entrer un jour du mois"));
let month = Number(prompt("veillez entrer le mois"));
if (day > 0 && day < 32 && month > 0 && month < 13) {
  //alert("Votre jour suivant est:" + (day + 1) + "/" + month);
  if ((month == 4 || month == 6 || month == 9 || month == 11) && day <= 30) {
    if (day < 30) {
      alert("Votre jour suivant est:" + (day + 1) + "/" + month);
    } else {
      alert("Votre jour suivant est:" + 1 + "/" + (month + 1));
    }
  } else if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    if (day < 31) {
      alert("Votre jour suivant est:" + (day + 1) + "/" + month);
    } else if (day == 31 && month != 12) {
      alert("Votre jour suivant est:" + 1 + "/" + (month + 1));
    } else {
      alert("Votre jour suivant est:" + 1 + "/" + 1);
    }
  } else if (month == 2) {
    if (day < 28) {
      alert("Votre jour suivant est:" + (day + 1) + "/" + month);
    } else if (day == 28) {
      alert("Votre jour suivant est:" + 1 + "/" + 3);
    } else {
      alert("Le mois que vous avez choisi n'a que 28 jours");
    }
  } else {
    alert("Le mois que vous avez choisi n'a pas 31 jours");
  }
} else {
  alert("Renseignez les bonnes iformations");
}
