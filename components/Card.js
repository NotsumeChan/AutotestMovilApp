import { View, Text, StyleSheet, Image } from "react-native";


const Card = ({titulo, cuerpo, imagenes}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.cuerpo}>{cuerpo}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.imagenes}>{imagenes}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'column',
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 10
    },
    cuerpo: {
        fontSize: 16,
    },
    imagenes: {
        fontSize: 12,
        
    },
});

export default Card;