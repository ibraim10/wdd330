function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
}/*toggle is like a switch*/
const x = document.getElementById('hamburguerBtn')
x.onclick = toggleMenu;

//year
const currentTime = new Date();

const year = currentTime.getFullYear();

document.querySelector('#year').innerHTML = year;

