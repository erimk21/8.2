function plus(){

    var getal1 = parseInt(window.document.getElementById("getal1").value, 10);
    var getal2 = parseInt(window.document.getElementById("getal2").value, 10);
    let antwoord = getal1+getal2;
    document.getElementById("antwoord").innerHTML = antwoord;
   
    if(getal1 == 0 || getal2 == 0)
    {
        document.getElementById("antwoord").innerHTML = "Het getal is onjuist.";
    }
    else{
        let antwoord = getal1 + getal2;
        document.getElementById("antwoord").inerHTML = antwoord;
    }
}
function min(){

    var getal1 = parseInt(window.document.getElementById("getal1").value, 10);
    var getal2 = parseInt(window.document.getElementById("getal2").value, 10);
    let antwoord = getal1-getal2;
    document.getElementById("antwoord").innerHTML = antwoord;

    if(getal1 == 0 || getal2 == 0)
    {
        document.getElementById("antwoord").innerHTML = "Het getal is onjuist.";
    }
    else{
        let antwoord = getal1 + getal2;
        document.getElementById("antwoord").inerHTML = antwoord;
    }
}
function keer(){

    var getal1 = parseInt(window.document.getElementById("getal1").value, 10);
    var getal2 = parseInt(window.document.getElementById("getal2").value, 10);
    let antwoord = getal1-getal2;
    document.getElementById("antwoord").innerHTML = antwoord;

    if(getal1 == 0 || getal2 == 0)
    {
        document.getElementById("antwoord").innerHTML = "Het getal is onjuist.";
    }
    else{
        let antwoord = getal1 + getal2;
        document.getElementById("antwoord").inerHTML = antwoord;
    }
}
function delen(){

    var getal1 = parseInt(window.document.getElementById("getal1").value, 10);
    var getal2 = parseInt(window.document.getElementById("getal2").value, 10);
    let antwoord = getal1-getal2;
    document.getElementById("antwoord").innerHTML = antwoord;

    if(getal1 == 0 || getal2 == 0)
    {
        document.getElementById("antwoord").innerHTML = "Het getal is onjuist.";
    }
    else{
        let antwoord = getal1 + getal2;
        document.getElementById("antwoord").inerHTML = antwoord;
    }
}