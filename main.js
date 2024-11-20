class Contacto {
  constructor(nombre, apellido, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }

  generarWhatsAppLink() {
    const mensaje = ` Hola ${this.nombre} ${this.apellido}, seguimos a la orden por acá. Feliz día.`;
    return `https://wa.me/58${this.telefono}?text=${encodeURIComponent(
      mensaje
    )}`;
  }

  mostrarContacto() {
    return `
            <div class="contacto">
                <p><strong>Nombre:</strong> ${this.nombre} ${this.apellido}</p>
                <p><strong>Teléfono:</strong> <a href="${this.generarWhatsAppLink()}" target="_blank">${
      this.telefono
    }</a></p>
            </div>
        `;
  }
}

let contactos = [];

document.getElementById("registrar").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const telefono = document.getElementById("telefono").value;

  const nuevoContacto = new Contacto(nombre, apellido, telefono);
  contactos.push(nuevoContacto);

  const listaContactos = document.getElementById("listaContactos");
  listaContactos.innerHTML += nuevoContacto.mostrarContacto();

  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("telefono").value = "";
});
