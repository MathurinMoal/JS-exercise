function showHxContent(numtitle) {
	vDiv = document.getElementById("title"+numtitle);
	if (vDiv.style.display == "block"){
		vDiv.style.display = "none";
	}
	else {
		vDiv.style.display = "block";
	}
}
function hideAllDivs(){
	vDivs = document.getElementsByTagName("div");
  console.log(vDivs);
	for (var i=0; i<vDivs.length; i++) {
		vDivs.item(i).style.display = "none";
	}
}
function alertTitle(){
	vHx = document.getElementsByTagName("h1");
	console.log(vHx);
	vIndice = document.getElementById("title").value;
	console.log(vIndice);
	vIndice = vIndice - 1;
	alert(vHx[vIndice].innerHTML);
}
function deleteTitle(){
	vHx = document.getElementsByTagName("h1");
	vIndice = document.getElementById("title").value;
	console.log(vIndice);
	vIndice = vIndice - 1;
	vHx.item(vIndice).removeChild(vHx.item(vIndice).firstChild);
}
function defineTitle () {
	vHx = document.getElementsByTagName("h1");
	vIndice = document.getElementById("title").value;
	vIndice = vIndice - 1;
	vText = document.createTextNode("Nouveau texte");
	if (vHx.item(vIndice).hasChildNodes()) {
		vHx.item(vIndice).removeChild(vHx.item(vIndice).firstChild);

	}
	vHx.item(vIndice).appendChild(vText);
}
