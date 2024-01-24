

import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Button, Pressable, Modal, FlatList
  
} from 'react-native';

import Formulario from './src/components/Formulario';
import Paciente  from './src/components/Paciente';
type YourPatientType = {
  id: string;
  // otras propiedades
};

const App = () => {
  // Zona Hooks
  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState<Array<YourPatientType>>([]);

  const [paciente, setPaciente] = useState({})





  const pacienteEditar = (id: string) => {
    const pacienteEditar = pacientes.find((paciente) => paciente.id === id);
    if (pacienteEditar) {
      setPaciente(pacienteEditar);
      console.log('Paciente a editar:', pacienteEditar);
      
      return pacienteEditar
    }
  }

  const borrarVistaPaciente = () => {
    
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
   <Text  style={styles.tituloButton}>Nueva Cita</Text>
   </Pressable>

  {pacientes.length === 0 ? 
  <Text style={styles.noPaciente} >No hay pacientes</Text> :
  <FlatList
  style= {styles.lista}
    data={pacientes}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => {


      return(
        <Paciente
        item={item}
        setModalVisible={setModalVisible}
        pacienteEditar={() => pacienteEditar(item.id)}
        

        />
      )

    }}
  />
  }

   
    <Formulario
    modalVisible={modalVisible}
   
    setModalVisible={setModalVisible}
    pacientes={pacientes}
    setPacientes={setPacientes}
    paciente={paciente}

     />
  


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
