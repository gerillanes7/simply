import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, SafeAreaView, FlatList, Button, TouchableOpacity} from 'react-native'
import ElementoLista from '../../Components/ElementoLista'
import firebase from '../../firebase/firebase'

const ListasPendientes = ({navigation}) => {

    const [listas, setListas] = useState([])

    const navegarAlDetalle = () => {
        navigation.navigate('Detalle Lista', {
            nombre: listas
        })
    }

    const renderItem = ({ item }) => (
        <ElementoLista title={item.titulo} color={item.color} navegarAlDetalle={navegarAlDetalle}/>
    );

    const fetchListas = async () => {
        const listas = await firebase.db.collection('listas').onSnapshot((querySnapShot) => {
            const listasPendientes = []
            querySnapShot.docs.forEach((lista) => {
                const {titulo, color} = lista.data()
                listasPendientes.push({
                    id: lista.id,
                    titulo,
                    color
                })
            })
            setListas(listasPendientes)
        })
    }

    const agregarLista = async () => {
        const listas = await firebase.db.collection('listas').add({
            titulo: 'Ferreteria',
            productos: [
                {
                    nombreProducto: 'Canios',
                    agregado: false,
                    precio: 33
                },
                {
                    nombreProducto: 'Cortina',
                    agregado: true,
                    precio: 22
                }
             ],
            color: '#2BB474'
        })
    }

    useEffect(() => {
        fetchListas()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                LISTAS PENDIENTES
            </Text>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                    <Text>
                        Hola
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerListas}>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={listas}
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
    },
    containerButton: {
        display: 'flex',
        alignContent: 'center'
    },
    button:{
        backgroundColor: "#F8B195",
        width: "30%",
        padding: "3%",
        textAlign: "center",
        borderRadius:190,
        marginLeft:"10%",
        marginBottom: "5%",
    },
})

export default ListasPendientes