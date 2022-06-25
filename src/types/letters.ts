import {UserType} from './user';

export type LetterPreviewType = {
  id: string;
  author: UserType;
  content: string;
  isFavorite: boolean;
};
