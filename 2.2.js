/* Attention prompt reçoit une chaîne de caractères. pour transformer les chiffres interprétés en lettres par prompt, il faut ajouter new Number devant la fonction (entre parenthèses) */

let min = new Number(prompt("Enter a first number"));

/* Autre manière de formater la chaîne de caractères en nombre*/

let max = prompt("Enter another number");
max = new Number(max);

if (min > max) {
  alert("Not this way");
} else {
  let current = prompt("Enter you're favourite number");
  if (current >= min || current <= max) {
    alert("You're third number is between " + min + " and " + max);
  }
}
