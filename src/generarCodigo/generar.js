// No sé si esto debería estar en el front, como sea, esta es la función que va a generar los códigos de clase
// Aunque creo que es mejor si se generan desde el backend
class Generador {
  static generarCodigoClase(longitud = 8) {
    let conjuntoCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let codigoClase = "";

    for (let i = 0; i < longitud; i++) {
      let indiceAleatorio = Math.floor(
        Math.random() * conjuntoCaracteres.length
      );
      codigoClase += conjuntoCaracteres[indiceAleatorio];
    }

    return codigoClase;
  }
}

export { Generador };
