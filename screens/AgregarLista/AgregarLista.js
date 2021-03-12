import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { ColorPicker  } from 'react-native-color-picker'

const AgregarLista = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                AGREGAR LISTA
            </Text>
            <View style={styles.containerInputs}>
                <Text style={styles.tituloInput}>NOMBRE</Text>
                <TextInput style={styles.input} autoFocus placeholder='Ingresar nombre' />
            </View>
            <View>
                <Text style={{ fontSize: 21, textAlign: 'center', color: '#fff' }}>
                    Elegir Color
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6C5B7B",
        display: 'flex',
        alignContent: 'center',
        paddingTop: '20%',
        paddingBottom: '6%'
    },
    titulo: {
        fontSize: 36,
        color: "#ffffff",
        textAlign: "center"
    },
    containerInputs: {
        padding: '5%'
    },
    tituloInput: {
        color: '#fff'
    },
    input: {
        backgroundColor: '#fff',
        padding: '3%'
    }
})

export default AgregarLista