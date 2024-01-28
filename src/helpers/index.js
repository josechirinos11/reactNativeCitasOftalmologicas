

export const formatearFecha = fecha => {
    const nuevaFecha = new Date(fecha)
    const optiones = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    constejemplo = nuevaFecha.toLocaleDateString('es-ES', optiones);

    return constejemplo
  }