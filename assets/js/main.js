const Projects = [
    {
        id: 0,
        title: "Smooth Portfolio",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan"
    },
    {
        id: 1,
        title: "Admin Dashboard",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan"
    },
    {
        id: 2,
        title: "Smooth Portfolio",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan hello world"
    },
    {
        id: 3,
        title: "Smooth Portfolio",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan"
    },
    {
        id: 4,
        title: "Youtube Clone",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan"
    },
    {
        id: 5,
        title: "Youtube Clone",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan"
    },
    {
        id: 0,
        title: "Smooth Portfolio",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan"
    },
    {
        id: 1,
        title: "Admin Dashboard",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan"
    },
    {
        id: 2,
        title: "Smooth Portfolio",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan hello world"
    },
    {
        id: 3,
        title: "Smooth Portfolio",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan"
    },
    {
        id: 4,
        title: "Youtube Clone",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan"
    },
    {
        id: 5,
        title: "Youtube Clone",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan"
    },
    {
        id: 0,
        title: "Smooth Portfolio",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan"
    },
    {
        id: 1,
        title: "Admin Dashboard",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan"
    },
    {
        id: 2,
        title: "Smooth Portfolio",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan hello world"
    },
    {
        id: 3,
        title: "Smooth Portfolio",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan"
    },
    {
        id: 4,
        title: "Youtube Clone",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan"
    },
    {
        id: 5,
        title: "Youtube Clone",
        desc: "Hello This Is Smoothie Porthfilio created by Salman Khan"
    },
]

const announcements = [
    {
        id: 0,
        title: "Admissions Open Now",
        desc: "Admissions open now so apply now and get your in addmissions in one of the top universities"
    },
    {
        id: 0,
        title: "Scholarship Applies Started",
        desc: "Admissions open now so apply now and get your in addmissions in one of the top universities"
    },
    {
        id: 0,
        title: "Admissions Open Now",
        desc: "Admissions open now so apply now and get your in addmissions in one of the top universities"
    },
    {
        id: 0,
        title: "Scholarship Applies Started",
        desc: "Admissions open now so apply now and get your in addmissions in one of the top universities"
    },
    {
        id: 0,
        title: "Admissions Open Now",
        desc: "Admissions open now so apply now and get your in addmissions in one of the top universities"
    },
    {
        id: 0,
        title: "Scholarship Applies Started",
        desc: "Admissions open now so apply now and get your in addmissions in one of the top universities"
    },
    {
        id: 0,
        title: "Admissions Open Now",
        desc: "Admissions open now so apply now and get your in addmissions in one of the top universities"
    },
    {
        id: 0,
        title: "Scholarship Applies Started",
        desc: "Admissions open now so apply now and get your in addmissions in one of the top universities"
    },
]



window.addEventListener("DOMContentLoaded", function(event){
    Projects.map((value, index, number)=>{
        document.querySelector(".projects_container").innerHTML += `<div class="single_project">
        <h2 class="project_title">${value.title}</h2>
        <p class="project_text">${value.desc}</p>
        <div class="project_links">
            <i class="bi bi-star"></i>
            <i class="bi bi-eye"></i>
            <i class="bi bi-link"></i>
        </div>
        </div>`

    })
    announcements.map((value,index,number)=> {
        this.document.querySelector(".announcements_grid").innerHTML += `<div class="single_grid">
        <h2>${value.title}</h2>
        <p>${value.desc}</p>
        <div class="bottom_line"></div>
    </div>`
    })
})
