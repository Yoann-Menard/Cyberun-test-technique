import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';
import { formSchema } from './formSchema';
import { uiSchema } from './uiSchema';

const validatePourcentages = (formData: any) => {
  let totalPourcentage = 0;
  formData.pourcentages.forEach((item: any) => {
    totalPourcentage += item.pourcentage;
  });
  if (totalPourcentage !== 100) {
    return {
      errors: [{ message: "Pour être valide l'ensemble doit faire 100%" }],
    };
  }
  return { errors: [] };
};
