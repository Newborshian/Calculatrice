function supprimer(){
    document.getElementById("resultats").value = "";  
}

function ajouter(symbol){
    document.getElementById("resultats").value += symbol;
    console.log("coucou");
}

function calculer(){
    let calculs = document.getElementById("resultats").value;
    let resultat = eval(calculs);
    document.getElementById("resultats").value = resultat;
}