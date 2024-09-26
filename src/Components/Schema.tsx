export const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: 'Nom',
    },
    countries: {
      type: 'array',
      title: 'Pays et Pourcentage',
      items: {
        type: 'object',
        properties: {
          country: {
            type: 'string',
            title: 'Pays',
            enum: ['France', 'Belgique', 'Allemagne', 'Inconnu'],
          },
          percentage: {
            type: 'number',
            title: 'Pourcentage',
          },
        },
      },
    },
  },
};

export const uischema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/name',
    },
    {
      type: 'Control',
      scope: '#/properties/countries',
      options: {
        detail: {
          type: 'HorizontalLayout',
          elements: [
            {
              type: 'Control',
              scope: '#/properties/country',
              options: {
                autocomplete: true,
              },
            },
            {
              type: 'Control',
              scope: '#/properties/percentage',
              options: {
                format: 'custom-percentage',
              },
            },
          ],
        },
      },
    },
  ],
};

export const initialData = {
  name: '',
  countries: [
    { country: 'France', percentage: 50 },
    { country: 'Belgique', percentage: 20 },
    { country: 'Allemagne', percentage: 10 },
    { country: 'Inconnu', percentage: 20 },
  ],
};
