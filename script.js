/******************** GLOBALE VARIABELEN ********************/
var eBoodschap;
/******************** ALGEMENE FUNCTIES ********************/
function maakArea(nInd)
{
    var eArea = document.createElement('area');
    eArea.setAttribute('coords', teksten[nInd].coords);
    eArea.setAttribute('data-sleutel', nInd);
    eArea.setAttribute('shape', 'rect');
    return eArea;
}   
/******************** EVENTHANDLERS ********************/
function showText(event, elem)
{
    
    //var nInd = teksten.length - 1;
    if (    event.type != 'mouseout'
       &&   event.type != 'mouseup' ) 
    {   
        //boodschap tonen
        eBoodschap.style.display = 'block';  
        //bepalen welke index van teksten gebruikt moet worden
        nInd = parseInt(elem.getAttribute('data-sleutel'));
        //inhoud boodschap
        eBoodschap.innerHTML = '<h1>' + teksten[nInd].id + '</h1>' + teksten[nInd].tekst;
    }
    else
        //boodschap verbergen
        eBoodschap.style.display = 'none';
    };
/******************** WINDOW ONLOAD ********************/
window.onload = function()
{

    //details image in html goed zetten
    var eImg = document.getElementById('imgmap');
    eImg.setAttribute('src', oImg.src);
    eImg.setAttribute('width', oImg.width);
    eImg.setAttribute('height', oImg.height);

    //Areas vastleggen
    var eBegrippen = document.getElementById('begrippen');
    for (var i=0; i<teksten.length - 1; i++)
    {
        eBegrippen.appendChild(maakArea(i));
    }
    //Eventlisteners
    var eAreas = document.getElementsByTagName('area');
    eBoodschap = document.getElementById('boodschap')
    eBoodschap.style.display = 'none';
    for (var i=0; i<eAreas.length; i++)
    {
        var eArea = eAreas[i];
        eArea.addEventListener('mouseover', function(e){showText(e, this);})
        eArea.addEventListener('mousedown', function(e){showText(e, this);})
        eArea.addEventListener('mouseout', function(e){showText(e, this);})
        eArea.addEventListener('mouseup', function(e){showText(e, this);})
    }
};