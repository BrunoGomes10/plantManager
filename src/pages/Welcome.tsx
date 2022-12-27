import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

import { Button } from '../components/Button';

export function Welcome(){

    const [visible, setVisible] = useState(true);

    function handleVisibility() {
        setVisible(true)
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>
            {
                visible &&
                <Image source={wateringImg} style={styles.image} />
            }
            

            <Text style={styles.subtitle}>
                Não esqueça mais de regar as suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button title='>'></Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        fontSize:32,
        fontWeight:'bold',
        textAlign:'center',
        color: colors.heading
    },

    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.heading,
        paddingHorizontal: 20
    },

    image: {
        height: 284,
        width: 292
    },

})