import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const Elem = ({text}) => {
    return (
        <View style={styles.ElemLine}>
            <Image source={require('../assets/bullet_point.png')} style={styles.ElemImage}/>
            <Text style={styles.ElemText}>
                {text}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    ElemLine: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginHorizontal: 10,
        flexDirection:'row',
        padding: 5,
        alignItems:'center'
    },
    ElemImage: {
        width: 15,
        height: 15,
        margin: 5
    },
    ElemText: {
        fontSize: 15,
    },
});

export default Elem;