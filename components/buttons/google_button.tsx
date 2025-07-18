// import React from "react";
// import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

// interface ElevatedButtonProps {
//     onPress?: () => void;
//     style?: ViewStyle;
//     textStyle?: TextStyle;
// }

// const styles = StyleSheet.create({
//     button: {
//         width: "80%",
//         height: 56,
//         backgroundColor: "#F2F3F7",
//         borderRadius: 15,
//         margin: 10
//     },
//     text: {
//         fontFamily: "HelveticaNeue",
//         fontStyle: "normal",
//         fontWeight: "400",
//         fontSize: 14,
//         letterSpacing: 1.5, // Adjusted from 15 which was too high for letters
//         color: "#F6F1FB",
//     },
// });

// export const ElevatedButton: React.FC<ElevatedButtonProps> = ({
//     onPress,
//     style,
//     textStyle,
// }) => {
//     return (
//         <TouchableOpacity
//             style={[styles.button, { backgroundColor:  }, style]}
//             onPress={onPress}
//             activeOpacity={0.8}
//         >
//             <Text style={[styles.text, textStyle]}>{title}</Text>
//         </TouchableOpacity>
//     );
// };
