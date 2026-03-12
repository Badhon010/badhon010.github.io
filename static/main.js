// Toggle Theme
const toggleIcon=document.querySelector('#toggle-btn>i')
let darkToggle=()=>{
    document.body.classList.add('dark')
    toggleIcon.classList.add('fa-sun')
    toggleIcon.classList.remove('fa-moon')
}
let lightToggle=()=>{
    document.body.classList.remove('dark')
    toggleIcon.classList.add('fa-moon')
    toggleIcon.classList.remove('fa-sun')
}

document.getElementById('toggle-btn').addEventListener('click',()=>{
   if(localStorage.getItem('theme')=='dark'){
    localStorage.setItem('theme','light')
    lightToggle()
   }else{
    localStorage.setItem('theme','dark')
    darkToggle()
   }
})
if(localStorage.getItem('theme')=='dark')darkToggle()
else lightToggle()

// Section navigation
function navToSec(id) {
    location.href=`#${id}`
}

// Update URL while scrolling
const sections = document.querySelectorAll("main section")
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const id = entry.target.id
            history.replaceState(null,null,`#${id}`)
        }
    })
},{
    threshold:0.6
})

sections.forEach(section=>{
    observer.observe(section)
})

// About
function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    return age;
}

const ageSpan=document.getElementById('age')
ageSpan.textContent=getAge('2008-11-18')


// Skills
let skills={
    HTML:['<i class="fab fa-html5" style="color: #e34c26;"></i>',80],
    CSS:['<i class="fab fa-css3-alt" style="color: #1572b6;"></i>',60],
    JavaScript:['<i class="fab fa-js" style="color: #f3d600;"></i>',70],
    Python:['<i class="fab fa-python" style="color: #3776ab;"></i>',80],
    Django:['<i class="fa-solid fa-code" style="color: #075839;"></i>',60],
    React:['<i class="fab fa-react" style="color: #61dafb;"></i>',1],
    MySQL:['<i class="fas fa-database" style="color: #005a81;"></i>',35],
    Git:['<i class="fab fa-git-alt" style="color: #e34c26;"></i>',40]
}
let grid=document.getElementById('skills-grid')
for(let skill in skills){

    let icon=skills[skill][0]
    let percent=skills[skill][1]

    grid.innerHTML+=`
        <div class="skill-card">
            <div class="skill-title">
                <div class="skill-icon">${icon}</div>
                <div class="skill-details">
                    <span class="skill-name">${skill}</span>
                    <span class="skill-percent">${percent}%</span>
                </div>
            </div>
            <div class="skill-graph">
                <div style="width:${percent}%"></div>
            </div>
        </div>
    `
}

// Changing icons
const icons = {
    'fab fa-html5':'#e34c26',
    'fab fa-css3-alt':'#1572b6',
    'fab fa-js':'#f3d600',
    'fab fa-python':'#3776ab',
    'fa-solid fa-code':'#075839',
    'fab fa-react':'#61dafb',
    'fas fa-database':'#005a81',
    'fab fa-git-alt':'#e34c26',
};
const icon = document.getElementById('changing-icon');
const iconClasses = Object.keys(icons);
let index = 0;

setInterval(() => {
    icon.className = "fa-bounce";
    index = (index + 1) % iconClasses.length;
    icon.classList.add(...iconClasses[index].split(" "));
    icon.style.color = icons[iconClasses[index]];
}, 1000);

// Mobile menu
const menuBtn=document.querySelector("#menu-btn")
const navbar=document.querySelector("header nav")
const navLinks=document.querySelectorAll("header nav ul li button")

navLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        navbar.classList.remove("active")
    })
})
menuBtn.addEventListener("click",()=>{
    navbar.classList.toggle("active")
})

// Footer update
document.getElementById("year").textContent = new Date().getFullYear();