const preguntas = [
    { texto: "¿Cuántos integrantes tiene el grupo?", tipo: "number", respuesta: "3" },
    { texto: "¿Quién tiene como hobby cocinar?", tipo: "text", respuesta: "fede" },
    { texto: "¿Dónde vive Fede?", tipo: "text", respuesta: "caseros" },
    { texto: "¿Quién habló de 'Kentukis'?", tipo: "text", respuesta: "dario" },
    { texto: "¿Cómo se llama el perro de Brian?", tipo: "text", respuesta: "tony" },
    { texto: "¿Cuál es el hobby de Darío?", tipo: "text", respuesta: "leer" },
    { texto: "¿Cuántos años tiene Fede?", tipo: "number", respuesta: "24" },
    { texto: "¿Cuántos años tiene Darío?", tipo: "number", respuesta: "39" },
    { texto: "¿Qué mascota tiene Brian?", tipo: "text", respuesta: "perro" },
    { texto: "¿Qué libro está leyendo Darío?", tipo: "text", respuesta: "el buen mal" },
    { texto: "¿De qué trata el blog de Darío?", tipo: "text", respuesta: "lectura" },
    { texto: "¿Dónde estudia el grupo?", tipo: "text", respuesta: "ifts 16" },
    { texto: "¿Cuántos perros tiene Brian?", tipo: "number", respuesta: "2" },
    { texto: "¿Qué serie recomienda Darío?", tipo: "text", respuesta: "distancia de rescate" },
    { texto: "¿Cómo se llama el blog?", tipo: "text", respuesta: "blog del grupo 3" },
    { texto: "¿Qué edad tiene Brian?", tipo: "number", respuesta: "no especificado" },
    { texto: "¿Quién estudia análisis de sistemas?", tipo: "text", respuesta: "todos" },
  ];
  
  function crearFormulario() {
    const quizForm = document.getElementById("quizForm");
    const preguntasAleatorias = preguntas.sort(() => 0.5 - Math.random()).slice(0, 5);
    preguntasAleatorias.forEach((p, i) => {
      const label = document.createElement("label");
      label.innerText = `${i + 1}. ${p.texto}`;
      label.htmlFor = `pregunta-${i}`;
  
      const input = document.createElement("input");
      input.type = p.tipo;
      input.name = `pregunta-${i}`;
      input.dataset.respuesta = p.respuesta.toLowerCase();
  
      quizForm.appendChild(label);
      quizForm.appendChild(document.createElement("br"));
      quizForm.appendChild(input);
      quizForm.appendChild(document.createElement("br"));
      quizForm.appendChild(document.createElement("br"));
    });
  
    const boton = document.createElement("button");
    boton.type = "submit";
    boton.textContent = "Enviar";
    quizForm.appendChild(boton);
  }
  
  function evaluarRespuestas(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll("#quizForm input");
    let score = 0;
  
    inputs.forEach(input => {
      const respuesta = input.dataset.respuesta;
      const valor = input.value.toLowerCase();
      if (respuesta !== "no especificado" && valor.includes(respuesta)) {
        score += 2;
      }
    });
  
    let mensaje = "";
    if (score === 10) mensaje = "¡Felicitaciones! Obtuviste el puntaje máximo";
    else if (score >= 7) mensaje = "¡Excelente! Prestaste atención.";
    else if (score >= 5) mensaje = "Bien, pero podrías sentarte a leer un poco más.";
    else if (score >= 3) mensaje = "Estás cerca, pero seguí leyendo.";
    else mensaje = "Ni cerca, sentate a leer nuestro blog y conocernos mejor. ¡Saludos!";
  
    document.getElementById("resultado").innerText = `Puntaje: ${score}/10\n${mensaje}`;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    crearFormulario();
    document.getElementById("quizForm").addEventListener("submit", evaluarRespuestas);
  });
  