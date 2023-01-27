import { Image, StyleSheet, Dimensions } from "react-native";
import { TextComponent } from '../../../components/Text'

import imageTop from '../../../../assets/topo.png'

const width = Dimensions.get('screen').width

export function Top() {
    return (
        <>
            <Image source={imageTop} style={styles.imageTop} />
            <TextComponent
                text="Detalhe da cesta"
                newStyles={styles.title}
            />
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
})