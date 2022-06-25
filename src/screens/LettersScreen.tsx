import React from 'react';

import {LettersCategory} from '../components';
import {lettersMock} from '../helpers';

export const LettersScreen = () => (
  <LettersCategory categoryName="Pidors" letters={lettersMock} />
);
