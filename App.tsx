

import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Button, Pressable, Modal, FlatList, Alert

} from 'react-native';

import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InformacionPaciente from './src/components/InformacionPaciente';

type YourPatientType = {
  id: string;
  // otras propiedades
};

const App = () => {
  // Zona Hooks
  const [modalPaciente, setModalPaciente] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState<Array<YourPatientType>>([]);

  const [paciente, setPaciente] = useState({})





  const pacienteEditar = (id: string) => {
    const pacienteEditar = pacientes.find((paciente) => paciente.id === id);
    if (pacienteEditar) {
      setPaciente(pacienteEditar);
      //console.log('Paciente a editar:', pacienteEditar);

      return pacienteEditar
    }
  }
  const pacienteEliminar = (id: string) => {
    console.log('boton eliminar ', id)
    Alert.alert(
      'Desea eliminar esta cita',
      'Esta acción no se puede deshacer',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar', onPress: () => {
            const pacientesActualizados = pacientes.filter((pacientesState) => pacientesState.id !== id)
            console.log(pacientesActualizados)
            setPacientes(pacientesActualizados)
          }
        }
      ]
    );

  }

  const cerrarModal = () => {
   setModalVisible(false)
  }



  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas
        {' '}
        <Text style={styles.tituloBold}>OFTALMOLOGIA</Text>
      </Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.tituloButton}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ?
        <Text style={styles.noPaciente} >No hay pacientes</Text> :
        <FlatList
          style={styles.lista}
          data={pacientes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {


            return (
              <Paciente
                item={item}
                setModalVisible={setModalVisible}
                setPacientes={setPacientes}
                pacienteEditar={() => pacienteEditar(item.id)}
                pacienteEliminar={() => pacienteEliminar(item.id)}
                setModalPaciente = {setModalPaciente}

              />
            )

          }}
        />
      }

{modalVisible && (
      <Formulario
      modalVisible={modalVisible}
        cerrarModal={cerrarModal}
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}


      />
      )}

      <Modal
        visible={modalPaciente}
        animationType='slide'
      >
        <InformacionPaciente
          paciente={paciente}
          setPaciente={setPaciente}
          setModalPaciente={setModalPaciente}
        />
      </Modal>



    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  lista: {

  },
  button: {
    backgroundColor: '#6d28d9',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttonPressed: {
    backgroundColor: '#A633FF',
  },
  tituloButton: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 20,
  },
  contenedor: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  tituloBold: {
    textAlign: 'center',
    fontSize: 30,
    color: '#6D28D9',
    fontWeight: '900',
  },
  noPaciente: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    color: '#374151',
    fontWeight: '600',
  },
})

export default App;
