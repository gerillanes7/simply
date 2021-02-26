import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


const ElementoLista = ({ title, color, navegarAlDetalle }) => {
    return (
        <View>
            <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={() => navegarAlDetalle()}>
               <Text style={styles.titulo}>
                   {title}
               </Text>
           </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        width: "80%",
        padding: "3%",
        textAlign: "center",
        borderRadius:8,
        marginLeft:"10%",
        marginBottom: "5%",
    },
    titulo:{
        fontSize: 24,
        color: "#ffffff",
        textAlign: "center"
    }
})

export default ElementoLista