import React, { useEffect, useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers } from '@jsonforms/material-renderers';
import { initialData, schema, uischema } from './Components/Schema';
import { FormPercentageControl } from './Components/PercentageControl';
import { rankWith, isNumberControl } from '@jsonforms/core';

const validatePercentages = (data: any): boolean => {
  const totalPercentage = data.countries.reduce(
    (acc: number, item: { percentage: number }) => acc + item.percentage,
    0
  );

  return totalPercentage === 100;
};

const App: React.FC = () => {
  const [data, setData] = useState<any>(initialData);
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    setIsValid(validatePercentages(data));
  }, [data]);

  const percentageControlTester = rankWith(3, isNumberControl);

  const renderers = [
    ...materialRenderers,
    { tester: percentageControlTester, renderer: FormPercentageControl },
  ];

  const handleChange = (updatedData: any) => {
    const totalPercentage = updatedData.countries.reduce(
      (sum: number, country: any) => sum + country.percentage,
      0
    );

    if (totalPercentage !== 100) {
      alert("Pour être valide l'ensemble doit faire 100%");
    } else {
      setData(updatedData);
    }
  };

  return (
    <div>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={renderers}
        onChange={({ data }) => setData(data)}
      />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {!isValid && (
        <p style={{ color: 'red' }}>
          La somme des pourcentages doit être égale à 100%
        </p>
      )}
    </div>
  );
};

export default App;