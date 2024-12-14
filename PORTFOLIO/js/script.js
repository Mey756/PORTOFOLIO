/* =============================== typing animation ================================ */
var typed = new Typed(".typing", {
    strings:[ "semester 5", "19 tahun", "mahasiswa Teknik Informatika"],
    typeSpeed:100,
    BackSpeed:80,
    loop:true
})
/* ========================================== Aside  =================================== */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                    //allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection()
    {
        for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.remove("back-section");
            }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    } 
    function updateNow(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        //console.log(sectionIndex);
        showSection(this);
        updateNow(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () =>
        {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open")
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.toggle("open");
            }
        }

        document.addEventListener("DOMContentLoaded", () => {
            const demoButtons = document.querySelectorAll(".demo-button");
            const popupOverlay = document.querySelector(".popup-overlay");
            const popupTitle = document.getElementById("popup-title");
            const popupDescription = document.getElementById("popup-description");
            const popupCreated = document.getElementById("popup-created");
            const popupTechnologies = document.getElementById("popup-technologies");
            const popupRole = document.getElementById("popup-role");
            const popupLink = document.getElementById("popup-link");
            const closeButton = document.querySelector(".close-button");
          
            // Show Popup
            demoButtons.forEach((button) => {
              button.addEventListener("click", () => {
                const details = JSON.parse(button.getAttribute("data-details"));
          
                popupTitle.textContent = details.title;
                popupDescription.textContent = details.description;
                popupCreated.textContent = details.created;
                popupTechnologies.textContent = details.technologies;
                popupRole.textContent = details.role;
                popupLink.href = details.link;
          
                popupOverlay.classList.remove("hidden");
              });
            });
          
            // Close Popup
            closeButton.addEventListener("click", () => {
              popupOverlay.classList.add("hidden");
            });
          
            popupOverlay.addEventListener("click", (event) => {
              if (event.target === popupOverlay) {
                popupOverlay.classList.add("hidden");
              }
            });
          });
          

