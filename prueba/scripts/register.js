//Practica 4
let estudiantes = [];//arreglo vacio
console.log("Register");
//crear constructor
//nombre, coreo, genero, campus, calificacion A, Calificacion B, Calificacion C ESTOS SON PARÁMETROS-->
let contador= 1;
function Estudiante(nombreP,correoP,generoP,campusP,califAP,califBP,califCP){ //variable local
    this.nombre=nombreP; //propiedad
    this.correo=correoP;
    this.genero=generoP;
    this.campus=campusP;
    this.califA=califAP;
    this.califB=califBP;
    this.califC=califCP;
    this.id=contador++; //Etiqueta a una fila, una por una hasta infinitas, empezando en el cero.
}

//crear funcion registrar
function registro(){
    //variables globales - Declaraciones globales para todas las funciones que se describen abajo. Ellos mandan a llamar estos valores.
        //obtener los valores de los inputs
    let inputNombre=document.getElementById("txtNombre");
    let inputCorreo=document.getElementById("txtCorreo");
    let inputGenero=document.getElementById("selGenero");
    let inputCampus=document.getElementById("selCampus");
    let inputCalifA=document.getElementById("txtCalifA");
    let inputCalifB=document.getElementById("txtCalifB");
    let inputCalifC=document.getElementById("txtCalifC");

   
        
        // validacion que los valores de los input que no esten vacios 
        if(inputCalifC.value == "" && inputCalifB.value == "" && inputCalifA.value == "" && inputCampus.value == "" && inputGenero.value == "" && inputCorreo.value == "" && inputNombre.value == ""){
            // mensaje de alerta
            mensaje_alerta('Todos los campos son obligatorios', 'error', 'top');            
        }else{
            // validacion del valor del input nombre no este vacio
            if(inputNombre.value == ""){
                // mensaje de alerta
                mensaje_alerta('El nombre completo es obligatorio', 'error', 'top');
            }else{
                // validacion del valor del input correo no este vacio
                if(inputCorreo.value == ""){
                    // mensaje de alerta
                    mensaje_alerta('El correo es obligatorio', 'error', 'top');
                }else{
                    // validacion del correo sea valido
                    if(validar_email(inputCorreo.value)){
                        if(inputGenero.value == ""){
                            // mensaje de alerta
                            mensaje_alerta('El g\u00E9nero es obligatorio', 'error', 'top');
                        }else{
                            if(inputCampus.value == ""){
                                // mensaje de alerta
                                mensaje_alerta('El campus es obligatorio', 'error', 'top');
                            }else{
                                // validacion del valor del input calificacion A no este vacio
                                if(inputCalifA.value == ""){
                                    // mensaje de alerta
                                    mensaje_alerta('La Calificaci\u00F3n A es obligatoria', 'error', 'top');
                                }else{
                                    // validacion del valor del input calificacion A sea numero
                                    if(validate_numero_decimal(inputCalifA.value)) {
                                        if(inputCalifA.value <= 10){                                        
                                            // validacion del valor del input calificacion B no este vacio
                                            if(inputCalifB.value == ""){
                                                // mensaje de alerta
                                                mensaje_alerta('La Calificaci\u00F3n B es obligatoria', 'error', 'top');
                                            }else{
                                                // validacion del valor del input calificacion B sea numero
                                                if(validate_numero_decimal(inputCalifB.value)) {
                                                    if(inputCalifB.value <= 10){
                                                        // validacion del valor del input calificacion C no este vacio
                                                        if(inputCalifC.value == ""){
                                                            // mensaje de alerta
                                                            mensaje_alerta('La Calificaci\u00F3n C es obligatoria', 'error', 'top');
                                                        }else{
                                                            // validacion del valor del input calificacion C sea numero
                                                            if(validate_numero_decimal(inputCalifC.value)) {
                                                                if(inputCalifC.value <= 10){

                                                                    //crear objeto nuevoAlumno
                                                                    let newEstudiante = new Estudiante(inputNombre.value,inputCorreo.value,inputGenero.value,inputCampus.value,inputCalifA.value,inputCalifB.value,inputCalifC.value);
                                                                    //agregar al alumno al arreglo
                                                                    estudiantes.push(newEstudiante);    
                                                                    console.log(estudiantes);
                                                                    //imprimir el objeto en consola
                                                                    imprimirAlumnos(estudiantes); 
                                                                    registro_exitoso(); 
                                                                    
                                                                    // Limpiar
                                                                    limpiar();

                                                                }else{
                                                                    // mensaje de alerta
                                                                    mensaje_alerta('La Calificaci\u00F3n C debe estar en una escala del 1 al 10', 'error', 'top');
                                                                }
                                                            }else{
                                                                // mensaje de alerta
                                                                mensaje_alerta('La Calificaci\u00F3n C debe contener n\u00FAmeros', 'error', 'top');
                                                            }
                                                        }   
                                                    }else{
                                                        // mensaje de alerta
                                                        mensaje_alerta('La Calificaci\u00F3n B debe estar en una escala del 1 al 10', 'error', 'top');
                                                    }
                                                }else{
                                                    // mensaje de alerta
                                                    mensaje_alerta('La Calificaci\u00F3n B debe contener n\u00FAmeros', 'error', 'top');
                                                }
                                            } 
                                        }else{
                                            // mensaje de alerta
                                            mensaje_alerta('La Calificaci\u00F3n A debe estar en una escala del 1 al 10', 'error', 'top');
                                        }
                                    }else{
                                        // mensaje de alerta
                                        mensaje_alerta('La Calificaci\u00F3n A debe contener n\u00FAmeros', 'error', 'top');
                                    }
                                }                            
                            }
                        }
                    }else{
                        // mensaje de alerta
                        mensaje_alerta('El correo no es v\u00E1lido', 'error', 'top');
                    }
                }
            }            
        }        
}        

   
function imprimirAlumnos(estudiantes){
    let row="";
    
    for (let i=0; i<estudiantes.length; i++){
        let estudiante= estudiantes [i];
        let suma =Number(estudiante.califA)+Number(estudiante.califB)+Number(estudiante.califC);
       
        row += `
        <tr id="${estudiante.id}">
            <td>${estudiante.id}</td>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.califA}</td>
            <td>${estudiante.califB}</td>
            <td>${estudiante.califC}</td>
            <td>${(suma/3).toFixed(2)}</td>
            <td><button class="btn btn-danger btn-sm" onclick="borrarAlumno(${estudiante.id});">Borrar</button></td>
        </tr>
        `;
    }
    document.getElementById("alumnosTabla").innerHTML = row;
}
function registro_exitoso(){
    
    mensaje_alerta('Registro con \u00E9xito!', 'success', 'top-end');
}

function limpiar(){
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("selGenero").value = "";
    document.getElementById("selCampus").value = "";
    document.getElementById("txtCalifA").value = "";
    document.getElementById("txtCalifB").value = "";
    document.getElementById("txtCalifC").value = "";
}
// funcion creada para validar correo sea valido
function validar_email(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}


function validate_numero_decimal(numero) {
    return(numero.match(/^[0-9]+(.[0-9]+)?$/))
}

// funcion creada para mostrar ventana de alerta con sweet alert 2
// https://sweetalert2.github.io/#examples
function mensaje_alerta(msg, icono, posicion){
    Swal.fire({
        title: "" + msg + "",
        icon: "" + icono + "",
        showConfirmButton: false, // Que no muestre el boton de ok o Aceptar
        //confirmButtonText: "Aceptar", // Cambiar el nombre del boton
        position: "" + posicion + "", // las posiciones pueden ser ('top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end')
        timer: 3000 // Tiempo de duracion de la ventana en milisegundo, en este caso son 3 segundos        
    });
}



//crear funcion init
function init(){
            //ESTE DE ABAJO ES EL CONSTRUCTOR "ESTUDIANTE"
    let alumno = new Estudiante("Harry Potter","timmy@dimsdale.com","Masculino","CampusA",10,9,8); //PARÁMETROS
    estudiantes.push(alumno);
    imprimirAlumnos(estudiantes);
      
}


// crear funcion para eliminar todos los registros de tabla al dar click en el boton de borrar regsitros
function limpiarRegistros(){
    event.preventDefault(); //Este es para evitar que la pagina se refresque antes de limpiar los registros
    $('#alumnosTabla tr:not(:first-child)').slice(0).remove();
    mensaje_alerta('Todos los registro se eliminaron con \u00E9xito!', 'success', 'top-end');
};

// crear funcion para eliminar registro de tabla al dar click en el boton de papeleria
function borrarAlumno(identificador){
    document.getElementById(identificador).remove();//Cuando decimos document hablamos del HTML
    estudiantes.splice(identificador,1);
    mensaje_alerta('Registro eliminado con \u00E9xito!', 'success', 'top-end');
}

//ejecutar funcion init - Ejecución cuando renderiza el HTML
window.onload=init();

//TAREA DESPLEGAR Y REGISTRAR
