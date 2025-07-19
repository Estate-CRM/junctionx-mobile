import React from 'react';
import { View, TextInput, StyleSheet, ViewProps } from 'react-native';

interface TextGroup extends ViewProps{
    placeholder1:string,
    placeholder2:string,
}

export const TwoInputsRow: React.FC<TextGroup> = ({placeholder1, placeholder2,...props}) => {
  return (
    <View style={styles.row}>
      <TextInput
        style={[styles.input, { marginRight: 8 }]}
        placeholder={placeholder1}
      />
      <TextInput
        style={styles.input}        
        placeholder={placeholder2}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
});

export default TwoInputsRow;
