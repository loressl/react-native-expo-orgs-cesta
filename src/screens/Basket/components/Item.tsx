import { View, Image, StyleSheet } from 'react-native'
import { TextComponent } from '../../../components'

interface ItemProps {
    item: {
        name: string
        image: any
    }
}

export function Item({item: { name, image }}: ItemProps) {

    return (
        <View style={styles.item}>
            <Image style={styles.image} source={image} />
            <TextComponent text={name} newStyles={styles.name} />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center'
    },
    image: {
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