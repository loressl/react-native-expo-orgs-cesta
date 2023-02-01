import { Image, StyleSheet, Dimensions } from "react-native";
import { TextComponent } from '../../../components/Text'

import imageTop from '../../../../assets/topo.png'

const width = Dimensions.get('screen').width

interface TopProps {
    title: string
}

export function Top({title}: TopProps) {
    return (
        <>
            <Image source={imageTop} style={styles.imageTop} />
            <TextComponent
                text={title}
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