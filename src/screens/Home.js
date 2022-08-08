import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Menu from '../component/Menu'

const Home = () => {
    const description = ""
    return (
        <View style={styles.homeContainer}>
            <Image
                style={styles.headerImage}
                source={{ uri: "https://assets.pandaily.com/uploads/2019/06/online-education.jpg" }}
            />
            <View style={styles.header}>
                {/* <Text style={{ fontSize: 40, marginLeft: 80 }}>Welcome to</Text>
                <Text style={{ fontSize: 40, marginLeft: 50 }}>Online Education</Text> */}
            </View>
            <View style={styles.description}>
                <Text style={{ fontSize: 30 }}>{description}</Text>
            </View>
            <View style={styles.lineStyle}></View>
            <View style={styles.menuContainer}>
                
                <Menu />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({

    homeContainer: {

        marginTop: 50,
        height: "100%"
    },
    headerImage: {
        borderWidth: 2,
        width: 350,
        height: 300,
        marginLeft: 30,
        marginTop: 20,
        resizeMode: "contain"
    },
    header: {
        marginTop: 40
    },
    description: {

        margin: 20,
        alignItems: "center"
    },
    menuContainer: {
       
    },
    lineStyle:{
        height:0,
        borderWidth:1,
        borderColor:"grey",
        marginLeft:40,
        marginRight:40,
       marginBottom:10,
       marginTop:150
        
    }
})