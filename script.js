var copyright = document.getElementById('año') 
var currentTime = new Date()
copyright.innerHTML = currentTime.getFullYear() 

function fecha() {
    document.getElementById('fecha').style.display = 'flex'
    document.getElementById('categoria').style.display = 'none'
    document.getElementById('a').style.backgroundColor = '#dcdcdc'
    document.getElementById('b').style.backgroundColor = 'transparent'
}