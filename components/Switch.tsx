import { Colors } from '@/constants/Colors';
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


interface SwitchExampleProps {
  selectedOption: boolean;
  setSelectedOption: (option: boolean) => void;
}

const SwitchExample : React.FC<SwitchExampleProps> = ({ selectedOption, setSelectedOption }) => {
  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        {/* Botón de Iniciar Sesión */}
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption == false && styles.selectedButton,
          ]}
          onPress={() => setSelectedOption(false)} // Cambia el estado externo
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.optionText,
              selectedOption == false && styles.selectedText,
            ]}
          >
            Iniciar Sesión
          </Text>
        </TouchableOpacity>

        {/* Botón de Registrarse */}
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption == true && styles.selectedButton,
          ]}
          onPress={() => setSelectedOption(true)} // Cambia el estado externo
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.optionText,
              selectedOption == true && styles.selectedText,
            ]}
          >
            Registrarse
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: '#FFF', // Fondo blanco para el switch
    overflow: 'hidden',
    width: 290, // Limitar el ancho del switch
    height: 50, // Altura del switch
  },
  optionButton: {
    flex: 1, // Los botones ocupan el mismo espacio
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004c60', // Fondo azul por defecto
  },
  selectedButton: {
    backgroundColor: "#E7D6BC", // Color crema claro cuando está seleccionado
    width: 30, // Ancho del botón seleccionado
  },
  optionText: {
    color: '#FFF', // Texto blanco por defecto
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#055776', // Texto azul cuando está seleccionado
  },
});

export default SwitchExample;
