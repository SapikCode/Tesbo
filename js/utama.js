

function bukamenu(){
    const kluar = document.getElementById('keluar');
    const tombol = document.getElementById('burger');
    const sett = document.getElementById('menus');
    sett.style.display=("flex");
    sett.style.transform=("translateX(-220px)");
    tombol.style.display=("none");
    kluar.style.display=("block");

}

function kluar(){
    const kluar = document.getElementById('keluar');
    const tombol = document.getElementById('burger')
    const sett = document.getElementById('menus');
    sett.style.transform=("translateX(220px)");
    tombol.style.display=("block");
    kluar.style.display=("none");
}

function about(){
    window.location.href="aboutus.html";
}

function kekost(){
    window.location.href="kost.html"
}

function kemakanan(){
    window.location.href="foodbaru.html"
}

function kesosmed(){
    window.location.href="sosmed.html"
}

function kecinem(){
    window.location.href="cinem.html"
}