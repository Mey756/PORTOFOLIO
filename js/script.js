/* =============================== typing animation ================================ */
var typed = new Typed(".typing", {
    strings:["Fresh Graduate Teknik Informatika","siap belajar hal baru dengan cepat"],
    typeSpeed:100,
    BackSpeed:60,
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
          

/* ========================================== PORTFOLIO  =================================== */       
const projectData = {
    web: [
        {
            title: "Hotel",
            description: "Sistem manajemen hotel dengan 3 role (Admin (kiri), Resepsionis (tengah), Tamu (kanan)). Tamu dapat booking, bayar online, dan cetak invoice. Resepsionis mengelola reservasi, check-in/out, dan booking walk-in. Admin mengelola data kamar, user, pendapatan, serta laporan (PDF/Excel) lengkap dengan dashboard statistik real-time.",
            created: "2026",
            technologies: "PHP, MySQL",
            role: "Full-stack Developer",
            link: "https://github.com/Mey756/Hotel.git",
            img: "image/hotel2.jpg"
        },
        {
            title: "Faktur Penjualan",
            description: "Sistem informasi faktur penjualan berbasis PHP dan MySQL, dengan fitur login, manajemen data penjualan, dan laporan.",
            created: "2025",
            technologies: "PHP, MySQL",
            role: "Full-stack Developer",
            link: "https://github.com/Mey756/Faktur-Penjualan",
            img: "image/faktur.png"
        },
        {
            title: "Kerja Praktik - Pendaftaran dan Pembayaran SPP Online",
            description: "Website untuk PAUD Al-Hikmah sebagai media informasi sekolah bagi orang tua yang mencari PAUD, sekaligus sistem pendaftaran online dan pembayaran SPP via transfer. Siswa login pakai akun dari admin untuk bayar SPP. Admin mengelola PPDB, data siswa, alumni, galeri, quiz, dan akun siswa secara online.",
            created: "2025",
            technologies: "PHP, MySQL",
            role: "Full-stack Developer",
            link: "ws",
            img: "image/paud.jpg"
        },
        {
            title: "GameSphere",
            description: "GameSphere : Game Box Snake & Brick Game",
            created: "1 Des 2024",
            technologies: "HTML, CSS, JS",
            role: "Frontend",
            link: "https://gamesphere-seven.vercel.app/",
            img: "image/game.jpg"
        },
    ],
    dokumentasi: [
        {
            title: "Kerja Praktik - Paud Al-Hikmah",
            description: "Implementasi sistem informasi pendaftaran online & pembayaran SPP. Full-stack Developer. 2025.",
            created: "Juli 2025",
            role: "Full-stack Developer",
            img: "image/KP.png"
        },
        {
            title: "PKM - SMP Fajar Ciseeng",
            description: "Kegiatan Pengabdian kepada Masyarakat (PKM) di SMP Fajar dengan tema Mengatasi Gawai Berlebihan di Kalangan Siswa SMP: Tips Mengatur Waktu Penggunaan Gawai. Kegiatan ini bertujuan meningkatkan kesadaran siswa akan dampak negatif penggunaan gawai berlebihan serta memberikan tips praktis mengelola waktu penggunaan gawai agar tetap produktif dalam belajar, menjaga kesehatan, dan interaksi sosial. Diharapkan siswa lebih bijak dan disiplin memanfaatkan gawai secara sehat.",
            created: "23 Oktober 2024",
            technologies: "Sosialisasi & Edukasi",
            role: "Pembicara",
            link: "https://drive.google.com/drive/folders/1XhJCrfG0T1tNjS8h_J0v3sqOCOvpBbGZ?usp=drive_link",
            img: "image/pkm.jpeg"
        },
    ],
    android: [
        {
            title: "Aplikasi Manajemen Keuangan Mahasiswa",
            description: "M-Smart adalah aplikasi Android pengelola keuangan mahasiswa dengan fitur pencatatan transaksi manual/OCR struk, multi bank/e-wallet, riwayat berfilter, dan split bill. Dilengkapi laporan grafik tren, distribusi kategori, insight otomatis, dan target tabungan. Fitur unggulan SPK Assistant memakai metode MOORA untuk rekomendasi prioritas pengeluaran berdasarkan urgensi, dampak, dana, frekuensi, biaya, dengan riwayat perankingan. Didukung agenda reminder bertingkat, catatan berformat, widget saldo real-time, dan notifikasi harian eskalatif.",
            created: "2026",
            technologies: "Android Studio & Java, database SQLite, Firebase Authentication, model pengembangan Prototyping.",
            role: "Developer",
            link: "https://drive.google.com/drive/folders/19_W3liTcG1p17fGXeRW6YcR0WJgHNZ_h?usp=sharing",
            img: "image/keuangan2.jpg"
        }
    ],
    desain: [
        {img: "image/desain/regis.png"},
        {img: "image/desain/Regis.jpeg"},
        {img: "image/desain/login.png"},
        {img: "image/desain/Login.jpeg"},
        {img: "image/desain/beranda.png"},
        {img: "image/desain/beranda2.jpeg"},
        {img: "image/desain/keuangan.png"},
        {img: "image/desain/keuangan.jpeg"},
        {img: "image/desain/prioritas.png"},
        {img: "image/desain/prioritas.jpeg"},
        {img: "image/desain/prioritas2.jpeg"},
        {img: "image/desain/prioritas6.jpeg"},
        {img: "image/desain/prioritas8.jpeg"},
        {img: "image/desain/prioritas9.jpeg"},
        {img: "image/desain/akun.png"},
        {img: "image/desain/akun.jpeg"},
        {img: "image/desain/pemasukan.png"},
        {img: "image/desain/pemasukan.jpeg"},
        {img: "image/desain/pengeluaran.png"},
        {img: "image/desain/pengeluaran.jpg"},
        {img: "image/desain/riwayat.png"},
        {img: "image/desain/riwayat_transaksi.jpeg"},
        {img: "image/desain/laporan_t1.png"},
        {img: "image/desain/laporan_t2.png"},
        {img: "image/desain/laporan_t.jpeg"},
        {img: "image/desain/laporan_t2.jpeg"},
        {img: "image/desain/tabungan.png"},
        {img: "image/desain/tabungan.jpeg"},
        {img: "image/desain/tabungan2.jpeg"},
        {img: "image/desain/tabungan3.jpeg"},
        {img: "image/desain/tabungan4.jpeg"},
        {img: "image/desain/bill1.png"},
        {img: "image/desain/bill2.png"},
        {img: "image/desain/bill3.png"},
        {img: "image/desain/bill4.png"},
        {img: "image/desain/bill1.jpeg"},
        {img: "image/desain/bill2.jpeg"},
        {img: "image/desain/bill3.jpeg"},
        {img: "image/desain/bill4.jpeg"},
        {img: "image/desain/bill5.jpeg"},
        {img: "image/desain/bill6.jpeg"},
        {img: "image/desain/cacatan.png"},
        {img: "image/desain/TambahCatatan.jpeg"},
        {img: "image/desain/agenda.png"},
        {img: "image/desain/agenda.jpg"},
        {img: "image/desain/logout.png"},
        {img: "image/desain/LOGOUT.jpeg"},
        {img: "image/desain/widget.png"},
        {img: "image/desain/widget6.jpeg"},
    ]
};

const categoryGrid = document.getElementById('categoryGrid');
const projectList = document.getElementById('projectList');
const workGrid = document.getElementById('workGrid');
const backButton = document.getElementById('backButton');

// Isi otomatis jumlah project di tiap kartu kategori
document.querySelectorAll('.category-card').forEach(card => {
    const category = card.getAttribute('data-category');
    const count = (projectData[category] || []).length;
    card.querySelector('.count').textContent = `${count} Project`;
});

document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        const projects = projectData[category] || [];

        workGrid.innerHTML = '';

        // Tambah/hapus class design-grid di container-nya
        if (category === 'desain') {
            workGrid.classList.add('design-grid');
        } else {
            workGrid.classList.remove('design-grid');
        }

        projects.forEach(proj => {
            const div = document.createElement('div');
            div.className = 'work-card';

            if (category === 'desain') {
                div.className = 'work-card design-only';
                div.innerHTML = `<img src="${proj.img}" alt="Desain">`;
            } else {
                const buttonHtml = proj.link
                    ? `<button class="demo-button" data-details='${JSON.stringify(proj)}'>Lihat →</button>`
                    : `<p class="work-desc">${proj.description}</p>`;

                div.innerHTML = `
                    <img src="${proj.img}" alt="${proj.title}">
                    <h3>${proj.title}</h3>
                    ${buttonHtml}
                `;
            }
            workGrid.appendChild(div);
        });

        categoryGrid.classList.add('hidden');
        projectList.classList.remove('hidden');

        attachDemoButtonListeners();
    });
});

backButton.addEventListener('click', () => {
    projectList.classList.add('hidden');
    categoryGrid.classList.remove('hidden');
});

function attachDemoButtonListeners() {
    document.querySelectorAll('.demo-button').forEach((button) => {
        button.addEventListener('click', () => {
            const details = JSON.parse(button.getAttribute('data-details'));
            document.getElementById('popup-title').textContent = details.title;
            document.getElementById('popup-description').textContent = details.description;
            document.getElementById('popup-created').textContent = details.created;
            document.getElementById('popup-technologies').textContent = details.technologies;
            document.getElementById('popup-role').textContent = details.role;
            document.getElementById('popup-link').href = details.link;
            document.querySelector('.popup-overlay').classList.remove('hidden');
        });
    });
}
