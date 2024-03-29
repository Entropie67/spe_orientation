
let specialites = {
    "NSI": 0,
    "Maths": 0,
    "PC": 0,
    "HGGSP": 0,
    "HLP": 0,
    "CAS": 0,
    "SI": 0,
    "SVT": 0,
    "SES": 0
};

   function evaluerResultats() {
       for (let spe in specialites) {
         specialites[spe] = 0;
    } 

    // Question 01
    let scoreProbleme = document.getElementById('probleme_resoudre'.valueOf, 0);
    specialites["PC"] += scoreProbleme;
    specialites["SVT"] += scoreProbleme;
    specialites["NSI"] += scoreProbleme;
    specialites["Maths"] += scoreProbleme;
    specialites["HGGSP"] -= scoreProbleme;

    // Question 04
    let scoreCoeur = document.getElementById('app_coeur'.valueOf, 0);
    specialites["HLP"] += scoreCoeur;
    specialites["HGGSP"] += scoreCoeur;
    
    // Question 05
    let reponseProbleme = parseInt(document.getElementById('logique_sentiments').value, 0);
    if (reponseProbleme === "logique") {
        specialites["NSI"] += 2;
        specialites["Maths"] += 2;
        specialites["SVT"] += 2;
        specialites["SES"] += 2;


    } else {
        specialites["Maths"] -= 1;
        specialites["NSI"] -= 1;
        specialites["SVT"] -= 1;
        specialites["SES"] -= 1;
    }
    // Question 02
    let scoreLecture = parseInt(document.getElementById('plaisir_lecture').value, 0);
    specialites["HLP"] += scoreLecture;
    specialites["LLCE"] += scoreLecture;
    specialites["HGGSP"] += scoreLecture;

    // Question 07
    let scoreRealisation = parseInt(document.getElementById('film_realisation').value, 0);
    specialites["CAV"] += scoreRealisation;

    // Question 08
    let scoreRedaction = parseInt(document.getElementById('qualite_redaction').value, 0);
    specialites["HLP"] += scoreRedaction;
    specialites["LLCE"] += scoreRedaction;
    specialites["HGGSP"] += scoreRedaction;
    specialites["SES"] += scoreRedaction;
    specialites["SVT"] += scoreRedaction;
    
    // Question 10
    let scoreNumerique = parseInt(document.getElementById('numerique_et_technologies').value, 0);
    specialites["NSI"] += scoreNumerique;
    specialites["SI"] += scoreNumerique;

    // Questions 09
    let scoreDebat = parseInt(document.getElementById('travaux_groupes').value, 0);
    if (scoreDebat === "participer") {
        specialites["SES"] += 2;
        specialites["HGGSP"] += 2;
        specialites["HLP"] += 2;
       

    } else {
        specialites["SES"] -= 1;
        specialites["HGGSP"] -= 1;
        specialites["HLP"] -= 1;
    }

    // Question 06
    let scoreActualite = parseInt(document.getElementById('actualite').value, 0);
    specialites["HLP"] += scoreActualite;
    specialites["SES"] += scoreActualite;
    specialites["HGGSP"] += scoreActualite;

    // Question 15
    let scoreVO = parseInt(document.getElementById('films_VO').value, 0);
    if (scoreVO === "oui") {
        specialites["CAV"] += 2;
        specialites["LLCE"] += 2;

    } else {
        specialites["LLCE"] -= 1;
        specialites["CAV"] -= 1;

    }
    // Question 13
    let scoreGroupes = parseInt(document.getElementById('travaux_groupes').value, 0);
    if (scoreGroupes === "oui") {
        specialites["CAV"] += 2;
        specialites["LLCE"] += 2;
        specialites["PC"] += 2;
        specialites["SVT"] += 2;

    } else {
        specialites["LLCE"] -= 1;
        specialites["CAV"] -= 1;
        specialites["PC"] -= 1;
        specialites["SVT"] -= 1;
    }
    // Question 12
    let scoreProgrammer = parseInt(document.getElementById('programmer').value, 0);
    specialites["Maths"] += scoreProgrammer;
    specialites["SI"] += scoreProgrammer;
    specialites["NSI"] += scoreProgrammer;

    // Question 14
    let scoreMecanique = parseInt(document.getElementById('mecanique').value, 0);
    specialites["PC"] += scoreMecanique;
    specialites["NSI"] += scoreMecanique;
    specialites["SI"] += scoreMecanique;

   
    // Question 03
    let scoreEloquence = parseInt(document.getElementById('eloquence').value, 0);
    specialites["HLP"] += scoreEloquence;
    specialites["HGGSP"] += scoreEloquence;  

    // Question 16
    let scoreRoutine = parseInt(document.getElementById('routine').value, 0);
    specialites["SES"] += scoreRoutine;
    specialites["Maths"] += scoreRoutine;
    specialites["HGGSP"] += scoreRoutine;
    specialites["HLP"] += scoreRoutine;

    // Question 11
    let scoreDefi = parseInt(document.getElementById('defi_intellectuel').value, 0);
    specialites["HLP"] += scoreDefi;


    // resultats
    let divResultats = document.getElementById('resultats');
    divResultats.innerHTML += '<h2>Tes résultats :</h2>';
    for (let spe in specialites){
        divResultats.innerHTML += `<p>En ${spe} tu as obtenu le score de : ${specialites[spe]} points`;


window.reload = function() {
    document.getElementById('probleme_resoudre').value = 0;  
    document.getElementById('plaisir_lecture').value = 0;
    document.getElementById('film_realisation').value = 0;
    document.getElementById('qualite_redaction').value = 0;  
    document.getElementById('numerique_et_technologies').value = 0;
    document.getElementById('actualite').value = 0;
    document.getElementById('programmer').value = 0;
    document.getElementById('mecanique').value = 0;  
    document.getElementById('app_coeur').value = 0;
    document.getElementById('eloquence').value = 0;
    document.getElementById('travaux_groupes').value =0;
    document.getElementById('defi_intellectuel').value = 0;
    document.getElementById('routine').value = 0;
};
    }
}
