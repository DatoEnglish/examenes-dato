
// script_final_envioOK.js - versión lista para enviar respuestas sin emailAddress nativo

const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLScQ04TJvQxsacp9BcPlcDj-vS9DjgkU7nwC76pBH-SIiGVokQ/formResponse';

document.addEventListener("DOMContentLoaded", function () {
  function sendToGoogleForms() {
    const formData = new FormData();

    const email = document.getElementById("student-id").value;
    const studentName = document.getElementById("student-name").value;
    const teacherName = document.getElementById("teacher-name").value;
    const answer31 = document.getElementById("writing-answer").value;

    formData.append("entry.1298376674", email);        // Teacher Email
    formData.append("entry.1941582223", studentName);  // Student Name
    formData.append("entry.804358120", teacherName);   // Teacher Name

    const entries = [
      "1416437763", "1056595112", "2100713430", "1936547055", "1957458458",
      "1903286844", "985960723", "1190625608", "1510470588", "1905586594",
      "2073099785", "1040288366", "2091836049", "1513969927", "789251536",
      "731655932", "1354747385", "960180891", "1190416187", "1350903787",
      "1232373776", "774621704", "620645982", "76051896", "1553711869",
      "2032025220", "736217470", "1697084087", "1749620140", "1766628909"
    ];

    for (let i = 1; i <= 30; i++) {
      const selected = document.querySelector(`#question-${i} .option.selected`);
      const value = selected ? selected.getAttribute("data-value") : "";
      formData.append("entry." + entries[i - 1], value);
    }

    formData.append("entry.1774931798", answer31); // Writing (Q31)

    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: formData
    }).then(() => {
      alert("¡Respuestas enviadas con éxito!");
    }).catch((err) => {
      alert("Hubo un error al enviar el formulario.");
      console.error(err);
    });
  }

  // Esperar a que aparezca dinámicamente el botón
  const observer = new MutationObserver(() => {
    const submitBtn = document.getElementById("submit-button");
    if (submitBtn) {
      submitBtn.addEventListener("click", sendToGoogleForms);
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
