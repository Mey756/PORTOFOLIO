/* =============================== language (i18n) ================================
   Default language: English (en). Tambah bahasa lain dengan menambah blok baru
   di `translations`. Teks di HTML ditandai dengan atribut:
     data-i18n="key"              -> mengganti teks biasa
     data-i18n-html="key"         -> mengganti teks yang mengandung HTML (<br>, <span>)
     data-i18n-placeholder="key"  -> mengganti placeholder input
     data-date="YYYY-MM-DD"       -> tanggal otomatis diformat sesuai bahasa
   =============================================================================== */
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_portfolio: "Portfolio",
        nav_cert: "Certificate",
        nav_contact: "Contact",
        download_cv: "Download CV",
        hire_me: "Hire Me",
        title_about: "About Me",
        title_portfolio: "Portfolio",
        title_cert: "Certificate",
        title_contact: "Contact Me",
        info_birthday: `Birthday : <span data-date="2005-05-12"></span>`,
        info_age: `Age : <span>21</span>`,
        info_ig: `Instagram : <span>meeydinaa</span>`,
        info_phone: `Phone : <span>+62 857 7625 2966</span>`,
        info_email: `Email : <span>meydinawulandari22@gmail.com</span>`,
        pop_created: "Created - ",
        pop_tech: "Technologies - ",
        pop_role: "Role - ",
        pop_view: "View Project",

        home_hello: `<span class="hello">Hello</span>, I'm <span class="name">Meydina Dwi Wulandari</span>`,
        home_iam: "I'm",
        typed: ["a Fresh Graduate in Informatics Engineering", "ready to learn new things quickly"],
        home_desc: "Bachelor's graduate in Informatics Engineering with an interest in technology, administration, and design. Open to job opportunities in IT as well as operations, and ready to learn and grow professionally.",

        about_name: `Meydina Dwi Wulandari <span> Informatics Engineering</span>`,
        about_text: `During my studies, I learned various areas of information technology, from programming, application development, and system design to UI/UX design.
            I have experience developing web and Android projects using HTML, CSS, JavaScript, Java, Python, and PHP, and I am used to working with tools such as Visual Studio Code, Android Studio, and Apache NetBeans IDE.
            For design work, I use Canva and Adobe Express, and I am currently deepening my skills in Figma to support more complex UI/UX design.
            I also have video editing skills to produce content.
            In addition, I can operate Microsoft Office (Word, Excel, PowerPoint) and Google Sheets for documentation and data processing.<br><br>
            One of the projects I developed is an Android-based student financial management app, which was my final project.
            I am currently open to job opportunities in IT as well as operations, ready to grow my skills through professional experience, and committed to continuing to learn and contribute to technological innovation.`,
        about_edu: `Education : <span>Bachelor's in Informatics Engineering — Universitas Pamulang</span>`,

        cat_design: "Graphic Designer & Video Editor",
        cat_docs: "Documentation",
        project_one: "Project",
        project_many: "Projects",
        back: "← Back",
        view: "View →",

        contact_title: "Have any questions?",
        contact_sub: `I'M READY TO ANSWER<br><br>(click any icon below to reach me directly)`,
        contact_call: "Call Me",
        contact_loc: "Location",
        mail_title: "SEND ME AN EMAIL",
        mail_sub: "I RESPOND QUICKLY TO MESSAGES",
        ph_name: "Name",
        ph_email: "Email",
        ph_subject: "Subject",
        ph_message: "Message",
        send: "Send Message",

        theme_colors: "Theme Colors",
        lang_switch_title: "Switch to Bahasa Indonesia"
    },

    id: {
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_portfolio: "Portofolio",
        nav_cert: "Sertifikat",
        nav_contact: "Kontak",
        download_cv: "Unduh CV",
        hire_me: "Rekrut Saya",
        title_about: "Tentang Saya",
        title_portfolio: "Portofolio",
        title_cert: "Sertifikat",
        title_contact: "Kontak Saya",
        info_birthday: `Tanggal Lahir : <span data-date="2005-05-12"></span>`,
        info_age: `Usia : <span>21</span>`,
        info_ig: `Instagram : <span>meeydinaa</span>`,
        info_phone: `Telepon : <span>+62 857 7625 2966</span>`,
        info_email: `Email : <span>meydinawulandari22@gmail.com</span>`,
        pop_created: "Dibuat - ",
        pop_tech: "Teknologi - ",
        pop_role: "Peran - ",
        pop_view: "Lihat Proyek",

        home_hello: `<span class="hello">Hello</span>, saya <span class="name">Meydina Dwi Wulandari</span>`,
        home_iam: "Saya",
        typed: ["Fresh Graduate Teknik Informatika", "siap belajar hal baru dengan cepat"],
        home_desc: "Lulusan S1 Teknik Informatika dengan minat pada bidang teknologi, administrasi, dan desain. Terbuka untuk peluang kerja di bidang IT maupun operasional, serta siap belajar dan berkembang secara profesional.",

        about_name: `Meydina Dwi Wulandari <span> Teknik Informatika</span>`,
        about_text: `Selama kuliah, saya mempelajari berbagai bidang dalam teknologi informasi, mulai dari pemrograman, pengembangan aplikasi, perancangan sistem, hingga desain UI/UX.
            Saya memiliki pengalaman mengembangkan proyek berbasis web dan Android menggunakan HTML, CSS, JavaScript, Java, Python, dan PHP, serta terbiasa menggunakan tools seperti Visual Studio Code, Android Studio, dan Apache NetBeans IDE.
            Untuk kebutuhan desain, saya menggunakan Canva dan Adobe Express, serta saat ini sedang memperdalam Figma untuk mendukung proses desain UI/UX yang lebih kompleks.
            Saya juga memiliki kemampuan video editing untuk memproduksi konten.
            Selain itu, saya dapat mengoperasikan Microsoft Office (Word, Excel, PowerPoint) serta Google Spreadsheet untuk kebutuhan dokumentasi dan pengolahan data.<br><br>
            Salah satu proyek yang saya kembangkan adalah aplikasi manajemen keuangan mahasiswa berbasis Android sebagai tugas akhir saya.
            Saat ini saya terbuka untuk peluang kerja di bidang IT maupun operasional, siap mengembangkan kemampuan melalui pengalaman profesional, serta berkomitmen untuk terus belajar dan berkontribusi pada inovasi teknologi.`,
        about_edu: `Pendidikan : <span>S1 Teknik Informatika — Universitas Pamulang</span>`,

        cat_design: "Desainer Grafis & Editor Video",
        cat_docs: "Dokumentasi",
        project_one: "Project",
        project_many: "Project",
        back: "← Kembali",
        view: "Lihat →",

        contact_title: "Apa ada yang ingin ditanyakan?",
        contact_sub: `SAYA SIAP MENJAWAB<br><br>(klik salah satu icon dibawah untuk langsung mengarahkan)`,
        contact_call: "Hubungi Saya",
        contact_loc: "Lokasi",
        mail_title: "KIRIMI SAYA EMAIL",
        mail_sub: "SAYA SANGAT RESPONSIF TERHADAP PESAN",
        ph_name: "Nama",
        ph_email: "Email",
        ph_subject: "Subjek",
        ph_message: "Pesan",
        send: "Kirim Pesan",

        theme_colors: "Warna Tema",
        lang_switch_title: "Ganti ke Bahasa Inggris"
    }
};

const DEFAULT_LANG = "en";
let currentLang = DEFAULT_LANG;
try {
    const saved = localStorage.getItem("lang");
    if (saved && translations[saved]) currentLang = saved;
} catch (e) { /* localStorage tidak tersedia, pakai default */ }

const langListeners = [];

/* ambil teks terjemahan berdasarkan key */
function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) ?? translations[DEFAULT_LANG][key] ?? key;
}
/* ambil nilai dua bahasa dari objek {en: "...", id: "..."} (dipakai di data project) */
function tr(value) {
    if (value && typeof value === "object") return value[currentLang] ?? value[DEFAULT_LANG];
    return value;
}
/* daftarkan fungsi yang dipanggil setiap bahasa berganti */
function onLanguageChange(fn) { langListeners.push(fn); }

function formatDate(iso) {
    const locale = currentLang === "id" ? "id-ID" : "en-US";
    return new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
        .format(new Date(iso + "T00:00:00Z"));
}

function applyLanguage(lang) {
    if (!translations[lang]) lang = DEFAULT_LANG;
    currentLang = lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.querySelectorAll("[data-date]").forEach(el => { el.textContent = formatDate(el.dataset.date); });

    const label = document.getElementById("lang-label");
    const toggle = document.getElementById("lang-toggle");
    if (label) label.textContent = (lang === "en" ? "id" : "en").toUpperCase(); // tampilkan bahasa tujuan
    if (toggle) toggle.title = t("lang_switch_title");

    langListeners.forEach(fn => fn(lang));
}