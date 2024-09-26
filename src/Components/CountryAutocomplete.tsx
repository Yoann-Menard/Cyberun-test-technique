import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { withJsonFormsControlProps } from '@jsonforms/react';

interface CountryAutocompleteProps {
  data: string;
  handleChange: (path: string, value: string) => void;
  path: string;
}

const countriesList = ['France', 'Belgique', 'Allemagne', 'Inconnu'];

const CountryAutocomplete: React.FC<CountryAutocompleteProps> = ({
  data,
  handleChange,
  path,
}) => {
  return (
    <Autocomplete
      options={countriesList}
      value={data || ''}
      onChange={(_, newValue) => handleChange(path, newValue || '')}
      renderInput={(params) => <TextField {...params} label='Pays' />}
    />
  );
};

export const CustomCountryAutocomplete =
  withJsonFormsControlProps(CountryAutocomplete);
