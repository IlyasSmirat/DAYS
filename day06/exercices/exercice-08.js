/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function maxmin(tab){
    let max = tab[0]
    let min = tab[0]
    for(let i = 0; i < tab.length; i++)
    {
        if(tab[i] > max)
        {
            max = tab[i]
        }
    }
    for(let j = 0; j < tab.length; j++)
    {
        if(tab[j] < min)
        {
            min = tab[j]
        }
    }
    return [max, min]
}
