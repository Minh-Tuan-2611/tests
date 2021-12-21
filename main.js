var btn_menu = document.querySelector('.header-menu-icon');

var isActive = false;

btn_menu.addEventListener('click', function(e) {
    e.stopPropagation();
    if (isActive==false) {
        document.querySelector('.header-link').classList.add('active');
        isActive = true;
    }

    else if(isActive==true) {
        document.querySelector('.header-link').classList.remove('active');
        isActive = false;
    }

})

document.querySelector('body').onclick = function() {
    document.querySelector('.header-link').classList.remove('active');
}

var arrayLink = document.querySelectorAll('.header-link-item');

for(var i = 0; i < arrayLink.length; i++) {
    arrayLink[i].addEventListener('click',function(event) {
        event.stopPropagation();
    })
}