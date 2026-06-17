var copyright = document.getElementById('año') 
var currentTime = new Date()
copyright.innerHTML = currentTime.getFullYear() 

function fecha() {
    document.getElementById('fecha').style.display = 'flex'
    document.getElementById('categoria').style.display = 'none'
    document.getElementById('a').style.backgroundColor = '#dcdcdc'
    document.getElementById('b').style.backgroundColor = 'transparent'
}

// Intersection Observer para efecto Fade In al hacer scroll
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

// Aplicar observer a todas las secciones con clase fade-in
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});