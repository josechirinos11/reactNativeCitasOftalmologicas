import React from 'react';
import { Text, SafeAreaView, View, Pressable, StyleSheet, ScrollView } from 'react-native';
import {formatearFecha} from '../helpers/index'



function InformacionPaciente({ paciente, setPaciente, setModalPaciente }) {
  console.log('dentro de informacion paciente:  ', paciente);
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>
        Informacion{' '}
        <Text style={styles.tituloBold}>Paciente</Text>
      </Text>

      <View>
        <Pressable
          style={styles.button}
          onPress={() => {
            setModalPaciente(false)
            //setPaciente({})
          }}
        >
          <Text style={styles.btncerrar}>X CERRAR</Text>
        </Pressable>
      </View>
      <View
        style={styles.contenido}
      >
   
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.tituloBold}>{paciente.nombre}</Text>
        <Text style={styles.label}>Cedula:</Text>
        <Text style={styles.tituloBold}>{paciente.cedula}</Text>
        <Text style={styles.label}>Correo:</Text>
        <Text style={styles.tituloBold}>{paciente.correo}</Text>
        <Text style={styles.label}>Telefono:</Text>
        <Text style={styles.tituloBold}>{paciente.telefono}</Text>
        <Text style={styles.label}>Motivo de la cita:</Text>
        <Text style={styles.tituloBold}>{paciente.motivo}</Text>
        <Text style={styles.label}>fecha de la cita:</Text>
        <Text style={styles.tituloBold}>{paciente.fecha}</Text>
      
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  label: {
    paddingLeft: 10,
    color: '#000000',
    marginTop: 10,
    fontSize: 15,
    marginBottom: 5,
    fontWeight: '600',

  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#6D28D9',
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 20,
  },
  contenedor: {
    backgroundColor: '#F59E0B',
    flex: 1,
  },
  tituloBold: {
    textAlign: 'center',
    fontSize: 30,
    color: '#6D28D9',
    fontWeight: '900',
  },
  btncerrar: {
    textAlign: 'center',
    fontSize: 20,
    color: '#6D28D9',
    fontWeight: '900',
  },
  button: {
    backgroundColor: '#E06900',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  contenido: {
    marginBottom:20,
    backgroundColor: '#FFF',
    marginHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  }
});

export default InformacionPaciente;
