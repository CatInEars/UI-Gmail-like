import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

interface TypographyProps {
  children: string;
  weight?: TextStyle['fontWeight'];
  size?: number;
  style?: TextStyle;
  color?: TextStyle['color'];
  lh?: TextStyle['lineHeight'];
  family?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  weight = 'normal',
  size = 14,
  style = {},
  color = 'black',
  lh = 16,
  family = 'OpenSans_500Medium',
}) => (
  <Text
    style={StyleSheet.compose(
      {
        fontWeight: weight,
        fontSize: size,
        lineHeight: lh,
        fontFamily: family,
        color,
      },
      style,
    )}>
    {children}
  </Text>
);
