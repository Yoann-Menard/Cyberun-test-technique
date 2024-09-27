import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { withJsonFormsControlProps } from '@jsonforms/react';

interface CountryAutocompleteProps {
  data: string;
  handleChange: (path: string, value: string) => void;
  path: string;
}

const countriesList = ['France', 'Belgique', 'Allemagne', 'Inconnu']; // Liste des pays pour l'auto complétion

const CountryAutocomplete: React.FC<CountryAutocompleteProps> = ({
  data,
  handleChange,
  path,
}) => {
  return (
    <Autocomplete
      options={countriesList} // Liste des options de pays disponibles pour l'autocomplétion
      value={data || ''} // Définit la valeur du champ d'autocomplétion vide si data est false
      onChange={(_, newValue) => handleChange(path, newValue || '')} // Gestionnaire de changement, qui appelle handleChange avec le chemin et la nouvelle valeur sélectionnée
      renderInput={(params) => <TextField {...params} label='Pays' />} // Rendu du champ d'entrée avec le label "Pays"
    />
  );
};

export const CustomCountryAutocomplete =
  withJsonFormsControlProps(CountryAutocomplete);
