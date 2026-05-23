/**
 * MAN Purbalingga - Official Portal Script
 * Standardized for Educational Institutions
 */

document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Navbar Scroll Effect
  // Mengubah tampilan navbar saat pengguna melakukan scroll ke bawah
  const navbar = document.querySelector(".custom-navbar");
  
  const handleNavbarScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled", "shadow-sm");
    } else {
      navbar.classList.remove("scrolled", "shadow-sm");
    }
  };

  // Jalankan fungsi saat pertama kali dimuat dan saat halaman di-scroll
  window.addEventListener("scroll", handleNavbarScroll);
  handleNavbarScroll();


  // 2. Klik Otomatis untuk Smooth Scroll pada Navigasi Dropdown
  // Mengantisipasi perpindahan halaman antar section jika berada di page 'program.html'
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach(item => {
    item.addEventListener("click", (e) => {
      const href = item.getAttribute("href");
      
      // Jika link mengarah ke id internal di halaman yang sama
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetSection = document.querySelector(href);
        if (targetSection) {
          const navbarHeight = navbar.offsetHeight;
          const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });


  // 3. Kontrol Modal Pop-up secara Programatik (Opsional / Tambahan Pengamanan)
  // Memastikan bahwa ketika modal ditutup, fokus halaman kembali normal dan tidak merusak layout
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    modal.addEventListener("hidden.bs.modal", () => {
      // Memastikan backdrop bawaan Bootstrap terhapus dengan bersih
      document.body.style.overflow = "auto";
    });
  });


  // 4. Pengaya Efek Interaktif pada Hover Card Guru
  // Menambahkan efek tracking posisi kursor secara halus (opsional untuk menambah kesan luxury)
  const teacherCards = document.querySelectorAll(".teacher-interactive-card");
  teacherCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transition = "transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease";
    });
  });

});