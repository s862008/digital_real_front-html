

fetch('header.html')
    .then(response => response.text())
    .then(html => document.getElementById('header').innerHTML = html);
    fetch('footer.html')
    .then(response => response.text())
    .then(html => document.getElementById('footer').innerHTML = html);


document.querySelectorAll('.nav-a').forEach(function (item) {
    item.addEventListener('mouseover', function () {


        this.style.height = this.scrollHeight + 'px';
    })
});
document.querySelectorAll('.nav-a').forEach(function (item) {
    item.addEventListener('mouseout', function () {

        this.style.height = 'auto';
    })
});