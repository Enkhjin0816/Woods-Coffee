import { TouchableOpacity, StyleSheet, Text, View } from "react-native"

const Button = ({type, text, label}: any) => {
    return(
        <View>
            <TouchableOpacity style={styles.bag}>
                <Text></Text>
                <Text></Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    primary: {

    },
    light: {

    },
    disabled: {
        height: 60,
        backgroundColor: '#2D2A2B',
    },
    bag: {

    },
    details: {

    }
})