import React, { useEffect, useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers } from '@jsonforms/material-renderers';
import { initialData, schema, uischema } from './Components/Schema';
import { FormPercentageControl } from './Components/PercentageControl';
import { rankWith, isNumberControl } from '@jsonforms/core';

const validatePercentages = (data: any): boolean => {
  const totalPercentage = data.countries.reduce(
    (acc: number, item: { percentage: number }) => acc + item.percentage, //  itère sur chaque élément du tableau et cumule la somme des pourcentages
    0
  );

  return totalPercentage === 100; // si la somme des pourcentages est égal à 100 retourne true
};

const App: React.FC = () => {
  const [data, setData] = useState<any>(initialData); // stock et met à jour les données du formulaire initial data contient les données de base
  const [isValid, setIsValid] = useState<boolean>(true); // determine si les données sont valides

  useEffect(() => {
    setIsValid(validatePercentages(data));
  }, [data]);

  const percentageControlTester = rankWith(3, isNumberControl); // associe le tester isNumberControl au rang 3

  const renderers = [
    ...materialRenderers, // importation des renderers jsonforms
    { tester: percentageControlTester, renderer: FormPercentageControl }, // Ajout d'un renderer personnalisé (FormPercentageControl)
  ];

  const handleChange = (updatedData: any) => {
    const totalPercentage = updatedData.countries.reduce(
      (sum: number, country: any) => sum + country.percentage,
      0
    );

    if (totalPercentage !== 100) {
      // Si la somme n'est pas égale à 100, affiche une alerte à l'utilisateur
      alert("Pour être valide l'ensemble doit faire 100%");
    } else {
      // sinon met a jour updatedData
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
      {!isValid && ( // affiche un paragraph uniquement si isValid est false
        <p style={{ color: 'red' }}>
          La somme des pourcentages doit être égale à 100%
        </p>
      )}
    </div>
  );
};

export default App;