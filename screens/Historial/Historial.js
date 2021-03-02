import React, {useState} from "react"
import {View, Text, StyleSheet} from 'react-native'
import {Picker} from "@react-native-picker/picker"
import Button from '../../Components/Button'

const Historial = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return(
        <View style={styles.container}>
            <Picker itemStyle={styles.texto}
                    
                    style={styles.barra}
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)}>

                <Picker.Item style={styles.barra} label="Ordenar por" value="Ordenar por" />
                <Picker.Item style={styles.barra} label="Color" value="Color" />
                <Picker.Item style={styles.barra} label="Fecha" value="Fecha" />
                <Picker.Item style={styles.barra} label="Precio" value="Precio" />
            </Picker>

            <View style={styles.listas} >
                <View>
                    <Button text="Verduleria"/>
                </View>

                <View>
                    <Button text="Ferreteria"/>
                </View>

                <View>
                    <Button text="Supermercado"/>  
                </View>
            </View>
 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flex: 1,
        backgroundColor: "#6C5B7B",
    },
    barra:{
       color: "black",
       width: "100%",
       height: "8%",
       fontSize: 15,
       backgroundColor: "#ffffff",
    },
    listas:{
        padding: "5%",
        display: "flex",
        alignContent:"center",
        flex: 1,
        backgroundColor: "#6C5B7B",
    }
})

export default Historial