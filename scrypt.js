const container = document.getElementById("container_id");
const direcciones = [];

let direcciones_actuales = [];
let todas_las_direcciones = [];

function IP (estado, IP, MAC) {
    this.estado = estado;
    this.IP = IP;
    this.MAC = MAC;
}

function IP_FIJA (nombre, extension, modelo, ip, mac) {
    this.nombre = nombre;
    this.extension = extension;
    this.modelo = modelo;
    this.IP = ip;
    this.MAC = mac;
}

class IP_A {
    constructor (nombre, extension, modelo, ip, mac) {
        this.nombre = nombre;
        this.extension = extension;
        this.modelo = modelo;
        this.IP = ip;
        this.MAC = mac;
    }

    showIP() {
        container.innerHTML += `
        <div class="phone-card">
            <img src="./assets/grandstream-networks-gpx-1615.png" alt="Phone grandstream gpx-1615">
            <p><b>${this.nombre}</b></p>
            <p>Extensión: <b>${this.extension}</b></p>
            <p>IP: <b>${this.IP}</b></p>
            <p>MAC: <b>${this.MAC}</b></p>
        </div>`;
    }
}