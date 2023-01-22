import { Image, StyleSheet, Dimensions, Text, View } from "react-native";

import imageTop from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width

export function Basket() {
    return(
        <>
            <Image source={imageTop} style={styles.imageTop} />
            <Text style={styles.title}>Detalhe da cesta</Text>

            <View style={styles.basket}>
                <Text style={styles.name}>Cesta de Verduras</Text>
                <View style={styles.farm}>
                    <Image style={styles.imageFarm} source={logo} />
                    <Text style={styles.nameFarm}>Jenny Jack Farm</Text>
                </View>
                <Text style={styles.description}>
                    Uma cesta com produtos selecionados 
                    cuidadosamente da fazenda direto para sua cozina
                </Text>
                <Text style={styles.price}>
                    R$ 40,00
                </Text>
            </View>
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
    },
    basket:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: 'MontSerratBold'
    },
    farm: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    imageFarm:{
        width: 32,
        height: 32
    },
    nameFarm: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: 'MontSerratRegular'
    },
    description: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: "#2a9f85",
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})