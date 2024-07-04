import CL_estudiante from "./CL_estudiante.js";
import CL_ucla from "./CL_ucla.js";

let estud1 = new CL_estudiante(13457856, "M", 15,20,25);
let estud2 = new CL_estudiante(15432551, "F", 10,10,10);
let estud3 = new CL_estudiante(32455678, "M", 18,22,20);
let estud4 = new CL_estudiante(28678900, "F", 18,25,24);

let ucla = new CL_ucla();

ucla.procesarEstudiante(estud1);
ucla.procesarEstudiante(estud2);
ucla.procesarEstudiante(estud3);
ucla.procesarEstudiante(estud4);

let salida=document.getElementById("salida");

salida.innerHTML= "Notas totales de los estudiantes"
salida.innerHTML+= "<br> El estudiante con cedula 13457856 obtuvo una nota total de " +estud1.nottotal();
salida.innerHTML+= "<br> El estudiante con cedula 15432551 obtuvo una nota total de " +estud2.nottotal();
salida.innerHTML+= "<br> El estudiante con cedula 32455678 obtuvo una nota total de " +estud3.nottotal();
salida.innerHTML+= "<br> El estudiante con cedula 28678900 obtuvo una nota total de " +estud4.nottotal();
salida.innerHTML+= "<br> <br>";
salida.innerHTML+= "<br> La mayor nota es " +ucla.devolvermayor();
salida.innerHTML+= "<br> Estudiantes femeninas aprobadas " +ucla.devolvercontfem();
salida.innerHTML+= "<br> Promedio de notas " +ucla.promedionotas();
