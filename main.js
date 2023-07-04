var btn = document.getElementById('menu-hamburguer')

function openNav() {
    document.getElementById('sidebar').style.width = "20%"
    
    document.getElementsByClassName("link")[0].style.display = "inline"
    document.getElementsByClassName("link")[1].style.display = "inline"
    document.getElementsByClassName("link")[2].style.display = "inline"
    document.getElementsByClassName("link")[3].style.display = "inline"
    document.getElementsByClassName("link")[4].style.display = "inline"
    document.getElementsByClassName("link")[5].style.display = "inline"
    
    document.getElementById('img-footer-2').style.marginLeft = "50%"
    
    document.getElementById('img-footer').style.display = "flex"

    document.getElementById('menu-hamburguer').style.marginLeft = "20%"

    document.getElementById('menu-img').style.display = "flex"

    document.getElementById('menu-hamburguer').style.display = "none"

    document.getElementById('closebar').style.display = "flex"

    document.getElementById('closebar').style.marginLeft = "30%"

    document.getElementById('dash').style.marginLeft = "10em"
}

function closebar() {
    document.getElementById('sidebar').style.width = "7%"
    
    document.getElementsByClassName("link")[0].style.display = "none"
    document.getElementsByClassName("link")[1].style.display = "none"
    document.getElementsByClassName("link")[2].style.display = "none"
    document.getElementsByClassName("link")[3].style.display = "none"
    document.getElementsByClassName("link")[4].style.display = "none"
    document.getElementsByClassName("link")[5].style.display = "none"
    
    document.getElementById('img-footer-2').style.marginLeft = "32.2%"
    
    document.getElementById('img-footer').style.display = "none"

    document.getElementById('menu-img').style.display = "none"

    document.getElementById('menu-hamburguer').style.display = "flex"

    document.getElementById('menu-hamburguer').style.marginLeft = "5%"

    document.getElementById('closebar').style.display = "none"

    document.getElementById('dash').style.marginLeft = "4em"
} 