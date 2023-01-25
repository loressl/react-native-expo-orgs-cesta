import { Image, StyleSheet, Dimensions, View } from "react-native";
import { TextComponent } from '../components/Text'

import imageTop from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width

export function Basket() {
    return (
        <>
            <Image source={imageTop} style={styles.imageTop} />
            <TextComponent
                text="Detalhe da cesta"
                newStyles={styles.title}
            />

            <View style={styles.basket}>
                <TextComponent
                    text="Cesta de Verduras"
                    newStyles={styles.name}
                />
                <View style={styles.farm}>
                    <Image style={styles.imageFarm} source={logo} />
                    <TextComponent
                        text="Jenny Jack Farm"
                        newStyles={styles.nameFarm}
                    />
                </View>
                <TextComponent
                    text="Uma cesta com produtos selecionados 
                    cuidadosamente da fazenda direto para sua cozina"
                    newStyles={styles.description}
                />
                <TextComponent
                    text="R$ 40,00"
                    newStyles={styles.price}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    imageTop: {
        width: "100%",
        height: 578 / 768 * width,
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        marginTop: '5%',
        fontWeight: 'bold',
        padding: 16
    },
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    name: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold"
    },
    farm: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    imageFarm: {
        width: 32,
        height: 32
    },
    nameFarm: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
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