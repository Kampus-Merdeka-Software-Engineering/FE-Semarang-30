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

// For specific pages
const currentPage = window.location.pathname;

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

// Profile
if (currentPage === "/profile-page.html") {
  const user_id = sessionStorage.getItem("user_id");

  console.log(user_id);

  const getHiUsername = document.querySelector("#hiUsername");
  const getUsername = document.querySelector("#username");
  const getEmail = document.querySelector("#email");

  const getDentist = document.querySelector("#dentist");
  const getDate = document.querySelector("#date");
  const getTime = document.querySelector("#time");

  const getAppointment = document.querySelector("#getAppointment");

  fetch(`http://localhost:3000/users?user_id=${user_id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .then((data) => {
      if (data) {
        console.log(data);
        getHiUsername.textContent = `Hi, ${data.user_username}`;
        getUsername.textContent = `${data.user_username}`;
        getEmail.textContent = `${data.user_email}`;
      } else {
        window.location.href = "/login.html";
      }
    });

  fetch(`http://localhost:3000/appointments/find?user_id=${user_id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .then((data) => {
      if (data.length > 0) {
        const appointments = data[0];

        getDentist.textContent = `${appointments.dentist_name}`;
        getDate.textContent = `${appointments.schedule_date_date}`;
        getTime.textContent = `${appointments.schedule_time_start} - ${appointments.schedule_time_end}`;
      } else {
        getAppointment.innerHTML = "";

        const h2 = document.createElement("h2");
        h2.textContent = "You have no appointments scheduled";

        getAppointment.appendChild(h2);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  const logoutButton = document.querySelector("#logoutButton");
  logoutButton.addEventListener("click", () => {
    fetch(`http://localhost:3000/users/logout`)
      .then((response) => {
        if (response.ok) {
          sessionStorage.removeItem("user_id");
          window.location.href = `/login.html`;
        } else {
          throw new Error("Logout failed");
        }
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  });
}

// Booking Form
if (currentPage === "/booking-form.html") {
  const user_id = sessionStorage.getItem("user_id");
  console.log(user_id);
  if (user_id) {
    console.log(user_id);
    // Dentist select
    let selectDentist = document.querySelector("#selectDentist");
    // Date select
    let selectDate = document.querySelector("#selectDate");
    // Time select
    let selectTime = document.querySelector("#selectTime");

    // Days (to convert date to day)
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Fetch dentist api
    fetch("http://localhost:3000/dentists")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((dentists) => {
          const option = document.createElement("option");
          option.value = dentists.dentist_id;
          option.text = dentists.dentist_name;
          selectDentist.appendChild(option);
        });
      })
      .catch((error) => {
        console.error("Error fetching dentists:", error);
      });

    // Fetch date api
    fetch("http://localhost:3000/schedule_dates")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((schedule_dates) => {
          const option = document.createElement("option");
          option.value = `${schedule_dates.schedule_date_id}|${schedule_dates.schedule_date_date}`;
          option.text = schedule_dates.schedule_date_date;
          selectDate.appendChild(option);
        });
      })
      .catch((error) => {
        console.error("Error fetching dates:", error);
      });

    // Fetch time api
    function fetchTime(dentist_id, dentist_schedule_day) {
      console.log(
        `http://localhost:3000/schedule_times/dentist_schedules?dentist_id=${dentist_id}&dentist_schedule_day=${dentist_schedule_day}`
      );

      fetch(
        `http://localhost:3000/schedule_times/dentist_schedules?dentist_id=${dentist_id}&dentist_schedule_day=${dentist_schedule_day}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then((data) => {
          selectTime.innerHTML = `<option value="" id="selectTimeDisplay" style="display: none">Select Time</option>`;

          data.forEach((schedule_times) => {
            const option = document.createElement("option");
            option.value = schedule_times.schedule_time_id;
            option.text = `${schedule_times.schedule_time_start} - ${schedule_times.schedule_time_end}`;
            selectTime.appendChild(option);
          });
        })
        .catch((error) => {
          console.error("Error fetching times:", error);
        });
    }

    // Listen dentist change
    selectDentist.addEventListener("change", () => {
      const selectedDentist = selectDentist.value;
      const [scheduleDateId, scheduleDateDate] = selectDate.value.split("|");
      let selectedDate = new Date(scheduleDateDate);
      let date = selectedDate.getDay();

      const selectedDay = dayNames[date];
      console.log(selectedDentist, selectedDay);

      fetchTime(selectedDentist, selectedDay);
    });

    // Listen date change
    selectDate.addEventListener("change", () => {
      const selectedDentist = selectDentist.value;
      const [scheduleDateId, scheduleDateDate] = selectDate.value.split("|");
      let selectedDate = new Date(scheduleDateDate);
      let date = selectedDate.getDay();

      const selectedDay = dayNames[date];
      console.log(selectedDentist, selectedDay);

      fetchTime(selectedDentist, selectedDay);
    });

    // Final submit button
    const submitBtn = document.querySelector("#form");

    submitBtn.addEventListener("click", function (event) {
      event.preventDefault();

      const selectDentist = document.querySelector("#selectDentist");
      const selectDate = document.querySelector("#selectDate");
      const selectTime = document.querySelector("#selectTime");

      // Get the selected values
      const selectedDentistId = selectDentist.value;
      const [scheduleDateId, scheduleDateDate] = selectDate.value.split("|");
      const selectedTimeId = selectTime.value;

      console.log(selectedDentistId, scheduleDateId, selectedTimeId);

      fetch("http://localhost:3000/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Mengikuti struktur model/database (menggunakan _ bukan camelCase)
        body: JSON.stringify({
          user_id: user_id,
          dentist_id: selectedDentistId,
          schedule_date_id: scheduleDateId,
          schedule_time_id: selectedTimeId,
        }),
      })
        .then((response) => {
          if (response.ok) {
            alert("Appointment booked!");
            window.location.href = "/index.html";
          } else {
            alert("Book appointment failed!");
          }
        })
        .catch((error) => {
          alert(`Terdapat error: ${error.message}`);
        });
    });
  } else {
    window.location.href = "/login.html";
  }
}

// Login
if (currentPage === "/login.html") {
  const loginForm = document.querySelector("#loginForm");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const loginEmail = document.querySelector("#form-email").value;
    const loginPassword = document.querySelector("#form-password").value;

    fetch(
      `http://localhost:3000/users/login?user_email=${loginEmail}&user_password=${loginPassword}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Wrong Email/Password");
          throw new Error("Authentication failed");
        }
      })
      .then((data) => {
        if (data.user_id) {
          const user_id = data.user_id;
          sessionStorage.setItem("user_id", user_id);
          window.location.href = "/index.html";

          console.log("Logged in user id:", user_id);
        } else {
          console.error("Error fetching times:", error);
        }
      });
  });
}

// Register
if (currentPage === "/register.html") {
  const registrationForm = document.querySelector("#registrationForm");

  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#form-username").value;
    const email = document.querySelector("#form-email").value;
    const password = document.querySelector("#form-password").value;
    // const passwordSafety = document.querySelector("#email");
    // passwordSafety.onkeyup = () => {
    //   if (password.value) {
    //   } else {
    //   }
    // };

    fetch(`http://localhost:3000/users/email?user_email=${email}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        if (data) {
          alert("Email has already been used!");
        } else {
          if (password.length < 5) {
            alert("Minimum password length is 8 characters");
          } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
            alert("Please use a combination of uppercase and lowercase");
          } else {
            fetch("http://localhost:3000/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              // Mengikuti struktur model/database (menggunakan _ bukan camelCase)
              body: JSON.stringify({
                user_username: username,
                user_email: email,
                user_password: password,
              }),
            })
              .then((response) => {
                if (response.ok) {
                  alert("Registrasi berhasil");
                  window.location.href = "/login.html";
                } else {
                  alert("Registrasi gagal");
                }
              })
              .catch((error) => {
                alert(`Terdapat error: ${error.message}`);
              });
          }
        }
      });
  });
}
