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
            alert("Password harus mengandung setidaknya satu huruf besar (uppercase).");
            return;
        }

        // Validasi penggunaan huruf kecil (lowercase) dalam password
        if (!/[a-z]/.test(password)) {
            alert("Password harus mengandung setidaknya satu huruf kecil (lowercase).");
            return;
        }

        // Lakukan pendaftaran pengguna atau kirim data ke server sesuai logika aplikasi Anda
        alert("Registrasi berhasil!");
    });
});
