var filterBy = document.querySelector('.filter-by');
var list  = document.querySelector('.list');
var txt = `<span class="filter-item" data-group="All">All</span>`;
filter.forEach((el) => {
    txt += `
        <span class="filter-item" data-group="${el}"> <span class="each-list">/</span> ${el}</span>
    `;
});
filterBy.innerHTML = txt;
function renderProjects(group) {
    console.log(group);
    
    var filteredProjects = group === "All" ? project : project.filter(el=>{
        console.log(el.group);
        console.log(group);
        
        return el.group == group
    });
    console.log(filteredProjects);
    
    var txtProject = '';
    filteredProjects.forEach(el => {
        txtProject += `
            <div class="list-box" onmouseleave="leaveProject(this)" onmousemove="hoverProject(event,'${el.group}',this)">
                <img src="${el.image}" alt="">
                <div class="show-bg"></div>
                <div class="tip d-none">${el.group}</div>
            </div>
        `;
    });
    list.innerHTML = txtProject;
}
renderProjects("All");
document.querySelectorAll('.filter-item').forEach(item => {
    item.addEventListener('click', function () {
        var group = this.getAttribute('data-group');
        renderProjects(group);
    });
});
function hoverProject(event,type,el){
    const rect = el.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const tip = el.querySelector('.tip');
    tip.style.top = (mouseY+10)+"px";
    tip.style.left = (mouseX+10)+"px";
    tip.classList.remove('d-none')
}
function leaveProject(el){
    const tip = el.querySelector('.tip');
    tip.classList.add('d-none')
}

