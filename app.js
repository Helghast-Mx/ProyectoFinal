
let url = "http://127.0.0.1:8080/api/alumnos";

function guardarDatos(){
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const fechaCumpleaños = document.getElementById("fechaCumpleaños").value;
    const telPerson = document.getElementById("telPerson").value;
    const emailPerson = document.getElementById("emailPerson").value;
    const emailOfi = document.getElementById("emailOfi").value;
    const telOfi = document.getElementById("telOfi").value;
    

    const jsonJ = {
        "nombre" : nombre,
        "fechaCumpleaños" : fechaCumpleaños ,
        "telPerson" : telPerson,
        "emailPerson"  : emailPerson,
        "emailOfi"   :  emailOfi,
        "telOfi" : telOfi
    }

    mandarParametros(jsonJ)
}

function mandarParametros(datos){
    const nombre = datos.nombre
    const json = JSON.stringify(datos);
    // instanciando el metodo XMLHttp
    const request = new XMLHttpRequest();
    // Solicitando el metodo post con la url de nuestro servicio y true quiere decir que sera una peticion asincrona
    request.open("POST", url, true);
    // seteando las cabeceras
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    // cuando la peticion empiece 
    request.onload = function () {        
        if (request.readyState == 4 && request.status == "200") {
            alert(`se ha guardado correctamente el usuario ${nombre}`)
            console.table(json);
        } else {
            console.error();
        }
    }

    request.send(json);
}

function getDatos (callback){

    var datos  = new XMLHttpRequest()
    datos.open('GET', url, true)
    // datos.open('GET', url+'/1', true)

    // funcion que se ejecuta al obtener los datos
    datos.onload = function () {

        let users = JSON.parse(datos.responseText);
        // getTablaDatos(users);

        if (datos.readyState == 4 && datos.status == "200") {
            console.table(users);
            if (typeof(callback) === 'function') {
                callback(users)
            }
            
        } else {
            console.error(users);
        }
    }
    datos.send(null);
    wewe
}
// Crea la tabla con los datos obtenidos
function renderTabla(datos){
    // console.warn(datos);
    let tablastr = `<table id="tabladatos" class="table TablaDatos" width="100%" cellpadding="5" cellspacing="100%">
    <tr>
        <th>Nombre</th>
        <th>Fecha de Cumpleaños</th>
        <th>Telefono Personal</th>
        <th>Email Personal</th>
        <th>Email de la Oficina</th>
        <th>Telefono de la Oficina</th>

    </tr>
    <tbody>`;
    datos.forEach(item => {
        // console.log(item);
    tablastr =  tablastr + `<tr>`;
    for(prop in item){
        if(prop !== "id"){
            tablastr = tablastr + `<td> ${item[prop]} </td>`;
        }
    }
    tablastr = tablastr + `<td>
                            <p><button type="button"; "`+item.id+`" onclick="alert('quieres borrar a:')"; class="btn_azul">Editar</a>
                            <p><button type="button"; "" onclick="deleteUser(${item.id})"; class="waves-effect waves-light btn-small">Borrado</a>
                        </td>`;
    tablastr = tablastr + `
                        </tbody>
                    </tr>`;
    });

    document.getElementById("datosTable").innerHTML = tablastr;
}

function getTablaDatos () {
    getDatos(renderTabla);
}

// Delete a user
function deleteUser(datos){

    // console.log(datos);
    param = `/${datos}`;
    var deleteData = new XMLHttpRequest();
    deleteData.open("DELETE", url+param, true);
    deleteData.onload = function () {
        
        if (deleteData.readyState == 4 && deleteData.status == "200") {
           
        } else {
            console.error(users);
        }
    }
    deleteData.send(null);
    alert('El usuario ha sido borrado satisfactoriamente!! Recarga la pagina para observar cambios');
}


    
    



