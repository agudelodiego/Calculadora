//* CREACION DE CLASE CALCULADORA
class Calculadora{

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
} 


//Añadimos funcionalidad a los botones que usaremos
document.getElementById("modo").addEventListener("click", Calculadora.cambiarModo);
let botones = document.getElementsByClassName("boton");
for(let boton of botones){
    boton.addEventListener("mousedown", Calculadora.oprimirTecla);
    boton.addEventListener("mouseup", Calculadora.soltarTecla);
}