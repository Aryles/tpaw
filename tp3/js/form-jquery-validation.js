
$( document ).ready(function() {
     console.log( "DOM ready!" );

     $("#envoi").on("click",function(event){ 
        event.preventDefault(); 
        console.log( "click" ); 

        if ($('#nom').val().length < 5|| $('#nom').val() == "" ) { 
        $('#myModal').modal("show");
        $(".modal-title").text("Message erreur");
        $(".modal-body").text("veuillez renseignez le champs nom");
      }
      else if ($('#prenom').val().length < 5|| $('#prenom').val() == "" ) { 
        $('#myModal').modal("show");
        $(".modal-title").text("Message erreur");
        $(".modal-body").text("veuillez renseignez le champs prenom");
    }
    
    else if ( $('#dn').val() == ""|| $('#dn').val() == "") { 
        $('#myModal').modal("show");
        $(".modal-title").text("Message erreur");
        $(".modal-body").text("veuillez renseignez le champs date de naissance");
    }


    else if ($('#adresse').val().length < 5 || $('#adresse').val() == "") { 
        $('#myModal').modal("show");
        $(".modal-title").text("Message erreur");
        $(".modal-body").text("veuillez renseignez le champs adresse");
    }
    else if ($('#mail').val().length < 5 || $('#mail').val() == "") { 
        $('#myModal').modal("show");
        $(".modal-title").text("Message erreur");
        $(".modal-body").text("veuillez renseignez le champs mail");
    }
    else {
        $('#myModal').modal("show");
        $(".modal-title").text( "Bienvenue  "+ document.querySelector("#prenom").value);
        $(".modal-body").text( "vous etes nés le"+ document.querySelector("#dn").value+" et vous habitez à");
$(".modal-body").html( "vous etes nés le "+ document.querySelector("#dn").value+" </br>et vous habitez à:"+'</br><img src="https://maps.googleapis.com/maps/api/staticmap?markers='+document.querySelector("#adresse").value+'&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/>');

    }
     // Y mettre le code jQuery pour valider tous les champs du formulaire

 }); 
});