//* CREACION DE CLASE CALCULADORA
class Calculadora{


    //----------------Variables globales que se mostraran en los displays-----------------------
    static stringDown = "";
    static stringUp = "";
    static numero = 0;
    static displayDown = document.querySelector(".down");
    static displayUp = document.querySelector(".up");
    //------------------------------------------------------------------------------------------


    

    //-----------------------------------------Modo oscuro--------------------------------------
    static cambiarModo(){

        let elemento = document.querySelector(".calculadora");;
        elemento.classList.toggle("oscuro");

        if (elemento.classList.contains("oscuro")){

            //body
            let body = document.querySelector(".Cuerpo")
            body.style.backgroundColor = "rgba(30,30,100,0.7)";

            //calculadora
            let calculadora = document.querySelector(".calculadora");
            calculadora.style.backgroundColor = "rgba(100,100,100,1)";

            //Botones
            let botones = document.getElementsByClassName("boton");
            for(let boton of botones){
                boton.style.backgroundColor = "rgba(35,35,35,0.7)";
                boton.style.color = "rgba(240,240,240,1)";
            }

            //Boton de igual
            let igual = document.querySelector(".igual");
            igual.style.backgroundColor = "rgba(80,80,255,1)";

            //Iconos de teclas
            let iconos = document.getElementsByClassName("color-icono");
            for(let icono of iconos){
                icono.style.color = "rgba(240,240,240,1)";
            }
        }
        else{

            //body
            let body = document.querySelector(".Cuerpo")
            body.style.backgroundColor = "rgba(210,210,210,1)";

            //calculadora
            let calculadora = document.querySelector(".calculadora");
            calculadora.style.backgroundColor = "rgba(240,240,240,1)";
    
            //Botones
            let botones = document.getElementsByClassName("boton");
            for(let boton of botones){
                boton.style.backgroundColor = "rgba(90,180,170,1)";
                boton.style.color = "rgba(35,35,35,1)";
            }

            //Boton de igual
            let igual = document.querySelector(".igual");
            igual.style.backgroundColor = "rgba(100,100,100,1)";

            //Iconos de teclas
            let iconos = document.getElementsByClassName("color-icono");
            for(let icono of iconos){
                icono.style.color = "rgba(35,35,35,1)";
            }
        }
    }
    //------------------------------------------------------------------------------------------



    //-------------------------------------Funciones de teclas----------------------------------
    static oprimirTecla(evento){

        let elemento = evento.target;
        elemento.style.width = "72px";
        elemento.style.height = "52px";

    }
    static soltarTecla(evento){

        let elemento = evento.target;
        elemento.style.width = "80px";
        elemento.style.height = "60px";

    }
    //------------------------------------------------------------------------------------------



    //-------------------------------Mostrar numero en el display-------------------------------
    static mostarNumeros(evento){

        let elemento = evento.target;
        Calculadora.stringDown += elemento.innerHTML;
        Calculadora.displayDown.innerHTML = Calculadora.stringDown;
        
    }
    static mostrarOperacion(evento){

        let elemento = evento.target;
        let tipo = elemento.id;
        let resultadoValidacion = Calculadora.validacion();

        if(resultadoValidacion == false){

            Calculadora.stringDown = "";
            Calculadora.displayDown.innerHTML = "Ha ocurrido un error";

        }
        else{

            switch (tipo){

                case "cuadrado":
                    let resCuadrado = resultadoValidacion**2;
                    Calculadora.stringDown = String(resCuadrado);
                    Calculadora.displayDown.innerHTML = Calculadora.stringDown;
                    break;

                case "raizCuadrada":
                    if(resultadoValidacion < 0){
                        Calculadora.stringDown = "";
                        Calculadora.displayDown.innerHTML = "Error";
                    }
                    else{
                        let resRaiz = Math.sqrt(resultadoValidacion);
                        Calculadora.stringDown = String(resRaiz);
                        Calculadora.displayDown.innerHTML = Calculadora.stringDown;
                    }
                    break;

                case "dividendo-1":
                    let resDividendo = 1/resultadoValidacion;
                    Calculadora.stringDown = String(resDividendo);
                    Calculadora.displayDown.innerHTML = Calculadora.stringDown;
                    break;

                case "negar":
                    let resNegar = resultadoValidacion*-1;
                    Calculadora.stringDown = String(resNegar);
                    Calculadora.displayDown.innerHTML = Calculadora.stringDown;
                    break;

                case "borrar":
                    Calculadora.stringDown = "";
                    Calculadora.displayDown.innerHTML = Calculadora.stringDown;
                    break;
                
                case "borrarTodo":
                    Calculadora.stringDown = "";
                    Calculadora.stringUp = "";
                    Calculadora.displayDown.innerHTML = Calculadora.stringDown;
                    Calculadora.displayUp.innerHTML = Calculadora.stringUp;
                    break;

            }
            

        }
        
    }
    //-----------------------------------------------------------------------------------------




    //--------------------------------Operaciones matematicas----------------------------------
    static validacion(){

        //Validamos que el usuario si haya digitado un numero y que este bien escrito
        let string = Calculadora.stringDown;
        let array = string.split(".");
        if((string == "")||(array.length > 2)||(string == ".")){
            return false;
        }
        else{
            return Number(string);
        }

    }
    //-----------------------------------------------------------------------------------------
} 


//Añadimos funcionalidad a los botones que usaremos
document.getElementById("modo").addEventListener("click", Calculadora.cambiarModo);
let botones = document.getElementsByClassName("boton");
for(let boton of botones){
    boton.addEventListener("mousedown", Calculadora.oprimirTecla);
    boton.addEventListener("mouseup", Calculadora.soltarTecla);
}


let numeros = document.getElementsByClassName("numero");
for(let numero of numeros){
    numero.addEventListener("click", Calculadora.mostarNumeros);
}


let operaciones = document.getElementsByClassName("operacion");
for(let operacion of operaciones){
    operacion.addEventListener("click", Calculadora.mostrarOperacion);
}