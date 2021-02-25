import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"

const Button = ({text}) => {
    return (
        <View>
           <TouchableOpacity style={styles.button}>
               <Text style={styles.titulo}>
                   {text}
               </Text>
           </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#F8B195",
        width: "80%",
        padding: "3%",
        textAlign: "center",
        borderRadius:8,
        marginLeft:"10%",
        marginBottom: "5%",
    },
    titulo:{
        fontSize: 24,
        color: "#ffffff"
    }
})



export default Button