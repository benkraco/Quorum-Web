import { createClient } from 'https://esm.sh/@supabase/supabase-js'

var copyright = document.getElementById('año')
var currentTime = new Date()
copyright.innerHTML = currentTime.getFullYear()

function fecha() {
    document.getElementById('fecha').style.display = 'flex'
    document.getElementById('categoria').style.display = 'none'
    document.getElementById('a').style.backgroundColor = '#dcdcdc'
    document.getElementById('b').style.backgroundColor = 'transparent'
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

const supabase = createClient(
    "https://jhqhywiuxbuwkfleocpu.supabase.co/",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpocWh5d2l1eGJ1d2tmbGVvY3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4NTI2MzQsImV4cCI6MjA5NzQyODYzNH0._RZ-BAyPPnna7giso4pxE4gGprRDf6ORuMXQVIwN8TM"
);

const btn =
    document.getElementById("btnWaitlist");

btn.addEventListener("click", async () => {

    const email =
        document.getElementById("email").value;

    if (!email) {
        mostrarMensaje(
            "Ingresá un correo electrónico.",
            "error"
        );
        return;
    }

    const { error } =
        await supabase
            .from("waitlist")
            .insert([
                { email: email }
            ]);

    if (error) {
        mostrarMensaje(
            "Ocurrió un error. Intentá nuevamente.",
            "error"
        );
        return;
    }

    mostrarMensaje(
        "¡Ya estás en la lista de espera!",
        "exito"
    );

    document.getElementById("email").value = "";
});

function mostrarMensaje(texto, tipo) {
    const mensaje =
        document.getElementById("mensaje");

    const textoMensaje =
        document.getElementById("textoMensaje");

    if (tipo === "exito") {
        textoMensaje.textContent = texto;
    } else {
        textoMensaje.textContent = texto;
    }

    mensaje.className =
        "mensaje mostrar " + tipo;

    setTimeout(() => {
        mensaje.classList.remove("mostrar");
    }, 4000);
}