import {LetterPreviewType} from '../../types';

export const lettersMock: LetterPreviewType[] = [
  {
    id: '10',
    author: {
      id: '1',
      firstname: 'Pavel',
      secondname: 'Vedenichev',
    },
    content: 'Hello world',
    isFavorite: false,
  },
  {
    id: '11',
    author: {
      id: '2',
      firstname: 'Bogdan',
      secondname: 'Dorozhko',
    },
    content: "Hello I'm gay",
    isFavorite: false,
  },
];
