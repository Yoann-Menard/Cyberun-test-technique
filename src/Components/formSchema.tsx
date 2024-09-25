export const formSchema = {
  type: 'object',
  properties: {
    nom: {
      type: 'string',
      title: 'Nom',
    },
    pourcentages: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          pays: {
            type: 'string',
            enum: ['France', 'Belgique', 'Allemagne', 'Inconnu'],
            title: 'Pays',
          },
          pourcentage: {
            type: 'number',
            minimum: 0,
            maximum: 100,
            title: 'Pourcentage',
          },
        },
        required: ['pays', 'pourcentage'],
      },
    },
  },
};

/* En se basant sur une application React
en utilisant la librairie jsonforms.io (en typescript), créer un formulaire ayant 2 champs : 
un champ Nom
un tableau avec dans la colonne de gauche un pays, dans la colonne de droite un pourcentage
le champ nom est un champ texte tout ce qu'il y a de plus classique
le tableau ressemble à cela :
Pays
[Liste de tous les pays (+inconnu) |v]       [___]%  [+] [Trash]

une fois rempli, cela doit ressembler à :
France        50%
Belgique      20%
Allemagne     10%
Inconnu       20%
Pour être valide l'ensemble doit faire 100%
*/
