function showText(text){

var boodschap;

boodschap='<h1>'+text+'</h1>'

switch (text) {
       case 'Kolom':{
            boodschap= boodschap + 'Attribuut <br />Bevat gegevens van dezelfde soort.';
       }
       break;
       case 'Foreign Key':{
            boodschap=boodschap + 'De foreign key is de verbindende schakel tussen twee tabellen.';
       }
       break;
       case 'Primary Key':{
             boodschap=boodschap + 'Primaire sleutel<br />Veld dat de instantie uniek definieert.';
       }
       break;
       case 'Tabel':{
              boodschap=boodschap + 'Entiteit <br />Tweedimensionale gegevensstructuur bestaande uit rijen en kolommen.';
       }
       break;
       case 'Rij':{
            boodschap=boodschap + 'Instantie<br />Bevat gegevens die bij elkaar horen.';
       }
       break;
       case 'Index':{
            boodschap=boodschap + 'Lijkt op de index achteraan in een boek.<br />Met een zoekwoord kan je de juiste bladzijde, of het juiste rijnummer in je tabel, vinden.';
       }
       break;
       case 'Veld':{
             boodschap=boodschap + 'Kruispunt van een rij en een kolom<br />Bevat specifieke informatie van een specifiek iets.';
       }
       break;
       case '':{
             boodschap='';
       }
       break;
       default:{
            boodschap = 'Beweeg met je muis over &eacute;&eacute;n van de groene woorden.';
       }
       break;


}


document.getElementById('boodschap').innerHTML=boodschap;

}
