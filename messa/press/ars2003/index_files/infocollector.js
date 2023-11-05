//infocollector.js	created 2002-08-22	gabrielkr
//			last edited 2002-09-26 gabrielkr
// Funktionen die benoetigt werden um den InfoCollector einzubinden


// zeigt tooltip ueber IC Icon an
// zu verwenden bei IC Icon onmouseover
function showTooltip(element) {
	var tooltip = document.getElementById("tooltip");

	tooltip.style.top=getTop(element)-12;
	tooltip.style.left=getLeft(element)-1;

	tooltip.style.display='block';
	tooltip.style.zIndex=2;
}

// versteckt tooltip wieder
// verwenden bei IC Icon onmouseout
function hideTooltip() {
	var tooltip = document.getElementById("tooltip");
	tooltip.style.display='none';
}

//hilfsfunktion fuer showTooltip()
function getLeft(l)
{
  if (l.offsetParent) return (l.offsetLeft + getLeft(l.offsetParent));
  else return (l.offsetLeft);
}

//hilfsfunktion fuer showTooltip()
function getTop(l)
{
  if (l.offsetParent) return (l.offsetTop + getTop(l.offsetParent));
  else return (l.offsetTop);
}

// wird bei Klick auf das IC Icon aufgerufen
/* FUNKTION NICHT MEHR VERWENDEN
 * geht auf Mac nicht

function addToInfoCollector(url,name,iAreaID) {
	if(navigator.cookieEnabled) {
		document.location.href="http://www.aec.at/infocollector/addToInfoCollector.asp?url="+encodeURI(url)+"&name="+encodeURI(name)+"&iAreaId="+iAreaID+"&page="+encodeURI(document.location.href);
	}
	else {
		alert('Sie haben Cookies deaktiviert. Um den InfoCollector benutzen zu können muss Ihr Browser Cookies akzeptieren.');
	}
}
*/

// Zum Ändern der Sprache der Seite (paßt zwar nicht hierher, aber...)

function switchlang()
{
	var cur = document.URL;
	var chg = '';
	var isDE = cur.search(/\/de\//);
	if(isDE != -1) { chg = cur.replace(/\/de\//, "/en/"); }
	else           { chg = cur.replace(/\/en\//, "/de/"); }
	window.location.href = chg;
}


// Wird von Flash aus bei Klick auf 'Infocollector' im Header aufgerufen
function showInfoCollector(lang) {
	var x=0;
	var y=0;
	var i;
	if (document.all) {
		x = window.screenLeft;
		y = window.screenTop;
	}
	if(lang==0)  {
	window.open("http://www.aec.at/de/infocollector/infocollector.asp","infocollector","width=325,height=560,left="+(x-3)+",top="+(y-22)+",dependent=yes");
	}
	if(lang==1)  {
	window.open("http://www.aec.at/en/infocollector/infocollector.asp","infocollector","width=325,height=560,left="+(x-3)+",top="+(y-22)+",dependent=yes");
	}
}

// Wird von Flash zum öffnen der Tour benutzt....
// hat da Bastl gefinished
function openTour(lang)  {
    var x=0;
	var y=0;
	var i;
	if (document.all) {
		x = window.screenLeft;
		y = window.screenTop;
	}
	if (lang==0)
	{
		window.open("http://www.aec.at/de/panoramatour/index.htm","tour","width=605,height=335,left="+(x-3)+",top="+(y-22)+",dependent=yes");
	}
	if (lang==1)
	{
		window.open("http://www.aec.at/en/panoramatour/index.htm","tour","width=605,height=335,left="+(x-3)+",top="+(y-22)+",dependent=yes");
	}

}

function openLowTour(lang)  {
    var x=0;
	var y=0;
	var i;
	if (document.all) {
		x = window.screenLeft;
		y = window.screenTop;
	}
	if (lang==0)
	{
		window.open("http://www.aec.at/de/panoramatour/low_level/index.html","tour","width=605,height=335,left="+(x-3)+",top="+(y-22)+",dependent=yes");
	}
	if (lang==1)
	{
		window.open("http://www.aec.at/en/panoramatour/low_level/index.html","tour","width=605,height=335,left="+(x-3)+",top="+(y-22)+",dependent=yes");
	}

}

// Center Tour....
// von woifal auf da basis von an script vom bastl :-)
function openCenterTour()  {
    var x=0;
	var y=0;
	var i;
	if (document.all) {
		x = window.screenLeft;
		y = window.screenTop;
		x=300;
		y=100;
	}
	window.open("http://www.aec.at/de/center/centertour/index.asp","centertour","width=605,height=335,left="+(x-3)+",top="+(y-22)+",dependent=yes");

}

/*function openSearchDE(search, section, tab) {
	window.open("http://www.aec.at/de/mainSearch/people.asp?search="+search+"&section="+section+"&tab="+tab,"AECSuche","toolbar=no,menubar=no,status=no,scrollbars=yes,resizable=yes,width=775,height=600");
}

function openSearchEN(search, section, tab) {
	window.open("http://www.aec.at/en/mainSearch/people.asp?search="+search+"&section="+section+"&tab="+tab,"AECSuche","toolbar=no,menubar=no,status=no,scrollbars=yes,resizable=yes,width=775,height=600");
}*/

function openSearchDE(search, section, tab) {
	window.open("http://www.aec.at/de/mainSearch/frame.asp?search="+search,"AECSuche","toolbar=no,menubar=no,status=yes,scrollbars=yes,resizable=yes,width=775,height=600");
}

function openSearchEN(search, section, tab) {
	window.open("http://www.aec.at/en/mainSearch/frame.asp?search="+search,"AECSuche","toolbar=no,menubar=no,status=yes,scrollbars=yes,resizable=yes,width=775,height=600");
}
