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