import { createConfigItem } from '@babel/core';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import'../global/Global.js';
import useParseInt from './useParseInt';
import useContext from '../global/Test.js';

const Header = ({text, setDataValue}) => {
    
    const [count, setCount] = useState(0);
    const [textEntry, setTextEntry] = useState("0");
    /*useParseInt est un hook (visible par le terme use) qui maj parsed grace a son useEffect activé par modif du textEntry*/
    const parsed = useParseInt(textEntry);
    const [theme, setTheme] = useContext(Context)

    /*Ce useEffect ne s'applique que lors de la modification de la valeur parse et update la valeur count en fonction de la valeur entré*/
    useEffect(() => {
        if (!parsed) {setTextEntry("0"); return;}
        setCount(parsed)
    }, [parsed])

    /*Ce useEffect ne s'applique que lors de la modification de la valeur count*/
    useEffect(() => {
        setTextEntry(count.toString())
        setDataValue(count);
    }, [count])

    /*Exemple d'une fonction interne au composant, dont la notation est visible par un _*/
    const _handleSubmit = () => {
        global.darkTheme += 1
        setTheme(theme.darkmode ? {darkmode: false} : {darkmode: true})
        setCount(count+1);
    }

    return (
        <View style={styles.header}>
        {/*_handleSubmit est une fonction privée (dispo que dans le composant), info visible par le user par le "_"*/}
        <TouchableOpacity onPress={_handleSubmit}>
            <Image source={require('../assets/crescent-moon.png')} style={styles.darkThemeImage}/>
        </TouchableOpacity>
        <TextInput style={styles.headerText} onChangeText={setTextEntry} value={textEntry}/>
        <Text style={styles.headerText}>
            {text}  
        </Text>
      </View>
    );
};

const styles = StyleSheet.create({
    header: {
        /*Génère un expace entre les éléments*/
        justifyContent: 'space-between',
        padding: 10,
        /*Mets les éléments en ligne*/
        flexDirection:'row',
        backgroundColor: '#ecf0f1',
        /*Centre les éléments sur l'autre axe (ici colonne)*/
        alignItems:'center'
    },
    headerText: {
        /*Taille de la police de caractères*/
        fontSize: 40,
    },
    darkThemeImage: {
        /*Défini les dimensions de l'élément (effet d'un resize)*/
        width: 50,
        height: 50,
        /*Créer une distance par rapport aux bords (en px)*/
        borderWidth: 1,
        /*Bordure blanche par défaut*/
        borderColor: 'rgb(128,128,128)',
        /*Permet d'arrondir les angles de la bordure (en px)*/
        borderRadius: 8,
    }
});

export default Header;