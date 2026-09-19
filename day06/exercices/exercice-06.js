/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 06 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * FUSION DE TABLEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez groupe1 = ["A", "B"] et groupe2 = ["C", "D"]. Fusionnez-les pour obtenir ["A", "B", "C", "D"].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-06
 * ▶️ Commande : node day05/exercices/exercice-06.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
var group1 = ["A", "B"]
var group2 = ["C", "D"]
var merg = group1.concat(group2)
console.log(merg)