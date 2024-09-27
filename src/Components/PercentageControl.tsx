import { withJsonFormsControlProps } from '@jsonforms/react';

const PercentageControl = ({ data, handleChange, path }: any) => {
  return (
    <div>
      <input
        type='number'
        value={data}
        onChange={(event) => handleChange(path, Number(event.target.value))}
      />
      <span> {data || 0}%</span>{' '}
      {/* Affichage du pourcentage, ou 0 si data est false */}
    </div>
  );
};

export const FormPercentageControl =
  withJsonFormsControlProps(PercentageControl);
