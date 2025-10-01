// Menú hamburguesa
// Menú para movil/tablet
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Revisa si ya esta abierto el menú, y se cmabia el atributo a true o false
toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true" || false;
  toggle.setAttribute("aria-expanded", !expanded);
  menu.style.display = expanded ? "none" : "flex";
});

// Formulario
const form = document.querySelector("form");
const mensaje = document.getElementById("mensaje");

// Se hace el evento submit del formulario
form.addEventListener("submit", (e) => {
  e.preventDefault(); //Evita que se recargue la página

  //Se toman los valores de los campos y trim elimina espacios en blanco al inicio y al final
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();

  //validación por si algun campo esta vacio y si todo esta bien, limpia los campos y lo muestra en verde
  if (!nombre || !email) {
    mensaje.textContent = "Por favor llena todos los campos.";
    mensaje.style.color = "red";
  } else {
    //mensaje.textContent = "Registro enviado con éxito.";
    //mensaje.style.color = "green";
    window.alert("Regostro enviado con éxito");
    form.reset();
  }
});
