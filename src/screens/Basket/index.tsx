import { StyleSheet, View } from "react-native";
import { Top } from "./components/Top";

import { Details } from "./components/Details";

interface BasketProps{
    top: {
        title: string
    },
    details: {
        name: string
        farmLogo: any
        farmName: string
        description: string
        price: string
    }
}

export function Basket({top, details}: BasketProps) {
    return (
        <>
            <Top {...top} />

            <View style={styles.basket}>
                <Details {...details} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
})