import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function AiAnalyseCard() {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: "row" }}>
                <View
  style={{
    width: 50,
    height: 50,
    marginRight:8,
    borderRadius:6
,    backgroundColor: "#3366FF",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <MaterialCommunityIcons name="brain" size={30} color="#FFFFFF" />
</View>

                <View>
                    <View style={styles.header}>
                        <Text style={styles.title}>AI Analyse</Text>
                    </View>
                    <Text style={styles.content}>
                        igoiudfgutfyvbjuytrfdcvbnjuytrfcv{'\n'}
                        bnjuytfvbnjuytrfdcvb
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome6 name="lightbulb" size={24} style={styles.icon} color="#3366FF" />

                        <Text style={styles.recommendation}>
                            <Text style={styles.recommendationHighlight}>Recommandation: Every 24h</Text>
                        </Text>
                    </View>

                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#BDD2FF',
        borderRadius: 8,
        padding: 12,
        margin: 10,
        borderWidth: 1,
        borderColor: "#3366FF"
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    icon: {
        marginRight: 6,
    },
    title: {
        fontWeight: '600',
        fontSize: 16,
    },
    content: {
        color: '#444',
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 8,
    },
    recommendation: {
        fontSize: 13,
        color: '#3366FF',
    },
    recommendationHighlight: {
        fontWeight: '500',
    },
});
