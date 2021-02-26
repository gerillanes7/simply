import {View, Text, StyleSheet} from "react-native"
import React from "react"
import Button from "../../Components/Button"

const Home = (props) =>{
    const navegar = () => {
        props.navigation.navigate('Listas')
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>
                    SIMPLY
                </Text>
            </View>

            <View>
                <Button text="Listas Pendientes" navegar={navegar} />
            </View>

            <View>
                <Button text="Historial"/>
            </View>

            <View>
                <Button text="Recordatorios"/>  
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
    },
    titulo: {
        fontSize: 74,
        color: "#ffffff",
    },
    containerTitulo: {
        textAlign: "center",
        margin: "5%",
        padding: "5%",
    }
})

export default Home
