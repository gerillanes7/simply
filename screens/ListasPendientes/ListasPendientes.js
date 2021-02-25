import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Button from '../../Components/Button'

const ListasPendientes = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                LISTAS PENDIENTES
            </Text>
            <View style={styles.containerListas}>
                <Button text='VERDULERIA'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignContent: 'center',
        backgroundColor: "#6C5B7B",
    },
    titulo: {
        fontSize: 36,
        color: '#FFF'
    },
    containerListas: {
        flex: 1,
    }
})

export default ListasPendientes