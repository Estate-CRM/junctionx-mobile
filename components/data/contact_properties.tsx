import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Contact } from '../../models/contact';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    contact: Contact;
    name: string;
    image: string;
    match: string;
    matchColor: string;
    location: string;
};

export default function ContactCard({
    contact,
    name,
    image,
    match,
    matchColor,
    location,
}: Props) {
    const price = `${contact.min_budget}-${contact.max_budget}M DA`;
    const size = `${contact.desired_area_min}-${contact.desired_area_max}m²`;
    const type = contact.property_type.join(', ');

    return (
        <View style={styles.card}>
            <View style={styles.topRow}>
                <Image source={{ uri: image }} style={styles.avatar} />
                <View style={styles.nameMatch}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={[styles.matchBadge, { backgroundColor: matchColor + '20' }]}>
                        <Text style={[styles.matchText, { color: matchColor }]}>
                            •{match} match
                        </Text>
                    </View>
                </View>
            </View>

            <Text style={styles.textBold}>
                <Ionicons name="pricetag" size={14} color="#444" /> {price} • {location}
            </Text>
            <Text style={styles.text}>
                {type}   {size}
            </Text>

            <View style={styles.buttonsRow}>
                <TouchableOpacity style={styles.callButton}>
                    <Ionicons name="call" size={16} color="#fff" />
                    <Text style={styles.callText}>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.emailButton}>
                    <Ionicons name="mail" size={16} color="#444" type="feather" />
                    <Text style={styles.emailText}>Call</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderColor: '#E5E7EB',
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        marginVertical: 6,
        backgroundColor: '#fff',
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    nameMatch: {
        flex: 1,
    },
    name: {
        fontWeight: '600',
        fontSize: 16,
    },
    matchBadge: {
        marginTop: 2,
        alignSelf: 'flex-start',
        borderRadius: 12,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    matchText: {
        fontSize: 12,
        fontWeight: '500',
    },
    details: {
        fontSize: 13,
        color: '#444',
        marginBottom: 2,
    },
    buttonsRow: {
        flexDirection: 'row',
        marginTop: 10,
    },
    callButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3366FF',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 6,
        marginRight: 10,
    },
    callText: {
        color: '#fff',
        marginLeft: 4,
        fontWeight: '500',
    },
    emailButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F5F9',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 6,
    },
    emailText: {
        color: '#444',
        marginLeft: 4,
        fontWeight: '500',
    },
    textBold: {
  fontFamily: "Poppins-600",
  fontSize: 15,
  lineHeight: 23,
  color: "#666666",
},
    text: {
  fontFamily: "Poppins-500",
  fontSize: 15,
  lineHeight: 23,
  color: "#666666",
}
});
