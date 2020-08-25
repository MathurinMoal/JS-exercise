let playerChoice;
let ordiChoice;
let pierre=document.getElementById("pierre");
pierre=pierre.addEventListener("click",stockPierre);
let feuille=document.getElementById("feuille");
feuille=feuille.addEventListener("click",stockFeuille);
let ciseaux=document.getElementById("ciseaux");
ciseaux=ciseaux.addEventListener("click",stockCiseaux);
function stockPierre(){
  playerChoice="laPierre";
  console.log(playerChoice);
  ordiChoice=tirageOrdi(3);
  attribution();
}
function stockFeuille(){
  playerChoice="laFeuille";
  console.log(playerChoice);
  ordiChoice=tirageOrdi(3);
  attribution();
}
function stockCiseaux(){
  playerChoice="lesCiseaux";
  console.log(playerChoice);
  ordiChoice=tirageOrdi(3);
  attribution();
}
function tirageOrdi(max){
  return Math.floor(Math.random() * Math.floor(max));
}
function attribution(){
  if (ordiChoice==0){
    ordiChoice="laPierre";
  }
  else if(ordiChoice==1){
    ordiChoice="laFeuille";
  }
  else{
    ordiChoice="lesCiseaux";
  }
  console.log(ordiChoice);
  match();
}
function match(){
  if(playerChoice=="laPierre"){
    if(ordiChoice=="laPierre"){
      console.log("Match nul!");
      document.getElementById("partie").innerHTML="Vous avez choisis la pierre et votre adversaire aussi!";
      matchNul();
    }
    else if(ordiChoice=="laFeuille"){
      console.log("Perdu!");
      document.getElementById("partie").innerHTML="Vous avez choisis la pierre et votre adversaire la feuille!";
      perdu();
    }
    else{
      console.log("Gagné!");
      document.getElementById("partie").innerHTML="Vous avez choisis la pierre et votre adversaire les ciseaux";
      gagne();
    }
  }
  else if(playerChoice=="laFeuille"){
    if(ordiChoice=="laPierre"){
      console.log("Gagné!");
            document.getElementById("partie").innerHTML="Vous avez choisis la feuille et votre adversaire la pierre";
      gagne();
    }
    else if(ordiChoice=="laFeuille"){
      console.log("Match nul!");
            document.getElementById("partie").innerHTML="Vous avez choisis la feuille et votre adversaire aussi!";
      matchNul();
    }
    else{
      console.log("Perdu!");
      document.getElementById("partie").innerHTML="Vous avez choisis la feuille et votre adversaire les ciseaux";
      perdu();
    }
  }
  else{
    if(ordiChoice=="laPierre"){
      console.log("Perdu!");
      document.getElementById("partie").innerHTML="Vous avez choisis les ciseaux et votre adversaire la pierre";
      perdu();
    }
    else if(ordiChoice=="laFeuille"){
      console.log("Gagné!");
      document.getElementById("partie").innerHTML="Vous avez choisis les ciseaux et votre adversaire la feuille!";
      gagne();
    }
    else{
      console.log("Match nul!");
            document.getElementById("partie").innerHTML="Vous avez choisis les ciseaux et votre adversaire aussi!";
      matchNul();
    }
  }
}
function matchNul(){
  document.getElementById("result").innerHTML="C'est un match nul!";
}
function perdu(){
  document.getElementById("result").innerHTML="C'est une defaite!";
}
function gagne(){
  document.getElementById("result").innerHTML="C'est une victoire!";
}
