/**
 * JOUR 06 — GUIDE 02
 * Parcourir avec for...of
 *
 * OBJECTIF
 * Vous avez notes = [12, 15, 8, 19]. Calculez la moyenne des notes en parcourant le tableau.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let notes = [12, 15, 8, 19]
var moyenne = 0
var res
for(var i = 0; i < notes.length; i++)
{
    moyenne += notes[i]  
}
res = moyenne / i
console.log(res);
