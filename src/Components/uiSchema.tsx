export const uiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/nom',
    },
    {
      type: 'Control',
      scope: '#/properties/pourcentages',
      options: {
        detail: {
          type: 'VerticalLayout',
        },
      },
    },
  ],
};
