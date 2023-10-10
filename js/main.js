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

// Navbar check if user logged in
// Mendapatkan nilai cookie 'user_id'
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const userUsername = getCookie("user_username");

const navbarProfile = document.querySelector(".navbar-login");
if (userUsername) {
  navbarProfile.innerHTML = `<a href="profile-page.html" class="login">${userUsername}</a>`;
} else {
  navbarProfile.innerHTML = `<a href="login.html" class="login">Login</a>`;
}

// For specific pages
const currentPage = window.location.pathname;

if (
  currentPage === "/FE-Semarang-30/" ||
  currentPage === "/FE-Semarang-30/index.html" ||
  currentPage === "/FE-Semarang-30/about.html"
) {
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
}

if (currentPage === "/FE-Semarang-30/plan-your-visit.html") {
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
}

//list doctor

if (currentPage === "/FE-Semarang-30/list-doctor.html") {
  const doctorData = [
    {
      name: "drg. Wisis Arif Setiawan K D, Sp.KGA (Pedodonti/Gigi Anak)",
      schedule: [
        "Senin - Rabu : 09.00 - 14.00",
        "Kamis - Jumat : 15.00 - 19.00",
      ],
    },
    {
      name: "drg. Zahra Maysani",
      schedule: [
        "Senin - Rabu : 09.00 - 14.00",
        "Kamis - Jumat : 15.00 - 19.00",
      ],
    },
    {
      name: "drg. Erna Listiana Dewi, MPH",
      schedule: [
        "Senin - Rabu : 09.00 - 14.00",
        "Kamis - Jumat : 15.00 - 19.00",
      ],
    },
    {
      name: "drg. Rafaell Victor Christian, Sp.KG",
      schedule: [
        "Senin - Rabu : 15.00 - 19.00",
        "Kamis - Jumat : 09.00 - 14.00",
      ],
    },
    {
      name: "drg. Andhika Hanif Prasetyo K Sp.KGA",
      schedule: [
        "Senin - Rabu : 15.00 - 19.00",
        "Kamis - Jumat : 09.00 - 14.00",
      ],
    },
    {
      name: "drg. Anggita Prameswari K Sp.KGA",
      schedule: [
        "Senin - Rabu : 15.00 - 19.00",
        "Kamis - Jumat : 09.00 - 14.00",
      ],
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
}

// Profile
if (currentPage === "/FE-Semarang-30/profile-page.html") {
  // Mendapatkan nilai cookie 'user_id'
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  // Menggunakan fungsi getCookie untuk mendapatkan nilai 'user_id'
  const user_id = getCookie("user_id");
  if (user_id) {
    const getHiUsername = document.querySelector("#hiUsername");
    const getUsername = document.querySelector("#username");
    const getEmail = document.querySelector("#email");

    const getDentist = document.querySelector("#dentist");
    const getDate = document.querySelector("#date");
    const getTime = document.querySelector("#time");

    fetch(
      `https://be-semarang-30-production.up.railway.app/users?user_id=${user_id}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        if (data) {
          getHiUsername.textContent = `Hi, ${data.user_username}`;
          getUsername.textContent = `${data.user_username}`;
          getEmail.textContent = `${data.user_email}`;
        } else {
          window.location.href = "/FE-Semarang-30/login.html";
        }
      });

    fetch(
      `https://be-semarang-30-production.up.railway.app/appointments/find?user_id=${user_id}`
    )
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
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Mendapatkan tombol logout berdasarkan ID atau class
    const logoutButton = document.getElementById("logoutButton"); // Ganti 'logoutButton' dengan ID atau class yang sesuai

    // Menambahkan event listener ke tombol logout
    logoutButton.addEventListener("click", function () {
      // Menghapus semua cookie
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie =
          name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      }

      // Mengarahkan pengguna kembali ke halaman login
      window.location.href = "/FE-Semarang-30/login.html"; // Ganti '/login.html' dengan URL halaman login Anda
    });
  } else {
    window.location.href = "/FE-Semarang-30/login.html";
  }
}

// Booking Form
if (currentPage === "/FE-Semarang-30/booking-form.html") {
  // Mendapatkan nilai cookie 'user_id'
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  // Menggunakan fungsi getCookie untuk mendapatkan nilai 'user_id'
  const user_id = getCookie("user_id");
  if (user_id) {
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
    fetch("https://be-semarang-30-production.up.railway.app/dentists")
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
    fetch("https://be-semarang-30-production.up.railway.app/schedule_dates")
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
      fetch(
        `https://be-semarang-30-production.up.railway.app/schedule_times/dentist_schedules?dentist_id=${dentist_id}&dentist_schedule_day=${dentist_schedule_day}`
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
      fetchTime(selectedDentist, selectedDay);
    });

    // Listen date change
    selectDate.addEventListener("change", () => {
      const selectedDentist = selectDentist.value;
      const [scheduleDateId, scheduleDateDate] = selectDate.value.split("|");
      let selectedDate = new Date(scheduleDateDate);
      let date = selectedDate.getDay();

      const selectedDay = dayNames[date];
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

      if (
        selectedDentistId === "" ||
        scheduleDateId === "" ||
        selectedTimeId === ""
      ) {
        alert("Please choose dentist, date, and time!");
      } else {
        fetch("https://be-semarang-30-production.up.railway.app/appointments", {
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
              window.location.href = "/FE-Semarang-30/index.html";
            } else {
              alert("Book appointment failed!");
            }
          })
          .catch((error) => {
            alert(`Terdapat error: ${error.message}`);
          });
      }
    });
  } else {
    window.location.href = "/FE-Semarang-30/login.html";
  }
}

// Login
if (currentPage === "/FE-Semarang-30/login.html") {
  const loginForm = document.querySelector("#loginForm");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const loginEmail = document.querySelector("#form-email").value;
    const loginPassword = document.querySelector("#form-password").value;

    fetch(
      `https://be-semarang-30-production.up.railway.app/users/login?user_email=${loginEmail}&user_password=${loginPassword}`
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
        if (data.user_id && data.user_username) {
          const user_id = data.user_id;
          const user_username = data.user_username;

          // Mengatur cookie untuk user_id
          document.cookie = `user_id=${user_id}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;

          // Mengatur cookie untuk user_username
          document.cookie = `user_username=${user_username}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`;

          window.location.href = "/FE-Semarang-30/index.html";
        } else {
          console.error("Error:", error);
        }
      });
  });
}

// Register
if (currentPage === "/FE-Semarang-30/register.html") {
  const registrationForm = document.querySelector("#registrationForm");

  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#form-username").value;
    const email = document.querySelector("#form-email").value;
    const password = document.querySelector("#form-password").value;

    fetch(
      `https://be-semarang-30-production.up.railway.app/users/email?user_email=${email}`
    )
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
            alert("Minimum password length is 5 characters");
          } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
            alert("Please use a combination of uppercase and lowercase");
          } else {
            fetch("https://be-semarang-30-production.up.railway.app/users", {
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
                  window.location.href = "/FE-Semarang-30/login.html";
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
