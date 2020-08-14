var bar = document.getElementById('barr');
var sideBar = document.querySelector('.sidebar');
var close = document.getElementById('close');



bar.addEventListener('click', () => {
    sideBar.classList.toggle('show-sidebar');
});

close.addEventListener('click', () => {
    sideBar.classList.add('show-sidebar');
})