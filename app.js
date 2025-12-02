// Selecciones principales
const inputName = document.querySelector("#input-name");
const nameMsg = document.querySelector("#name-msg");
const btnAdd = document.querySelector("#btn-add");
const btnFetch = document.querySelector("#btn-fetch");
const btnDark = document.querySelector("#btn-dark");
const container = document.querySelector("#cards-container");
const template = document.querySelector("#card-template");

// Validación en tiempo real ---------------------
inputName.addEventListener("input", () => {
    if (inputName.value.length >= 3) {
        inputName.classList.add("valid");
        inputName.classList.remove("invalid");
        nameMsg.textContent = "Nombre válido ✔️";
    } else {
        inputName.classList.add("invalid");
        inputName.classList.remove("valid");
        nameMsg.textContent = "Debe tener mínimo 3 letras";
    }
});

// Crear tarjeta desde template -------------------
function createUserCard({ nombre, email, avatar }) {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".nombre").textContent = nombre;
    clone.querySelector(".email").textContent = email;
    clone.querySelector(".avatar").src = avatar;

    container.appendChild(clone);
}

// Botón: agregar usuario manual -------------------
btnAdd.addEventListener("click", () => {
    if (inputName.value.length < 3) return;

    createUserCard({
        nombre: inputName.value,
        email: "Correo no disponible",
        avatar: "https://i.pravatar.cc/200"
    });

    inputName.value = "";
});

// Fetch API: usuario random -----------------------
btnFetch.addEventListener("click", async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();

    const user = data.results[0];

    createUserCard({
        nombre: `${user.name.first} ${user.name.last}`,
        email: user.email,
        avatar: user.picture.large
    });
});

// Delegación de eventos (delete) ------------------
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
        e.target.closest(".card").remove();
    }
});

// Dark Mode ---------------------------------------
btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
