import { View, Image, StyleSheet } from "react-native";
import  {TextComponent, ButtonComponent} from '../../../components'

interface DetailsProps {
    name: string
    farmLogo: any
    farmName: string
    description: string
    price: string
    button: string
}

export function Details({name, farmLogo, farmName, description, price, button}: DetailsProps) {
    return (
        <>
            <TextComponent text={name} newStyles={styles.name} />
            <View style={styles.farm}>
                <Image style={styles.imageFarm} source={farmLogo} />
                <TextComponent text={farmName} newStyles={styles.nameFarm} />
            </View>
            <TextComponent text={description} newStyles={styles.description} />
            <TextComponent text={price} newStyles={styles.price} />

            <ButtonComponent newStyles={styles.button} title={button} onPressButton={()=>{}} />
        </>
    )
}

const styles = StyleSheet.create({
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
    },
    button: {
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6
    },
})