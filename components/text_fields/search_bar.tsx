import useFormStore from '@/stores/forms/form';
import useSearchBarStore from '@/stores/search';
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

interface CustomInputProps extends TextInputProps {
    label: string;
    icon?: FeatherIconName;
    border?: boolean;
    onPressIcon?: () => void,
}

const SearchBar: React.FC<CustomInputProps> = ({
    label,
    icon,
    border = true,
    onPressIcon,
    multiline,
    ...props
}) => {
    const value = useSearchBarStore((state) => state.fields["search"] || '');
    const setField = useSearchBarStore((state) => state.setField);

    return (
        <View style={{
            margin: 12
        }}>

            <View style={styles.wrapper}>

                <View
                    style={[
                        styles.inputContainer,
                        border && { borderColor: '#B0B2B4', borderWidth: 1 },
                    ]}
                >
                    <TouchableOpacity style={styles.iconContainer}>

                        <Ionicons
                            name='search'
                            color={"#919295"}
                            size={24}
                        />
                    </TouchableOpacity>
                    <TextInput
                        style={[
                            styles.input,
                            multiline && { height: 100, textAlignVertical: 'top' },
                        ]}
                        value={value}
                        onChangeText={(val) => setField("search", val)}
                        multiline={multiline}
                        {...props}
                    />
                    {/* {icon && (
            <TouchableOpacity style={styles.iconContainer} onPress={onPressIcon}>
              <Feather name={icon} size={20} color="#000000" />
            </TouchableOpacity>
          )} */}
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
        padding:4
        // paddingRight: 8,
        // paddingTop: 4,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000000',
        paddingVertical: 4,
    },
});

export default SearchBar;
