import { View, Image, StyleSheet } from "react-native";
import { TextComponent } from "../../../components/Text";

import logo from '../../../../assets/logo.png'

export function Details() {
    return (
        <>
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
    }
})