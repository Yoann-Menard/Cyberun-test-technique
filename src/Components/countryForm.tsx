import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';
import { uiSchema } from './UiSchema';
import { validatePourcentages } from './ValidatePourcentage';
import { FormSchema } from './FormSchema';

interface ValidationError {
  message: string;
}

const CountryForm: React.FC = () => {
  const [formData, setFormData] = useState({ nom: '', pourcentages: [] });
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const handleSubmit = () => {
    const validation = validatePourcentages(formData);
    if (validation.errors.length > 0) {
      setErrors(validation.errors);
    } else {
      console.log('Données valides : ', formData);
    }
  };

  return (
    <div>
      <h1>Formulaire des pays et pourcentages</h1>
      <JsonForms
        schema={FormSchema}
        uischema={uiSchema}
        data={formData}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data }) => setFormData(data)}
      />
      {errors.length > 0 && (
        <div style={{ color: 'red' }}>
          {errors.map((error, index) => (
            <p key={index}>{error.message}</p>
          ))}
        </div>
      )}
      <button onClick={handleSubmit}>Soumettre</button>
    </div>
  );
};

export default CountryForm;
