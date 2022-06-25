import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {LetterPreview} from './LetterPreview';

import {Typography} from '../common';
import {convertHeight} from '../helpers';
import {LetterPreviewType} from '../types';

interface LettersCategoryProps {
  letters: LetterPreviewType[];
  categoryName: string;
}

export const LettersCategory: React.FC<LettersCategoryProps> = ({
  letters,
  categoryName,
}) => (
  <View style={styles.container}>
    <Typography style={styles.title}>{categoryName}</Typography>
    <FlatList
      data={letters}
      renderItem={({item: letter}) => (
        <LetterPreview letter={letter} key={letter.id} />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: convertHeight(24),
  },
  title: {
    paddingBottom: convertHeight(24),
  },
});
