import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Card = ({ title, content, imageSource }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image source={imageSource} style={styles.image} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#292923',
        borderRadius: 8,
        padding: 6,
        margin: 3,
        height: 60, // Decreased card height
        width: '90%', // Increased card width
        alignSelf: 'center', // Center the card horizontally
    },
    imageContainer: {
        justifyContent: 'center', // Center the image vertically
        marginRight: 8, // Decreased right margin for space between image and content
    },
    image: {
        width: 40, // Decreased image width
        height: 40, // Decreased image height
        resizeMode: 'cover',
        borderRadius: 20, // half of width or height (whichever is smaller)
    },
    contentContainer: {
        flex: 1, // Adjusted content container flex to take remaining space
        paddingLeft: 8,
        justifyContent: 'center', // Center content vertically
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        color: "#fff",
    },
    content: {
        color: "#fff",
        fontSize: 14,
    },
});

export default Card;
