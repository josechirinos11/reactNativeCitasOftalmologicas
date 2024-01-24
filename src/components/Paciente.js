import React, {useState, useEffect} from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'

const Paciente = ({item, setModalVisible, pacienteEditar}) => {
   
    const {nombre, fecha, id} = item
    //console.log('dentro de item:  ', item)
    //console.log('dentro de paciente:  ', pacienteEditar)
    // Obtiene el nombre del día, el día del mes y el nombre del mes
  //pacienteEditar(id)
  const formatearFecha = fecha => {
    const nuevaFecha = new Date(fecha)
    const optiones = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    constejemplo = nuevaFecha.toLocaleDateString('es-ES', optiones);
     
     return constejemplo
  }


  const handleEditar = () => {
    // Llama a pacienteEditar con el id del paciente
    console.log('paciente id')
    console.log(id)
    setModalVisible(true);
    const pacienteYaEditado = pacienteEditar(id);



  };

  return (
    <View style={styles.contenedor}>
          <Text style={styles.label}>
      Paciente:
    </Text>
    <Text style={styles.texto}>
       {nombre}
    </Text>
    <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>


    <View style={styles.contenedorBtn}>
    <Pressable 
    style={[styles.btn, styles.btneditar]}
    onPress={handleEditar}
    >

      <Text style={styles.btnTexto}>Editar</Text>
    </Pressable>
    
     <Pressable style={[styles.btn, styles.btnEliminar]}>      
      <Text style={styles.btnTexto}>Eliminar</Text>
     </Pressable>

    </View>
     
    </View>
  )
}
 


const styles = StyleSheet.create({
  contenedorBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
paddingHorizontal: 20,
paddingVertical: 3,
borderRadius: 5,
  },
  btneditar: {
 backgroundColor: '#FFC300',
  },
  btnEliminar: {
    backgroundColor: '#FFC300',
  },
  btnTexto: {
    color: '#6D28D9',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
  },
  contenedor: {
backgroundColor: '#fff',
padding: 20,
marginTop: 20,
marginHorizontal: 20,
borderBottomColor: '#6D28D9',
borderBottomWidth: 1

},
label: {
color: '#374151',
textTransform: 'uppercase',
fontWeight: '700',
},
texto: {
  color: '#6D28D9',
  textTransform: 'uppercase',
  fontWeight: '700',
  fontSize: 20,
},
fecha: {
  color: '#374151',
},
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        color: '#374151',
        fontWeight: '700',
    },
  })


export default Paciente
