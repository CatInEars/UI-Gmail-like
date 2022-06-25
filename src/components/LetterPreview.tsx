import React from 'react';

import {Typography} from '../common';
import {LetterPreviewType} from '../types';

interface LetterPreviewProps {
  letter: LetterPreviewType;
}

export const LetterPreview: React.FC<LetterPreviewProps> = ({letter}) => (
  <Typography>{letter.author.firstname}</Typography>
);
