/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day07/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
const tab = [
    {nom : "ilyas", score : 10},
    {nom : "mohamed", score : 15},
    {nom : "Amine", score : 20}
]
function meilleurNote(tab){
    let meilleur = tab[0].score
    for(const candidat of tab)
    {
        if(candidat.score > meilleur)
        {
            meilleur = candidat.score
        }
    }
    for(const candidat of tab)
    {
        if(candidat.score === meilleur)
        {
            return candidat.nom
        }
    }
}
//console.log(meilleurNote(tab));
