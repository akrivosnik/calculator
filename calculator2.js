let apotelesma = document.getElementById("text"); // Πεδίο εμφάνισης
let apotelesmaison = 0; // Αποθηκευμένος αριθμός
let praxi = ""; // Τρέχουσα πράξη
let neaEisodos = false; // Για να ξέρουμε αν πρέπει να αντικαταστήσουμε το value

// Πλήκτρα αριθμών
let ena = document.getElementById("ena");
let dio = document.getElementById("dio");
let tria = document.getElementById("tria");
let tessera = document.getElementById("tessera");
let pente = document.getElementById("pente");
let e3i = document.getElementById("e3i");
let efta = document.getElementById("efta");
let oxto = document.getElementById("oxto");
let ennia = document.getElementById("ennia");
let miden = document.getElementById("miden");

function prostheseArithmo(num) {
    if (apotelesma.value === "0" || neaEisodos) {
        apotelesma.value = num; // Αντικαθιστά το 0 ή αν έχει γίνει νέα πράξη
    } else {
        apotelesma.value += num; // Προσθέτει το νούμερο στη συμβολοσειρά
    }
    neaEisodos = false; // Μετά την εισαγωγή αριθμού, το κάνουμε false
}

// Event listeners για αριθμούς
ena.addEventListener("click", function() { prostheseArithmo("1"); });
dio.addEventListener("click", function() { prostheseArithmo("2"); });
tria.addEventListener("click", function() { prostheseArithmo("3"); });
tessera.addEventListener("click", function() { prostheseArithmo("4"); });
pente.addEventListener("click", function() { prostheseArithmo("5"); });
e3i.addEventListener("click", function() { prostheseArithmo("6"); });
efta.addEventListener("click", function() { prostheseArithmo("7"); });
oxto.addEventListener("click", function() { prostheseArithmo("8"); });
ennia.addEventListener("click", function() { prostheseArithmo("9"); });
miden.addEventListener("click", function() { prostheseArithmo("0"); });
function orisePraxi(simbol) {
    apotelesmaison = parseFloat(apotelesma.value); // Αποθηκεύει τον πρώτο αριθμό
    praxi = simbol; // Αποθηκεύει την πράξη
    neaEisodos = true; // Η επόμενη εισαγωγή θα αντικαταστήσει την τιμή
}

// Event listeners για πράξεις
prosthesi.addEventListener("click", function() { orisePraxi("+"); });
afairesi.addEventListener("click", function() { orisePraxi("-"); });
pollaplasiasmos.addEventListener("click", function() { orisePraxi("*"); });
div.addEventListener("click", function() { orisePraxi("/"); });
mod.addEventListener("click", function() { orisePraxi("%"); });
ison.addEventListener("click", function() {
    let deuterosArithmos = parseFloat(apotelesma.value); // Δεύτερος αριθμός
    let apotelesmaTeliko = 0;

    // Εκτελεί την αποθηκευμένη πράξη
    if (praxi == "+") {
        apotelesmaTeliko = apotelesmaison + deuterosArithmos;
    } else if (praxi == "-") {
        apotelesmaTeliko = apotelesmaison - deuterosArithmos;
    } else if (praxi == "*") {
        apotelesmaTeliko = apotelesmaison * deuterosArithmos;
    } else if (praxi == "/") {
        if (deuterosArithmos == 0) {
            apotelesma.value = "Error"; // Διαίρεση με το μηδέν
            return;
        }
        apotelesmaTeliko = apotelesmaison / deuterosArithmos;
    } else if (praxi == "%") {
        apotelesmaTeliko = apotelesmaison % deuterosArithmos;
    }

    apotelesma.value = apotelesmaTeliko; // Εμφανίζει το αποτέλεσμα
    apotelesmaison = apotelesmaTeliko; // Αποθηκεύει το νέο αποτέλεσμα
    neaEisodos = true; // Η επόμενη είσοδος θα αντικαταστήσει το value
});
katharismos.addEventListener("click", function() {
    apotelesma.value = "0"; // Καθαρίζει την οθόνη
    apotelesmaison = 0; // Μηδενίζει την αποθηκευμένη τιμή
    praxi = ""; // Καθαρίζει την πράξη
    neaEisodos = false;
});