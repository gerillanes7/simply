import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ElementoLista from '../../Components/ElementoLista'

const DetalleLista = () => {
    return (
        <View style={styles.container}>
            <ElementoLista title='Verduleria' color='#F8B195'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignContent: 'center',
        backgroundColor: "#6C5B7B",
        paddingTop: '20%',
        paddingBottom: '6%'
    }
})

export default DetalleLista