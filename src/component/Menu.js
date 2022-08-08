import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => navigation.navigate("Course")}
            >
                <Image style={styles.iconStyle}
                    source={{ uri: "https://img.icons8.com/stickers/100/000000/training.png" }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => navigation.navigate("About")}
            >
                <Image style={styles.iconStyle}
                    source={{ uri: "https://img.icons8.com/stickers/100/000000/about.png"}} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => navigation.navigate("Student")}
            >
                 <Image style={styles.iconStyle}
                    source={{ uri: "https://img.icons8.com/color/48/000000/account-skin-type-3.png" }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => navigation.navigate("Contact")}
            >
                 <Image style={styles.iconStyle}
                    source={{ uri: "https://img.icons8.com/stickers/100/000000/phone-office.png" }} />
            </TouchableOpacity>


        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio:1
    }
})