//Déclare les constante global
const pieces = [100, 50, 20, 10, 5, 2, 1];
const solution = [];
const i=0;

const rendu_glouton = function(aRendre, solution,i){
    //On check si il ne reste plus rien a rendre
    if(aRendre == 0){
        return solution;
    }
    //Si la piece utilisé est <= a la somme a rendre
    if(pieces[i] <= aRendre){
        //Alors on ajoute cette pieces dans le tableau contenant la solution
        solution.push(pieces[i]);
        //Et on soustrait la somme a rendre par cette même pièce
        //En rappellant la fonction pour recommencer
        return rendu_glouton(aRendre-pieces[i], solution, i);
    }
    else{
        //Sinon on incrémente l'index de la pièce pour passer à la suivante car la pièce était trop "grande"
        //En rappellant la fonction pour recommencer
        return rendu_glouton(aRendre, solution, i+1);
    }
}

//Affiche le résultat
const result = rendu_glouton(217, solution, i);
console.log(result);

//Compte le nombre de chaque piece utilisé pour le rendu
const nb_pieces = function(solution) {
    for (let j = 0; j < solution.length; j++) {
      let count = 0;
      for (let k = 0; k < solution.length; k++) {
        if (solution[j] === solution[k]) {
          count++;
        }
      }
      console.log(`Rendre ${count} x ${solution[j]}€`);
    }
};
nb_pieces(result);