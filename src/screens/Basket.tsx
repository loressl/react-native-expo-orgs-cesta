import { Image, StyleSheet, Dimensions, Text } from "react-native";

import imageTop from '../../assets/topo.png'

const width = Dimensions.get('screen').width

export function Basket() {
    return(
        <>
            <Image source={imageTop} style={styles.imageTop} />
            <Text style={styles.title}>Detalhe da cesta</Text>
        </>
    )
}

const styles = StyleSheet.create({
    imageTop:{
        width: "100%",
        height: 578 / 768 * width,
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color:'white',
        marginTop: '5%',
        fontWeight: 'bold',
        padding: 16
    }
})