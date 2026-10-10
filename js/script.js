/* =============================== typing animation ================================ */
let typed = null;
function initTyped() {
    if (typed) typed.destroy();
    document.querySelector(".typing").textContent = "";
    typed = new Typed(".typing", {
        strings: t("typed"),        // teks diambil dari i18n.js sesuai bahasa aktif
        typeSpeed: 100,
        BackSpeed: 60,
        loop: true
    });
}
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


/* ========================================== PORTFOLIO  =================================== */
/* Teks yang berbeda per bahasa ditulis sebagai { en: "...", id: "..." } */
const projectData = {
    web: [
        {
            title: "Hotel",
            description: {
                en: "A hotel management system with 3 roles (Admin (left), Receptionist (middle), Guest (right)). Guests can book, pay online, and print invoices. Receptionists manage reservations, check-in/out, and walk-in bookings. Admins manage room data, users, revenue, and complete reports (PDF/Excel), along with a real-time statistics dashboard.",
                id: "Sistem manajemen hotel dengan 3 role (Admin (kiri), Resepsionis (tengah), Tamu (kanan)). Tamu dapat booking, bayar online, dan cetak invoice. Resepsionis mengelola reservasi, check-in/out, dan booking walk-in. Admin mengelola data kamar, user, pendapatan, serta laporan (PDF/Excel) lengkap dengan dashboard statistik real-time."
            },
            created: "2026",
            technologies: "PHP, MySQL",
            role: "Full-stack Developer",
            link: "https://github.com/Mey756/Hotel.git",
            img: "image/hotel2.jpg"
        },
        {
            title: { en: "Sales Invoice", id: "Faktur Penjualan" },
            description: {
                en: "A sales invoice information system built with PHP and MySQL, featuring login, sales data management, and reports.",
                id: "Sistem informasi faktur penjualan berbasis PHP dan MySQL, dengan fitur login, manajemen data penjualan, dan laporan."
            },
            created: "2025",
            technologies: "PHP, MySQL",
            role: "Full-stack Developer",
            link: "https://github.com/Mey756/Faktur-Penjualan",
            img: "image/faktur.png"
        },
        {
            title: {
                en: "Internship Project - Online Registration and Tuition (SPP) Payment",
                id: "Kerja Praktik - Pendaftaran dan Pembayaran SPP Online"
            },
            description: {
                en: "A website for PAUD Al-Hikmah that serves as a school information medium for parents looking for an early childhood school, as well as an online registration and tuition (SPP) payment system via bank transfer. Students log in with accounts provided by the admin to pay tuition. The admin manages admissions (PPDB), student data, alumni, gallery, quizzes, and student accounts online.",
                id: "Website untuk PAUD Al-Hikmah sebagai media informasi sekolah bagi orang tua yang mencari PAUD, sekaligus sistem pendaftaran online dan pembayaran SPP via transfer. Siswa login pakai akun dari admin untuk bayar SPP. Admin mengelola PPDB, data siswa, alumni, galeri, quiz, dan akun siswa secara online."
            },
            created: "2025",
            technologies: "PHP, MySQL",
            role: "Full-stack Developer",
            link: "ws",
            img: "image/paud.jpg"
        },
        {
            title: "GameSphere",
            description: "GameSphere : Game Box Snake & Brick Game",
            created: { en: "Dec 1, 2024", id: "1 Des 2024" },
            technologies: "HTML, CSS, JS",
            role: "Frontend",
            link: "https://gamesphere-seven.vercel.app/",
            img: "image/game.jpg"
        },
    ],
    dokumentasi: [
        {
            title: { en: "Internship - PAUD Al-Hikmah", id: "Kerja Praktik - Paud Al-Hikmah" },
            description: {
                en: "Implementation of an online registration & tuition (SPP) payment information system. Full-stack Developer. 2025.",
                id: "Implementasi sistem informasi pendaftaran online & pembayaran SPP. Full-stack Developer. 2025."
            },
            created: { en: "July 2025", id: "Juli 2025" },
            technologies: { en: "Web Implementation", id: "Implementasi Web" },
            role: "Full-stack Developer",
            link: "https://drive.google.com/file/d/1lFTTiHFD44EQolCUyKXaCPxDdKrBkMIN/view?usp=drive_link",
            img: "image/KP.png"
        },
        {
            title: { en: "PKM - SMP Fajar Ciseeng", id: "PKM - SMP Fajar Ciseeng" },
            description: {
                en: "A Community Service (PKM) activity at SMP Fajar with the theme \"Overcoming Excessive Gadget Use Among Junior High Students: Tips for Managing Screen Time\". The activity aims to raise students' awareness of the negative impact of excessive gadget use and to give practical tips for managing screen time so they stay productive in their studies, stay healthy, and keep up social interaction. Students are expected to use their gadgets more wisely and with discipline.",
                id: "Kegiatan Pengabdian kepada Masyarakat (PKM) di SMP Fajar dengan tema Mengatasi Gawai Berlebihan di Kalangan Siswa SMP: Tips Mengatur Waktu Penggunaan Gawai. Kegiatan ini bertujuan meningkatkan kesadaran siswa akan dampak negatif penggunaan gawai berlebihan serta memberikan tips praktis mengelola waktu penggunaan gawai agar tetap produktif dalam belajar, menjaga kesehatan, dan interaksi sosial. Diharapkan siswa lebih bijak dan disiplin memanfaatkan gawai secara sehat."
            },
            created: { en: "October 23, 2024", id: "23 Oktober 2024" },
            technologies: { en: "Outreach & Education", id: "Sosialisasi & Edukasi" },
            role: { en: "Speaker", id: "Pembicara" },
            link: "https://drive.google.com/drive/folders/1XhJCrfG0T1tNjS8h_J0v3sqOCOvpBbGZ?usp=drive_link",
            img: "image/pkm.jpeg"
        },
    ],
    android: [
        {
            title: {
                en: "M-Smart - Student Financial Management App",
                id: "M-Smart - Aplikasi Manajemen Keuangan Mahasiswa"
            },
            description: {
                en: "M-Smart is an Android app for managing student finances, with manual or receipt-OCR transaction recording, multiple banks/e-wallets, filtered history, and bill splitting. It includes graphical reports on trends and category distribution, automatic insights, and savings targets. Its flagship SPK Assistant uses the MOORA method to recommend spending priorities based on urgency, impact, funds, frequency, and cost, with a ranking history. Supported by tiered agenda reminders, formatted notes, a real-time balance widget, and escalating daily notifications.",
                id: "M-Smart adalah aplikasi Android pengelola keuangan mahasiswa dengan fitur pencatatan transaksi manual/OCR struk, multi bank/e-wallet, riwayat berfilter, dan split bill. Dilengkapi laporan grafik tren, distribusi kategori, insight otomatis, dan target tabungan. Fitur unggulan SPK Assistant memakai metode MOORA untuk rekomendasi prioritas pengeluaran berdasarkan urgensi, dampak, dana, frekuensi, biaya, dengan riwayat perankingan. Didukung agenda reminder bertingkat, catatan berformat, widget saldo real-time, dan notifikasi harian eskalatif."
            },
            created: "2026",
            technologies: {
                en: "Android Studio & Java, SQLite database, Firebase Authentication, Prototyping development model.",
                id: "Android Studio & Java, database SQLite, Firebase Authentication, model pengembangan Prototyping."
            },
            role: "Developer",
            link: "https://drive.google.com/drive/folders/19_W3liTcG1p17fGXeRW6YcR0WJgHNZ_h?usp=sharing",
            img: "image/keuangan2.jpg"
        },
        {
            title: {
                en: "SmartAbility - Disability-Friendly Daily Activity Assistant",
                id: "SmartAbility -  Asisten Aktivitas Harian Ramah Disabilitas"
            },
            description: {
                en: "SmartAbility is an app designed to help people with disabilities in their daily activities. Its features include Activity Reminders, Voice Notes, Reminders, Disability-Friendly Locations, and an Emergency Button. It is also supported by a text-to-speech feature (turning text into voice).",
                id: "SmartAbility adalah aplikasi yang dirancang untuk membantu penyandang disabilitas dalam menjalani aktivitas sehari-hari. Fitur Pengingat Aktivitas, Catatan Suara, Pengingat, Lokasi Ramah Disabel, dan Tombol Darurat. Serta didukung fitur text-to-speech (ubah teks jadi suara)"
            },
            created: "2025",
            technologies: {
                en: "Android Studio, Java & SQLite database",
                id: "Android Studio, Java & database SQLite"
            },
            role: "Developer",
            link: "https://drive.google.com/drive/folders/1E2wDImRHYI-RtKejz66EgstOp1F-5_V1?usp=drive_link",
            img: "image/smartability.jpg"
        },
        {
            title: { en: "Movie List App", id: "Aplikasi Daftar Film" },
            description: {
                en: "With this app you can watch the available movies and add them to your favorites list.",
                id: "Aplikasi ini dapat menonton film yang tersedia & dapat menambah ke daftar film favorit"
            },
            created: "2025",
            technologies: "Android Studio & Java",
            role: "Developer",
            link: "https://drive.google.com/drive/folders/1HLAuoIzZtFLuqiTzPIdqotdGULqhCyf4?usp=drive_link",
            img: "image/film.jpg"
        },
    ],
    desain: [
        {
            title: { en: "M-SMART", id: "M-SMART" },
            description: {
                en: "Here are the interface and UI designs for my M-SMART Android application.",
                id: "Desain untuk aplikasi Android M-SMART saya, ini ada rancangan antarmuka dan juga UI aplikasi Android M-SMART."
            },
            created: "2026",
            technologies: "Mockflow, Android Studio",
            link: "https://drive.google.com/drive/folders/1GABSb8Pm8LNDEOgnL-5yOIuupc7Dk38n?usp=sharing",
            img: "image/logo_msmart.jpg"
        },
        {
            title: { en: "TEASER TAC S3 KOREA SERVER", id: "TEASER TAC S3 KOREA SERVER" },
            description: {
                en: "Videos, short clips, or previews released to generate interest in the Korean server Mobile Legends tournament.",
                id: "Video, cuplikan pendek, atau pratinjau yang dirilis untuk menarik minat untuk turnamen mobile legends server korea."
            },
            created: "2026",
            technologies: "CapCut Desktop Pro",
            link: "https://drive.google.com/file/d/1clgxjlKhIPO_HoK6YnvCKDtcasIjM7lz/view?usp=drive_link",
            img: "image/S3.jpeg"
        },
    ]
};

/* ----- Popup ----- */
const popupOverlay = document.querySelector(".popup-overlay");
let currentPopupProject = null;

function fillPopup(p) {
    document.getElementById("popup-title").textContent = tr(p.title) || "";
    document.getElementById("popup-description").textContent = tr(p.description) || "";
    document.getElementById("popup-created").textContent = tr(p.created) || "";
    document.getElementById("popup-technologies").textContent = tr(p.technologies) || "";
    document.getElementById("popup-role").textContent = tr(p.role) || "";
    document.getElementById("popup-link").href = p.link;
}
function openPopup(p) {
    currentPopupProject = p;
    fillPopup(p);
    popupOverlay.classList.remove("hidden");
}
function closePopup() {
    currentPopupProject = null;
    popupOverlay.classList.add("hidden");
}
document.querySelector(".close-button").addEventListener("click", closePopup);
popupOverlay.addEventListener("click", (event) => {
    if (event.target === popupOverlay) closePopup();
});

/* ----- Kategori & daftar project ----- */
const categoryGrid = document.getElementById("categoryGrid");
const projectList = document.getElementById("projectList");
const workGrid = document.getElementById("workGrid");
const backButton = document.getElementById("backButton");
let currentCategory = null;

// Isi otomatis jumlah project di tiap kartu kategori
function updateCounts() {
    document.querySelectorAll(".category-card").forEach(card => {
        const n = (projectData[card.getAttribute("data-category")] || []).length;
        card.querySelector(".count").textContent = `${n} ${n === 1 ? t("project_one") : t("project_many")}`;
    });
}

function renderCategory(category) {
    const projects = projectData[category] || [];
    workGrid.innerHTML = "";

    // semua kategori memakai card yang sama (work-card)
    projects.forEach(proj => {
        const div = document.createElement("div");
        div.className = "work-card";

        const img = document.createElement("img");
        img.src = proj.img;
        img.alt = tr(proj.title) || "Design";
        div.appendChild(img);

        if (proj.title) {
            const h3 = document.createElement("h3");
            h3.textContent = tr(proj.title);
            div.appendChild(h3);
        }

        if (proj.link) {
            const btn = document.createElement("button");
            btn.className = "demo-button";
            btn.textContent = t("view");
            btn.addEventListener("click", () => openPopup(proj));
            div.appendChild(btn);
        } else if (proj.description) {
            const p = document.createElement("p");
            p.className = "work-desc";
            p.textContent = tr(proj.description);
            div.appendChild(p);
        }

        workGrid.appendChild(div);
    });
}

document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
        currentCategory = card.getAttribute("data-category");
        renderCategory(currentCategory);
        categoryGrid.classList.add("hidden");
        projectList.classList.remove("hidden");
    });
});

backButton.addEventListener("click", () => {
    currentCategory = null;
    projectList.classList.add("hidden");
    categoryGrid.classList.remove("hidden");
});

/* ----- Saat bahasa berganti ----- */
onLanguageChange(() => {
    initTyped();
    updateCounts();
    if (currentCategory) renderCategory(currentCategory);
    if (currentPopupProject) fillPopup(currentPopupProject);
});