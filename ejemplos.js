
useEffect(() => {
    console.log('nueva cita');
    if(Object.keys(pacienteObj).length > 0) {
      console.log('con agenda llena');
      setId(pacienteObj.id)
      setNombre(pacienteObj.nombre)
      setCedula(pacienteObj.cedula)
      setCorreo(pacienteObj.correo)
      setTelefono(pacienteObj.telefono)
      setMotivo(pacienteObj.motivo)
      setFecha(pacienteObj.fecha)

    }
  }, [])