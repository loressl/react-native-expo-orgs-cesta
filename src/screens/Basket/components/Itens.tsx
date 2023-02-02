import { View, Image, StyleSheet } from 'react-native'
import { TextComponent } from '../../../components'

interface ItensProps {
    title: string
    list: Array<{
        name: string
        image: any
    }>
}

export function Itens({title, list}:ItensProps) {
    return (
        <>
            <TextComponent text={title} newStyles={styles.title} />
            {list?.map((item) => {
                return(
                    <View style={styles.item} key={item.name}>
                        <Image style={styles.image} source={item.image} />
                        <TextComponent text={item.name} newStyles={styles.name}/>
                    </View>
                )
            })}
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        color: "#464646",
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        alignItems: 'center'
    },
    image:{
        width: 46,
        height: 46,
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})