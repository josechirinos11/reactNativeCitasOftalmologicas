import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  Button,
  StyleSheet,
  Text,
  Modal,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Alert

} from 'react-native';

import DatePicker from 'react-native-date-picker'

import { Calendar, LocaleConfig } from 'react-native-calendars';


const Formulario = ({ 
  modalVisible, 
  cerrarModal,
  pacientes,
  setPacientes,
  paciente: pacienteObj,
  setPaciente: setPacienteApp
}) => {

  const [id, setId] = useState('')
  const [nombre, setNombre] = useState('jose')
  const [cedula, setCedula] = useState('111')
  const [correo, setCorreo] = useState('@jose')
  const [telefono, setTelefono] = useState('555')
  const [motivo, setMotivo] = useState('cas')
  const [fecha, setFecha] = useState(new Date())
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('');


  // console.log('formalario inicio paciente:', pacienteObj);


  useEffect(() => {

    if (Object.keys(pacienteObj).length > 0) {
      console.log('si hay');
      setId(pacienteObj.id)
      setNombre(pacienteObj.nombre)
      setCedula(pacienteObj.cedula)
      setCorreo(pacienteObj.correo)
      setTelefono(pacienteObj.telefono)
      setMotivo(pacienteObj.motivo)
      setFecha(pacienteObj.fecha)


    } else {
      console.log('no hay nada');
    }
  }, [pacienteObj])



  const handleCita = () => {
    console.log('boton editar')
    console.log(id)
    //validar
    if ([nombre, cedula, correo, telefono].includes('')) {
      Alert.alert(
        'Atencion',
        'todos los campos son abligatorios'
      )
      return
    }


    const nuevoPaciente = {

      nombre,
      cedula,
      correo,
      fecha,
      motivo
    }



    // verificar si es un registro nuevo o edicion
    if (id) {
      //editando
      console.log('hay hago')



      nuevoPaciente.id = id

      const pacientesActualizados = pacientes.map(pacienteState =>
        pacienteState.id === nuevoPaciente.id ? nuevoPaciente : pacienteState)

      console.log('pasiente actualizados: ', pacientesActualizados)
      setPacientes(pacientesActualizados)
      setPacienteApp({})
      cerrarModal()
      return

    } else {
      console.log('nuevo registro')
      nuevoPaciente.id = Date.now()
      setPacientes([...pacientes, nuevoPaciente])

    }






    cerrarModal()
    setId('')
    setCedula('')
    setCorreo('')
    setNombre('')
    setTelefono('')
    setMotivo('')
    setFecha(new Date())
  }




  return (


    <View>
      <Modal animationType='slide' visible={modalVisible}>

        <View style={styles.modalContainer}>




          <Text style={styles.titulo}>
            {pacienteObj.id ? 'Editar' : 'Nueva'} {' '}
            <Text style={styles.tituloBold}>
              Cita
            </Text>
          </Text>

          <Pressable
            style={styles.cancelar}
            onPress={() => {
              cerrarModal()
              setPacienteApp({})
              setId('')
              setCedula('')
              setCorreo('')
              setNombre('')
              setTelefono('')
              setMotivo('')
              setFecha(new Date())
            }}
          >
            <Text style={styles.cancelarTexto}>X cancelar</Text>
          </Pressable>

          <Text style={styles.label}>Datos del paciente</Text>


          <ScrollView
            style={styles.scrollView}
          >

            <View style={styles.campo}>

              <TextInput
                style={styles.input}
                placeholder='Nombre'
                placeholderTextColor={'#666'}
                value={nombre}
                onChangeText={(text) => setNombre(text)}
              />
            </View>

            <View style={styles.campo}>

              <TextInput
                style={styles.input}
                placeholder='Cedula'
                placeholderTextColor={'#666'}
                keyboardType='numeric'
                value={cedula}
                onChangeText={(text) => setCedula(text)}
              />
            </View>

            <View style={styles.campo}>

              <TextInput
                style={styles.input}
                placeholder='Correo'
                placeholderTextColor={'#666'}
                keyboardType='email-address'
                value={correo}
                onChangeText={(text) => setCorreo(text)}
              />
            </View>

            <View style={styles.campo}>

              <TextInput
                style={styles.input}
                placeholder='Telefono'
                placeholderTextColor={'#666'}
                keyboardType='number-pad'
                value={telefono}
                maxLength={11}
                onChangeText={(text) => setTelefono(text)}
              />
            </View>


            <Text style={styles.labelFecha}>Fecha</Text>


            <View style={styles.campo}>
              <View style={styles.contenedorDate}>
                <DatePicker
                  date={fecha}
                  locale='es'
                  mode='date'
                  textColor='#696969'
                  onDateChange={(date) => setFecha(date)}


                />
              </View>

            </View>







            <View style={styles.campo}>

              <TextInput
                style={[styles.input, styles.motivoInput]}
                placeholder='Motivo de la cita'
                placeholderTextColor={'#666'}
                value={motivo}
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => setMotivo(text)}

              />
            </View>






          </ScrollView>

          <Pressable
            style={styles.agregar}
            onPress={handleCita}
          >
            <Text style={styles.cancelarTexto}>{pacienteObj.id ? 'Editar' : 'Agregar'} Cita</Text>
          </Pressable>



        </View>


      </Modal>
    </View>



  )
}

const styles = StyleSheet.create({
  scrollView: {
    borderWidth: 1,
    borderColor: '#EBEDEF', // Color del borde
    borderRadius: 8, // Bordes redondeados (ajusta según sea necesario)
    margin: 10, // Espacio alrededor del ScrollView
  },
  cancelar: {
    backgroundColor: '#5827A4',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
    elevation: 2, // Esto agrega relieve en Android
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

  },
  agregar: {
    backgroundColor: '#5827A4',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
    elevation: 2, // Esto agrega relieve en Android
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    marginBottom: 30,
    marginTop: 10,

  },
  cancelarTexto: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  contenedorDate: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 5,
    color: '#696969'
  },
  sombra: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  contenido: {
    flex: 1,
    backgroundColor: '#6D28D9',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#6D28D9',
    justifyContent: 'flex-start', // Ajusta según necesites
    alignItems: 'center', // Ajusta según necesites
    width: '100%', // Ajusta para ocupar el ancho completo
    height: '100%', // Ajusta para ocupar el alto completo

  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
    color: '#FFF',
  },
  tituloBold: {
    fontWeight: '900',
  },
  campo: {
    width: '100%', // Ocupa el ancho completo de la pantalla
    alignSelf: 'flex-start', // Alinea a la izquierda

    paddingHorizontal: 20, // Padding en los lados

    marginTop: 10,

  },
  label: {
    color: '#FFF',
    marginTop: 10,
    fontSize: 20,
    marginBottom: 5,
    fontWeight: '600',

  },
  labelFecha: {
    color: '#FFF',
    marginTop: 10,
    fontSize: 20,
    marginBottom: 5,
    fontWeight: '600',
    textAlign: 'center', // Centra el texto
  },
  input: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 5,
    color: '#696969'


  },
  motivoInput: {
    marginBottom: 30,
  },
});



export default Formulario
