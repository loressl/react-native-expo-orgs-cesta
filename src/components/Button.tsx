import { TouchableOpacity, StyleSheet } from "react-native";
import { TextComponent } from './Text'

interface ButtonComponentProps{
    newStyles?: any
    title: string
    onPressButton: () => void
}

export function ButtonComponent({newStyles, title, onPressButton}: ButtonComponentProps) {
    return (
        <TouchableOpacity style={[styles.button, newStyles]} onPress={onPressButton}>
            <TextComponent text={title} newStyles={styles.buttonText} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})