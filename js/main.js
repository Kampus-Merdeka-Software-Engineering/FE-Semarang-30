// Navbar Menu Button
const navbarNav = document.querySelector(".navbar-nav");
const menuButton = document.querySelector(".menu");
const menuImg = document.querySelector(".menu-img");
const overlay = document.querySelector(".overlay");
const body = document.body;

function updateVisibility() {
  const visibility = navbarNav.getAttribute("data-visible");
  const newVisibility = visibility === "false" ? "true" : "false";

  navbarNav.setAttribute("data-visible", newVisibility);
  menuButton.setAttribute("aria-expanded", newVisibility);
  if (newVisibility === "false") {
    menuImg.src = "assets/svg/menu.svg";
  } else {
    menuImg.src = "assets/svg/close.svg";
  }
  overlay.setAttribute("data-visible", newVisibility);
}

menuButton.addEventListener("click", () => {
  updateVisibility();
});

overlay.addEventListener("click", () => {
  updateVisibility();
});

// SET INTERVAL FOR CAROUSEL SERVIVES

const carousel = document.querySelector(".carousel");
const services = document.querySelectorAll(".service");
const serviceCount = services.length;

let currentIndex = 0;
const intervalTime = 5000; // Change slide every 5 seconds

function nextService() {
  services[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % serviceCount;
  services[currentIndex].classList.add("active");
  updateCarousel();
}

function updateCarousel() {
  const translateXValue = -currentIndex * 100;
  carousel.style.transform = `translateX(${translateXValue}%)`;
}

setInterval(nextService, intervalTime);

// Accordion
const labels = document.querySelectorAll(".label");

labels.forEach(function (label) {
  label.addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;

    content.style.maxHeight =
      !content.style.maxHeight || content.style.maxHeight === "0px"
        ? content.scrollHeight + "px"
        : "0px";
  });
});

//list doctor

const doctorData = [
  {
    name: "drg. Wisis Arif Setiawan K D, Sp.KGA (Pedodonti/Gigi Anak)",
    schedule: ["Senin - Rabu : 09.00 - 14.00", "Kamis - Sabtu : 15.00 - 19.00"],
  },
  {
    name: "drg. Zahra Maysani",
    schedule: ["Senin - Rabu : 09.00 - 14.00", "Kamis - Sabtu : 15.00 - 19.00"],
  },
  {
    name: "drg. Erna Listiana Dewi, MPH",
    schedule: ["Senin - Rabu : 09.00 - 14.00", "Kamis - Sabtu : 15.00 - 19.00"],
  },
  {
    name: "drg. Rafaell Victor Christian, Sp.KG",
    schedule: ["Senin - Rabu : 15.00 - 19.00", "Kamis - Sabtu : 09.00 - 14.00"],
  },
  {
    name: "drg. Andhika Hanif Prasetyo K Sp.KGA",
    schedule: ["Senin - Rabu : 15.00 - 19.00", "Kamis - Sabtu : 09.00 - 14.00"],
  },
  {
    name: "drg. Anggita Prameswari K Sp.KGA",
    schedule: ["Senin - Rabu : 15.00 - 19.00", "Kamis - Sabtu : 09.00 - 14.00"],
  },

  // Tambahkan data dokter dan jadwal lainnya di sini
];
// Fungsi untuk menampilkan jadwal dokter
function showDoctorSchedule(index) {
  const schedule = doctorData[index].schedule;
  const jadwalContainer = document.getElementById("jadwal-dokter");
  const namaDokter = document.getElementById("nama-dokter");

  // Menampilkan nama dokter di samping h3 "Jadwal Dokter"
  namaDokter.textContent = doctorData[index].name;

  jadwalContainer.innerHTML = ""; // Menghapus semua elemen di dalam jadwalContainer sebelum menambahkan yang baru

  schedule.forEach((data) => {
    const listschedul = document.createElement("p");
    listschedul.textContent = data;

    // Menambahkan event listener untuk menghapus elemen saat diklik
    listschedul.addEventListener("click", function () {
      jadwalContainer.removeChild(listschedul);
    });

    jadwalContainer.appendChild(listschedul);
  });
}

// Fungsi untuk mengisi daftar dokter
function populateDoctorList() {
  const doctorList = document.getElementById("doctor-list");
  doctorData.forEach((doctor, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = doctor.name;
    listItem.addEventListener("click", () => showDoctorSchedule(index));
    doctorList.appendChild(listItem);
  });
}

// Panggil fungsi untuk mengisi daftar dokter saat halaman dimuat
window.addEventListener("load", populateDoctorList);

// Punya Ara

document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById(".register-container");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    const email = emailInput.value;

    // Validasi password dan konfirmasi password
    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok.");
      return;
    }

    // Validasi panjang minimal password (minimal 8 karakter)
    if (password.length < 8) {
      alert("Password harus memiliki minimal 8 karakter.");
      return;
    }

    // Validasi penggunaan karakter khusus dalam password
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      alert("Password harus mengandung setidaknya satu karakter khusus.");
      return;
    }

    // Validasi penggunaan huruf besar (uppercase) dalam password
    if (!/[A-Z]/.test(password)) {
      alert(
        "Password harus mengandung setidaknya satu huruf besar (uppercase)."
      );
      return;
    }

    // Validasi penggunaan huruf kecil (lowercase) dalam password
    if (!/[a-z]/.test(password)) {
      alert(
        "Password harus mengandung setidaknya satu huruf kecil (lowercase)."
      );
      return;
    }

    // Lakukan pendaftaran pengguna atau kirim data ke server sesuai logika aplikasi Anda
    alert("Registrasi berhasil!");
  });
});
