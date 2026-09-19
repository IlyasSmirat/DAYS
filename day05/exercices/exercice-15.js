/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * VÉRIFICATEUR D'ANAGRAMME
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vérifiez si "chien" et "niche" sont des anagrammes (elles contiennent exactement les mêmes lettres, même quantité).
 * Indice : vous pouvez les transformer en tableau, les trier, et les rejoindre.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let mot1 = "chien"
let mot2 = "niche"
var i = 0;
let boo = false

while(i < mot1.length)
    {
    var count = 0
    var j = 0
    while(j < mot2.length)
    {
        if(mot1[i] == mot2[j])
        {
            count++;
            break;
        }
        j++
    }
    if(count == 0)
    {
       boo = true 
    }
    i++
}
if(!boo && mot1.length == mot2.length){
    console.log("true")
} else{
    console.log("false")
}
