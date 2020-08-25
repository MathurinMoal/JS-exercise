//Les variables
//nombre
const lenombre=42;
console.log(lenombre);
//tableau
var tab=[2,5,6,7,9];
console.log(tab);
//chaine de caracteres
var string= ("ceci est une chaine de caracteres");
console.log(string);
//Conditions

//if, else if ,else
function ifelse(){
  nmb=document.getElementById("nombre").value;
  if(nmb>=50){
    console.log("super moitmoit");
  }
  else if (nmb<=40) {
    console.log("peux mieux faire");
  }
  else{
    console.log("la grande réponse");
  }
}
//switch
function theSwitch(){
  switch (tab.length){
    case 10:
    console.log("il y a 10 éléments dans le tableau");
    break;
    case 5:
    console.log("il y a 5 éléments dans le tableau");
    break;
    case 0:
    console.log("le tableau est vide");
    break;
  }
}
//Boucles
var compteur=0;
//while
while (compteur<5){
  console.log("Messire, on en a gros");
  compteur++;
}

//for
for(let i=0; i<tab.length; i++){
  console.log(tab);
}
