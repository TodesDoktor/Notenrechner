let n1, n2, n3, n4, n5;
let summe = 0;
let anzahlNoten = 0;
let ergebnis;

function tfAuslesen() {
    summe = 0;
    anzahlNoten = 0;
    n1 = parseInt(document.getElementById("tfnote1").value);
    n2 = parseInt(document.getElementById("tfnote2").value);
    n3 = parseInt(document.getElementById("tfnote3").value);
    n4 = parseInt(document.getElementById("tfnote4").value);
    n5 = parseInt(document.getElementById("tfnote5").value);

    console.log(n1 + ";" + n2 + ";" + n3 + ";" + n4 + ";" + n5 + ";")


    eingabeUeberpruefen(n1)
    eingabeUeberpruefen(n2)
    eingabeUeberpruefen(n3)
    eingabeUeberpruefen(n4)
    eingabeUeberpruefen(n5)

    ergebnis = summe / anzahlNoten

    document.getElementById("ausgabe").innerHTML = ergebnis;


    if(ergebnis < 6) {    document.getElementById("ausgabe").style.color = "crimson";
    }
    if(ergebnis > 5)   {document.getElementById("ausgabe").style.color = "royalblue";
    }
    if(ergebnis > 11)   {    document.getElementById("ausgabe").style.color = "green";
    }







}

 function eingabeUeberpruefen(punkte) {
      if (isNaN(punkte)){
          console.log("keine Zahl") ;
      } else {
          anzahlNoten=anzahlNoten + 1;
          summe=summe + punkte ;
      }
 }


