/*function recuperation(numpoisson) {
  var str = document.getElementById("poison"+numpoisson).innerHTML;
  var res = str.replace(/vivant/w, "mort");
  document.getElementById("demo").innerHTML = res;
}
function eliminer(){
  hideP=recuperation("wichOne");
  hideP.style.display="none";
}
function recuperation(idpoisson){
  idpoisson=document.getElementById("wichOne");
  let peche=document.getElementById("poisson"+idpoisson);
  console.log(peche);
  return peche;
}*/
function nb_aleatoire(max){
       return 1+ Math.floor(Math.random() * Math.floor(max));
     }
function eliminer(){
var poissons = nb_aleatoire(3);
document.getElementById("poisson"+poissons).textContent=("Je suis un poisson mort.");
/*document.write("Vous avez attraper le poisson " + poissons + "! Bravo!");*/
}
