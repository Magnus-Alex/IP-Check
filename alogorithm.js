const container = document.getElementById("container");

let IPs_activas = direcciones_actuales.filter(function(ip) {
    return ip.estado === "Activado";
});

function CheckIPs () {
    for (direccion of todas_las_direcciones) {
        let IP_activa = IPs_activas.some(function(ip) {
            return ip.IP === direccion.IP;
        })
        if (IP_activa) {
    
        }
        else {
            console.log(direccion);

            const extension = document.createElement("p");
            const node_extension = document.createTextNode(`Extención: ${direccion.extension}.`);

            extension.appendChild(node_extension);
            container.appendChild(extension);

            const nombre = document.createElement("p");
            const node_lugar = document.createTextNode(`Lugar: ${direccion.nombre}.`);

            nombre.appendChild(node_lugar);
            container.appendChild(nombre);

            // document.createTextNode = `<p>Lugar: ${direccion.nombre}. <br />`;
            // container.innerHTML = `Extension: ${direccion.extencion}. <br />`;
            // container.innerHTML = `Modelo: ${direccion.modelo}. <br /> </p>`;
            // container.innerHTML = `<hr />`;
        }
    }
}