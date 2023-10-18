// Ejercicio POO 1:
const personaDiv = document.getElementById("personaDiv");
const estudianteDiv =
	document.getElementById("estudianteDiv");
const profesorDiv = document.getElementById("profesorDiv");
// Crear la clase Persona, con propiedades nombre, edad y género, y el método
// obtDetalles(), que muestra por pantalla las propiedades de la persona.
class Persona {
	constructor(nombre, edad, genero) {
		this.nombre = nombre;
		this.edad = edad;
		this.genero = genero;
	}
	obtDetalles() {
		personaDiv.innerHTML = `<p>${this.nombre} es de género ${this.genero} y tiene ${this.edad} años.</p>`;
	}
}

let unaPersona = new Persona("Adrian", 40, "masculino");

unaPersona.obtDetalles();

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades
// curso y grupo y el método registrar(), que muestre por pantalla el resultado.
class Estudiante extends Persona {
	constructor(nombre, edad, genero, curso, grupo) {
		super(nombre, edad, genero);
		this.curso = curso;
		this.grupo = grupo;
	}
	registrar() {
		estudianteDiv.innerHTML = `<p>${this.nombre} es de género ${this.genero} y tiene ${this.edad} años.  Está cursando el programa de ${this.curso} con el grupo ${this.grupo}.</p>`;
	}
}

let unEstudiante = new Estudiante(
	"Frances",
	35,
	"femenino",
	"FullStack",
	"Los Máquinas"
);

unEstudiante.registrar();

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades
// asignatura y nivel y el método asignar(), que muestre por pantalla el
// resultado.
class Profesor extends Persona {
	constructor(nombre, edad, genero, asignatura, nivel) {
		super(nombre, edad, genero);
		this.asignatura = asignatura;
		this.nivel = nivel;
	}
	asignar() {
		profesorDiv.innerHTML = `<p>${this.nombre} es de género ${this.genero} y tiene ${this.edad} años.  Enseña el curso de ${this.asignatura} de nivel ${this.nivel}.</p>`;
	}
}

let unProfesor = new Profesor(
	"Sofi",
	24,
	"femenino",
	"FullStack WebDev",
	"DIOS"
);

unProfesor.asignar();

/*
Extras : Ejercicio POO 2 - kata Mayas y aztecas
kata mayas y aztecas

Ejercicio POO 3 - Il sogno di volare
POO - Il sogno di volare*/
