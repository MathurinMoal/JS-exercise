let iSoupe=0;
let iFauteuil=0;
let iLit=0;
function boireSoupe(){
  let elemtSoupe=document.getElementsByClassName("soupe")[0];
  /*choisis le tableau soupe qui n'existe qu'une fois donc l'itération 0*/
  /*console.log(elemtSoupe.childNodes[iSoupe]);*/
  let changeP = elemtSoupe.childNodes[iSoupe].innerHTML;
  /*choisis le contenu de l'elemt enfant de soupe, sa position est déterminée par
  iSoupe qui compte le nmb de fois ou la fct à été exécutée !!!faire attention aux
  retours à ligne considéré comme un enfant aussi*/
  console.log(changeP);
  changeP= changeP.replace("plein", "vide");
  /*remplace la valeur de changeP pour lui attribuer le text modifié*/
  console.log(changeP);
  document.getElementsByClassName("soupe")[0].childNodes[iSoupe].innerHTML=changeP;
  /*donne à l'elmt choisis (soit les p de soupe) le texte modifié*/
  iSoupe++;
  /*incrémentation de iSoupe pour prendre l'élemt suivant à la prochaine execution*/
}
function seReposer(){
  let elemtFauteuil=document.getElementsByClassName("fauteuil")[0];
  let changeP = elemtFauteuil.childNodes[iFauteuil].innerHTML;
  console.log(changeP);
  changeP= changeP.replace("neuf", "d'occasion");
  console.log(changeP);
  document.getElementsByClassName("fauteuil")[0].childNodes[iFauteuil].innerHTML=changeP;
  iFauteuil++;
}
function dormir(){
  let elemtLit=document.getElementsByClassName("lit")[0];
  let changeP = elemtLit.childNodes[iLit].innerHTML;
  console.log(changeP);
  changeP= changeP.replace("fait", "utilisé");
  console.log(changeP);
  document.getElementsByClassName("lit")[0].childNodes[iLit].innerHTML=changeP;
  iLit++;
}
