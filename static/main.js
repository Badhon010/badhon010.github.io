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

            <p class="skill-title">
                <span class="skill-name">${icon} ${skill}</span>
                <span class="skill-percent">${percent}%</span>
            </p>

            <div class="skill-graph">
                <div style="width:${percent}%"></div>
            </div>

        </div>
    `
}

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