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
        backgroundColor: "#ffffff",
        width: "80%",
        padding: "5%",
        textAlign: "center",
        borderRadius:8,
        marginLeft:"10%"
    },
    titulo:{
        fontSize: 24,
    }
})



export default Button