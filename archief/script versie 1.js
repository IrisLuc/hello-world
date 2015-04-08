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
    //bepalen welke index van teksten gebruikt moet worden
    var nInd = teksten.length - 1;
    if (    event.type != 'mouseout'
       &&   event.type != 'mouseup' )
        nInd = parseInt(elem.getAttribute('data-sleutel'));
    //boodschap weergeven
    eBoodschap.innerHTML = '<h1>' + teksten[nInd].id + '</h1>' + teksten[nInd].tekst;
    console.log(eBoodschap);
};
/******************** WINDOW ONLOAD ********************/
window.onload = function()
{
    var eBegrippen = document.getElementById('begrippen');
    //Areas vastleggen
    for (var i=0; i<teksten.length - 1; i++)
    {
        eBegrippen.appendChild(maakArea(i));
    }
    //Eventlisteners
    var eAreas = document.getElementsByTagName('area');
    eBoodschap = document.getElementById('boodschap')
    for (var i=0; i<eAreas.length; i++)
    {
        var eArea = eAreas[i];
        eArea.addEventListener('mouseover', function(e){showText(e, this);})
        eArea.addEventListener('mousedown', function(e){showText(e, this);})
        eArea.addEventListener('mouseout', function(e){showText(e, this);})
        eArea.addEventListener('mouseup', function(e){showText(e, this);})
    }
};