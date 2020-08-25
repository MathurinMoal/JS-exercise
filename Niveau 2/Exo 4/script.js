function addition(nmb){
  return nmb+10;
}
function multiplie(nmb){
  return nmb*2;
}
function display(){
  var demo;
  console.log(multiplie(addition(demo=Number(document.getElementById("number").value))));
}


/*function display(){
  var demo=multiplie(Number(document.getElementById("number").value));
  console.log(demo);
  var demo=addition(Number(document.getElementById("number").value));
  console.log(demo);
}
*/
