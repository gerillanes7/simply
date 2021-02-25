import {View, Text, StyleSheet} from "react-native"
import React from "react"
import Button from "../../Components/Button"

const Home = () =>{
    return (
        <View style={styles.container}>
            <View>
                <Button text="Listas Pendientes"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        justifyContent:"center",
        alignContent:"center",
        flex: 1,
        backgroundColor: "#6C5B7B",
    }
})

export default Home
