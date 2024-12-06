var filterBy = document.querySelector('.filter-by');
var list  = document.querySelector('.list');
var txt = `<span class="filter-item" data-group="All">All</span>`;
 filter.forEach(el => {
    txt += `
        <span class="filter-item" data-group="${el}">
            <span class="each-list">/</span> ${el}
        </span>
    `;
});
filterBy.innerHTML = txt;
function attachFilterEvents() {
    document.querySelectorAll('.filter-item').forEach(item => {
        item.addEventListener('click', function () {
            const group = this.getAttribute('data-group');
            renderProjects(group);
        });
    });
}
function renderProjects(group) {
    const filteredProjects = group === 'All'
        ? project
        : project.filter(el => el.group.includes(group)); // Check if `group` exists in `el.group`

    let txtProject = '';
    filteredProjects.forEach(el => {
        txtProject += `
            <div class="list-box" 
                 onmouseleave="leaveProject(this)" 
                 onmousemove="hoverProject(event,'${el.group}',this)">
                <img src="${el.image}" alt="${el.title}">
                <div class="show-bg"></div>
                <div class="tip d-none">${el.title} <br> ${el.group}</div>
            </div>
        `;
    });
    list.innerHTML = txtProject;
}
function hoverProject(event, type, el) {
    const rect = el.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const tip = el.querySelector('.tip');
    tip.style.top = `${mouseY + 10}px`;
    tip.style.left = `${mouseX + 10}px`;
    tip.classList.remove('d-none');
}
function leaveProject(el) {
    const tip = el.querySelector('.tip');
    tip.classList.add('d-none');
}

renderProjects('All');
attachFilterEvents();
var serviceDisplay  = document.querySelector('.service-display');
var serviceContent = '';
service.forEach(el=>{
    var serviceLi = '';
    el.listService.forEach(list=>{
        serviceLi +=`
            <li>${list}</li>
        `;
    })
    serviceContent+=`
        <div class="service-item">
            <div class="icon">${el.icon}</div>
            <div class="title">${el.title}</div>
            <ul class="service-list">
                ${serviceLi}
            </ul>
        </div>
    `;
})
serviceDisplay.innerHTML = serviceContent;