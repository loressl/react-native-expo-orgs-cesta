import { FlatList, StyleSheet, View } from "react-native";
import { Top } from "./components/Top";

import { Details } from "./components/Details";
import { Item } from "./components/Item";
import { TextComponent } from "../../components";

interface BasketProps {
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

export function Basket({ top, details, itens }: BasketProps) {
    return (
        <>
            <FlatList
                data={itens.list}
                renderItem={Item}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() =>
                    <>
                        <Top {...top} />
                        <View style={styles.basket}>
                            <Details {...details} />
                            <TextComponent text={itens.title} newStyles={styles.title}/>
                        </View>
                    </>
                }
            />

        </>
    )
}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    title: {
        color: "#464646",
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
})