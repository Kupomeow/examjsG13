// Recupération des informations
for (i = 0; i < characters.length; i++) {
    var tpl = $("#listeHeros").html();
    var renderedHtml = Mustache.render(tpl, characters[i]);
    $("#templateHeros").append(renderedHtml);
}



// Fonction permetant de hide toutes les class templates
function hideTemplates() {
    $(".templates").hide("fadeIn");
}

// Rappel la fonction Hide et modifie l'attribut css de l'id allCharacter
$("#voirToutLesHeros").click(function () {
    hideTemplates();
    $("#allCharacter").css("display", "block");
})

// Rappel la function hideTemplates et affiche la page d'accueil
$(".retourIndex").click(function () {
    hideTemplates();
    $("#home").show("fadeOut");
})

// Rappel la function hideTemplate et afficher la liste des héros
$("#retourListeHeros").click(function (){
    hideTemplates();
    $("#allCharacter").show("fadeOut");
})

// Rappel la function hideTemplates et affiche les infos d'un seul Héro
$(".infosSup").click(function () {
    hideTemplates();
    $("#infosCharacter").css("display", "block");
})

// Rappel la functuon hideTemplates et affiche l'api
$("#voirApi").click(function (){
    hideTemplates();
    $("#listeMatieres").css("display", "block");
})

// Récupère l'id et récupère celui dans la liste
// for (i = 0; i < characters.length; i++) {
//     let tplHero = $("#infosDuHero").html();
//     let id = "#id";
//     if(id == characters[id]){
        
//     }
//     let renderer = Mustache.render(tplHero, characters[i]);
//     $("#infosHero").append(renderer);
// }

// Il y a deux types de variable, let & var.
// "Let" appartient au standard ES6(2015) tandis que "var" appartient aux anciens standars.
// "Let" & "Var" sont similaires mais on une petite différence.
// "Let" à une porté de bloc (entre { }) tandis que var possède une portée de fonction (function x(){ }).