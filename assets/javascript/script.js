var header = document.querySelector('header');
var main   = document.querySelector('main');
var getHight = header.clientHeight;
main.style.marginTop = getHight+"px";

//service
var serviceDisplay  = document.querySelector('.service-display');
var serviceContent = '';
service.forEach(el=>{
    serviceContent+=`
        <div class="service-item">
            <div class="icon">${el.icon}</div>
            <div class="title">${el.title}</div>
        </div>
    `;
})
serviceDisplay.innerHTML = serviceContent;
