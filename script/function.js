function afficher(){
    FenetreAffichage = window.open(('', NouvelleFenetre), 'toolbar=no,status=no, width=300, height=200');
    FenetreAffichage.document.write("souvenez vous de vos informations");
    FenetreAffichage.document.write("vous etes connecter autant que "+document.formulaire.n1);
    FenetreAffichage.document.write("Votre email est "+document.formulaire.email);
    FenetreAffichage.document.write("Votre mot de passe "+document.formulaire.passe1);

}
function terminer(formulaire){
    if(formulaire.chek.checked == true){formulaire.sub.disabled = false }
    if(formulaire.chek.checked == false){formulaire.sub.disabled = true }
}
function blink(a){
    if(a.style.visibility == "visible"){ a.style.visibility = "hidden";}
    else{a.style.visibility = "visible";}
}
setInterval("blink(V)", 500)