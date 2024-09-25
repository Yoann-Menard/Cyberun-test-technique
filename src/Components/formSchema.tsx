export const FormSchema = {
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