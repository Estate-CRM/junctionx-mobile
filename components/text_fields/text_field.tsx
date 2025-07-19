import useFormStore from '@/stores/forms/form';
import { Feather, Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

type FeatherIconName = keyof typeof Feather.glyphMap;
type FormStore = {
  fields: Record<string, string>;
  setField: (key: string, value: string) => void;
};
interface CustomInputProps extends TextInputProps {
  leadingIcon?: FeatherIconName;
  label?: string;
  icon?: FeatherIconName;
  border?: boolean;
  onPressIcon?: () => void,
  fieldKey: string;
}

const TextField: React.FC<CustomInputProps> = ({
  leadingIcon,
  label,
  icon,
  border = true,
  onPressIcon,
  multiline,
  fieldKey,
  ...props
}) => {
  const value = useFormStore((state) => state.fields[fieldKey] || '');
  const setField = useFormStore((state) => state.setField);

  return (
    <View>

      <View style={styles.wrapper}>
        {label && <Text style={styles.label}>{label}</Text>}

        <View
          style={[
            styles.inputContainer,
            border && { borderColor: '#B0B2B4', borderWidth: 1 },
          ]}
        >
          {leadingIcon &&
          <Feather
          style={
            {
              paddingTop:6,
            }
          }
            name = {leadingIcon}
            color={"#919295"}
            size={24}
          />}

          <TextInput
            style={[
              styles.input,
              multiline && { height: 100, textAlignVertical: 'top' },
            ]}
            value={value}
            onChangeText={(val) => setField(fieldKey, val)}
            multiline={multiline}
            {...props}
          />
          {icon && (
            <TouchableOpacity style={styles.iconContainer} onPress={onPressIcon}>
              <Feather name={icon} size={20} color="#000000" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {/* {errors.password ? <Text style={{ color: 'red' }}>{errors.password}</Text> : null} */}

    </View>
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
    marginVertical: 5,
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

export default TextField;
