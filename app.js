
let url = "http://127.0.0.1:8080/api/alumnos";
var contactos = {};


function obtenerDatos(){
event.preventDefault();

let jsonJ = {}

   var nombre = document.getElementById("nombre").value;
   telPersonal = document.getElementById("telPerson").value;
   emailPerson = document.getElementById("emailPerson").value;
    emailOfi = document.getElementById("emailOfi").value;
    telOfi = document.getElementById("telOfi").value;
    fechaCumpleaños = document.getElementById("fechaCumpleaños").value;
    

    jsonJ = {
        "nombre" : nombre,
        "telPerson" : telPersonal,
        "emailPerson"  : emailPerson,
        "emailOfi"   :  emailOfi,
        "telOfi" : telOfi,
        "fechaCumpleaños" : fechaCumpleaños ,
        
    }

    // jsonJ = {
    //     "nombre" : nombre,
    //     "edad"  : edad,
    //      }

    mandarParametros(jsonJ)
    getTablaDatos(jsonJ)
    deleteUser(jsonJ.id)
}
    


// getDatos();

function mandarParametros(datos){
   

    nombre = document.getElementById("nombre").value
    var json = JSON.stringify(datos);
    
    // instanciando el metodo XMLHttp
    var request = new XMLHttpRequest();

    // Solicitando el metodo post con la url de nuestro servicio y true quiere decir que sera una peticion asincrona
    request.open("POST", url, true);
// seteando las cabeceras
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    // cuando la peticion empiece 
    request.onload = function () {
        
	if (request.readyState == 4 && request.status == "201") {
		console.table(json);
	} else {
		console.error();
    }

   
}

request.send(json);
    alert(`se ha guardado correctamente el usuario ${nombre}`)

}

getDatos();

function getDatos (){

var datos  = new XMLHttpRequest()
datos.open('GET', url, true)
// datos.open('GET', url+'/1', true)

// funcion que se ejecuta al obtener los datos
datos.onload = function () {

    let users = JSON.parse(datos.responseText);
    // getTablaDatos(users);

	if (datos.readyState == 4 && datos.status == "200") {
        console.table(users);
        
	} else {
		console.error(users);
    }
    contactos = users;
    users.forEach(element => {
            let lista = element
            console.log(lista);
            return lista;

// 
});



}
datos.send(null);
}
// Crea la tabla con los datos obtenidos
function getTablaDatos(){
    datos = contactos;
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
        // console.log(item.id);
        tablastr = tablastr + `<td> ${item[prop]} </td>`;
    }
}
tablastr = tablastr + `<td>
                        <p><button type="button"; "`+item.id+`" onclick="alert('quieres borrar a:')"; class="btn_azul">Editar</a>
                        <p><button type="button"; "`+item.id+`" onclick="deleteUser(${item.id})"; class="btn_azul">Boorado Main</a>
                        
                        
                    </td>`;
tablastr = tablastr + `
                    </tbody>
                </tr>`;
                // console.warn(tablastr);
});


document.getElementById("datosTable").innerHTML = tablastr;

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


    
    



