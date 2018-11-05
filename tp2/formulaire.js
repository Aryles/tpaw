//function valide()
 //{
    // var nomValue = document.querySelector("#Nom").value;
    // var prenomValue = document.querySelector("#Prénom").value;
    // var dateValue = document.querySelector("#Datedenaissance").value;
    // var adresseValue = document.querySelector("#Adresse").value;
    // var emailValue = document.querySelector("#Mail").value;

    // if (nomValue.length==0) {
    //     document.querySelector("#erreur").textContent="le champ nom est vide  ";
    //     document.querySelector("#erreur").Style.display = 'block';
    // }
    // else
    // if (nomValue.length<5) {
    //     document.querySelector("#erreur").textContent="le nom doit contenir au moins 5 caractères ";
    //     		document.querySelector("#erreur").Style.display = 'block';
    // }
    // else
    // if (prenomValue.length==0) {
    //     document.querySelector("#erreur").textContent="le champ prénom est vide ";
    //     document.querySelector("#erreur").Style.display = 'block';
    // }
    // else
    // if (prenomValue.length<5) {
    //     document.querySelector("#erreur").textContent="le prénom doit contenir au moins 5 caractères ";
    //     		document.querySelector("#erreur").Style.display = 'block';
    // }
    // else
    // if (dateValue.length==0) {
    //     document.querySelector("#erreur").textContent="le champ date est vide  ";
    //     		document.querySelector("#erreur").Style.display = 'block';
    // }
    // else
    // if (dateValue.length<5) {
    //     document.querySelector("#erreur").textContent="la date doit contenir au moins 5 caractères ";
    //     		document.querySelector("#erreur").Style.display = 'block';
    // }
    // else
    // if (adresseValue.length==0) {
    //     document.querySelector("#erreur").textContent="le champ d'adresse est vide";
    //     		document.querySelector("#erreur").Style.display = 'block';
    // }
    // else
    // if (adresseValue.length<5) {
    //     document.querySelector("#erreur").textContent="l'adresse doit contenir au moins 5 caractères ";
    //     		document.querySelector("#erreur").Style.display = 'block';
    // }
    // else
    // if (emailValue.length==0) {
    //     document.querySelector("#erreur").textContent="le champ email est vide";
    //     		document.querySelector("#erreur").Style.display = 'block';
    // }
    // else
    // if (emailValue.length<5) {
    //     document.querySelector("#erreur").textContent="l'email doit contenir au moins 5 caractères ";
    //     		document.querySelector("#erreur").Style.display = 'block';
    // }
    // else
    // if (nomValue.length>=5 && prenomValue.length>=5 && dateValue.length>=5 && emailValue.length>=5 &&adresseValue.length>=5)
    // {	
    // 	//document.querySelector("#resultat").removeAttribute("hidden");
    //     document.querySelector("#resultat").textContent="Bienvenue  " + document.querySelector("#Nom").value + " " + document.querySelector("#Prénom").value;
    //     document.querySelector("#resultat").Style.display = 'block';

    // }
    // function hide(){
  //


function validation() {

    var minlength=5;
    var nom = document.getElementById("Nom");
    var prenom = document.getElementById("Prénom");
    var dn = document.getElementById("dn");
    var adresse = document.getElementById("Adresse");
    var mail = document.getElementById("Mail");


    if( nom.value.length >= minlength && prenom.value.length >= minlength && dn.value.length >= minlength 
        && adresse.value.length >= minlength && mail.value.length >= minlength){
            document.getElementById('resultat').style.display='block';
            document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#Prénom").value;
    }
    else{
            document.getElementById('erreur').style.display='block';
            document.getElementById("erreur").innerHTML = "Les champs doivent avoir minimum "+minlength+" caractéres";
    }
    }