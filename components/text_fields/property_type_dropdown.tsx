import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import usePropertyFormStore from '@/stores/forms/property_form';
import TextField from './text_field';

export const propertyTypes = ['Villa', 'Apartment', 'Studio', 'House', 'Penthouse'];

const PropertyTypeDropdown = () => {
  const [showOptions, setShowOptions] = useState(false);
  const setField = usePropertyFormStore((s) => s.setField);
  const selected = usePropertyFormStore((s) => s.fields.type || '');

  return (
    <View>
      <TextField
        store={usePropertyFormStore}
        fieldKey="type"
        placeholder="Type"
        icon="arrow-down"
        onPressIcon={() => setShowOptions(true)}
      />

      <Modal
        transparent
        visible={showOptions}
        animationType="fade"
        onRequestClose={() => setShowOptions(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setShowOptions(false)}
        >
          <View style={styles.dropdown}>
            {propertyTypes.map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => {
                  setField('type', item);
                  setShowOptions(false);
                }}
                style={styles.option}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  dropdown: {
    marginHorizontal: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    elevation: 10,
  },
  option: {
    padding: 14,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default PropertyTypeDropdown;
