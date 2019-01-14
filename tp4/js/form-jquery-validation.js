
$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
  $("#gps").on("click",function(event) { 
  getLocation();
  });


$(document).keypress(function(event){
// ajout des compteurs de caractére a coté de chaque champs de saisie 
    var nombreCaractere = $("#name").val().length;
    
    var msg = nombreCaractere + ' car';
    $('#c1').text(msg);

    var nombreCaractere2 = $("#firstname").val().length;
    var msg2 = nombreCaractere2 + ' car';
    $('#c2').text(msg2);
  });










});
