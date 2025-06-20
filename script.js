// script.js - Envía respuestas del HTML al Google Form

// Mapeo de respuestas correctas (opcional, para validar después si se desea)
const correctAnswers = {
  1: "A", 2: "A", 3: "B", 4: "B", 5: "B", 
  6: "B", 7: "B", 8: "A", 9: "A", 10: "A",
  11: "C", 12: "B", 13: "B", 14: "C", 15: "B", 
  16: "C", 17: "C", 18: "B", 19: "C", 20: "A",
  21: "B", 22: "B", 23: "D", 24: "B", 25: "B", 
  26: "C", 27: "B", 28: "B", 29: "C", 30: "B"
};

// Enlace de envío directo al formulario (no el de edición ni el corto)
const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfx9M3bFssjzi3DA1DnAZ1_rvFF8L1BTAYqt9q5UynJKShXHw/formResponse';

document.getElementById("submit-button").addEventListener("click", function () {
  const formData = new FormData();

  // Información general
  const email = document.getElementById("student-email").value;
  const studentName = document.getElementById("student-name").value;
  const teacherName = document.getElementById("teacher-name").value;
  const answer31 = document.getElementById("question-31-text").value;

  formData.append("emailAddress", email);
  formData.append("entry.1367993889", studentName);
  formData.append("entry.283310947", teacherName);

  // Preguntas de opción múltiple (1 a 30)
  const entries = [
    "1172791231", "21560006", "455554155", "1224785215", "1449507903",
    "647786038", "752483637", "709194278", "939414303", "412974705",
    "1831798022", "625372345", "928135870", "2027849087", "766433989",
    "500003259", "541014285", "1752815657", "2134305854", "1748936470",
    "375051473", "687019419", "623604026", "1450736408", "377661104",
    "960767977", "725217095", "632678743", "897402015", "414209685"
  ];

  for (let i = 1; i <= 30; i++) {
    const selected = document.querySelector(`#question-${i} .option.selected`);
    const value = selected ? selected.getAttribute("data-value") : "";
    formData.append("entry." + entries[i - 1], value);
  }

  // Pregunta 31 (respuesta abierta)
  formData.append("entry.380745800", answer31);

  // Enviar a Google Forms
  fetch(formURL, {
    method: "POST",
    mode: "no-cors",
    body: formData
  }).then(() => {
    alert("¡Respuestas enviadas con éxito!");
    // Opcional: redirigir o limpiar el formulario aquí
  }).catch((err) => {
    alert("Hubo un error al enviar el formulario.");
    console.error(err);
  });
});
