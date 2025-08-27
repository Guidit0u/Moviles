let alumnos = [
  { nombre: "Paragua", notas: [8, 7, 9] },
  { nombre: "Fabian", notas: [5, 6, 4] },
  { nombre: "Pedro", notas: [2, 3] }
];

function calcularPromedio(notas: number[]): number {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i]!;
  }
  return suma / notas.length;
}

function notaFinal() {
  for (let i = 0; i < alumnos.length; i++) {
    let promedio = calcularPromedio(alumnos[i]!.notas);
    let nombre = alumnos[i]!.nombre;

    if (promedio >= 7) {
      console.log(`${nombre} promocionó con un promedio de ${promedio.toFixed(2)}`);
    } else if (promedio >= 4) {
      console.log(`${nombre} aprobó con un promedio de ${promedio.toFixed(2)}`);
    } else {
      console.log(`${nombre} desaprobó con un promedio de ${promedio.toFixed(2)}`);
    }
  }
}

notaFinal();