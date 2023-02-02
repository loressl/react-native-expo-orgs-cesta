import { ScrollView, StyleSheet, View } from "react-native";
import { Top } from "./components/Top";

import { Details } from "./components/Details";
import { Itens } from "./components/Itens";

interface BasketProps{
    top: {
        title: string
    }
    details: {
        name: string
        farmLogo: any
        farmName: string
        description: string
        price: string
        button: string
    }
    itens: {
        title: string
        list: Array<{
            name: string
            image: any
        }>
    }
}

export function Basket({top, details, itens}: BasketProps) {
    return (
        <ScrollView>
            <Top {...top} />

            <View style={styles.basket}>
                <Details {...details} />
                <Itens {...itens} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
})