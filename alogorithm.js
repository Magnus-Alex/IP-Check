let IPs_activas = direcciones_actuales.filter(function(ip) {
    return ip.estado === "Activado";
});

function CheckIPs () {
    for (direccion of direcciones) { 
        let IP_activa = IPs_activas.some(function(ip) {
            return ip.IP === direccion.IP;
        })
        if (IP_activa) {

        }
        else {
            console.log(direccion);
            direccion.showIP();
        }
    }
}