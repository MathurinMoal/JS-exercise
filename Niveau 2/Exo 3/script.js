function multiplie(nmb){
  return nmb*2;
}
window.onload = function(e){
  var demo=multiplie(Number(document.getElementById("number").value));
  console.log(demo);
}
