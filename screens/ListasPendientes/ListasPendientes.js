import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native'
import Button from '../../Components/Button'
import ElementoLista from '../../Components/ElementoLista'

const data = [
    {
        id: '1',
        listTitle: 'Verduleria',
        color: '#F8B195'
    },
    {
        id: '2',
        listTitle: 'Ferreteria',
        color: '#355C7D'
    },
    {
        id: '3',
        listTitle: 'Supermercado',
        color: '#C06C84'
    },
    {
        id: '4',
        listTitle: 'Supermercado',
        color: '#C06C84'
    },
    {
        id: '5',
        listTitle: 'Supermercado',
        color: '#C06C84'
    },
    {
        id: '6',
        listTitle: 'Supermercado',
        color: '#C06C84'
    },
    {
        id: '7',
        listTitle: 'Supermercado',
        color: '#C06C84'
    },
    {
        id: '8',
        listTitle: 'Supermercado',
        color: '#C06C84'
    }
]


const ListasPendientes = ({navigation}) => {

    const navegarAlDetalle = () => {
        navigation.navigate('Detalle Lista')
    }

    const renderItem = ({ item }) => (
        <ElementoLista title={item.listTitle} color={item.color} navegarAlDetalle={navegarAlDetalle}/>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                LISTAS PENDIENTES
            </Text>
            <View style={styles.containerListas}>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
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
        paddingTop: '20%',
        paddingBottom: '6%'
    },
    titulo: {
        fontSize: 36,
        textAlign: 'center',
        color: '#FFF'
    },
    containerListas: {
        flex: 1,
    }
})

export default ListasPendientes