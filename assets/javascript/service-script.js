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
var serviceMore = document.querySelector('.service-more');
var serviceMoreContent = '';
service.forEach(el=>{
    var serviceLi = '';
    el.listService.forEach(list=>{
        serviceLi +=`
            <li>${list}</li>
        `;
    })
    serviceMoreContent+=`
        <div class="service-more-content">
            <div class="image">
                <img src="/assets/image/${el.image}" alt="" width="100%" height="100%">
            </div>
            <div class="service-detail">
                <div class="title">
                    ${el.title}
                </div>
                <div class="description">
                    ${el.description}
                </div>
                <ul class="list">
                    ${serviceLi}
                </ul>
            </div>
        </div>
    `;
})
serviceMore.innerHTML = serviceMoreContent;