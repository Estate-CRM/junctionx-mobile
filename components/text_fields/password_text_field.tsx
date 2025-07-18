import useFormStore from '@/stores/forms/form';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import TextField from './text_field';

type FeatherIconName = keyof typeof Feather.glyphMap;

interface CustomInputProps extends TextInputProps {
  label: string;
  border?: boolean;
  fieldKey: string;
  onPressIcon?: () => void
}

const PasswordTextField: React.FC<CustomInputProps> = ({
  label,
  border = true,
  multiline,
  fieldKey,
  placeholder,
  onPressIcon,
  ...props
}) => {
  const value = useFormStore((state) => state.fields[fieldKey] || '');
  const setField = useFormStore((state) => state.setField);

  const [secure, setSecure] = useState(true);
    const toggleSecure = () => setSecure(prev => !prev);
    const iconName = secure ? "eye" : "eye-off";
    
  return (
      <TextField fieldKey={fieldKey} label={label} placeholder={placeholder} icon={iconName}  onPressIcon={()=> toggleSecure()}>
        </TextField>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#000000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    marginVertical:5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,

  },
  iconContainer: {
    justifyContent: 'center',
    paddingRight: 8,
    paddingTop: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    paddingVertical: 4,
  },
});

export default PasswordTextField;
