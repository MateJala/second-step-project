document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  const showRegister = document.getElementById("showRegister");
  const showLogin = document.getElementById("showLogin");
  const showRegisterNav = document.getElementById("showRegisterNav");


  if (!loginForm || !registerForm) return;


  const activateRegister = () => {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
  };

  const activateLogin = () => {
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
  };

  if (showRegister) showRegister.addEventListener("click", activateRegister);
  if (showLogin) showLogin.addEventListener("click", activateLogin);

  if (showRegisterNav) {
    showRegisterNav.addEventListener("click", (e) => {
      e.preventDefault();
      activateRegister();
      document.querySelector(".auth-container")?.scrollIntoView({ behavior: "smooth" });
    });
  }


  const showLoading = () => {
    if (Swal.isVisible()) Swal.close();
    Swal.fire({
      title: "Processing...",
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => Swal.showLoading(),
    });
  };

  const showError = (message) => {
    if (Swal.isVisible()) Swal.close();
    return Swal.fire({
      icon: "error",
      title: "Error",
      text: message || "Something went wrong",
      confirmButtonText: "OK",
    });
  };

  const showSuccess = (message) => {
    if (Swal.isVisible()) Swal.close();
    return Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
      confirmButtonText: "OK",
    });
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const AUTH_BASE = "https://api.everrest.educata.dev/auth";

  async function apiRequest(path, method, body) {
    const res = await fetch(`${AUTH_BASE}${path}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    });

    const text = await res.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch { data = { message: text }; }

    if (!res.ok) {
      const msg = data?.message || data?.error || `Request failed (${res.status})`;
      throw new Error(msg);
    }
    return data;
  }

  async function sendVerificationEmail(email) {

    return apiRequest("/verify_email", "POST", { email });
  }

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail")?.value.trim();
    const password = document.getElementById("loginPassword")?.value;

    if (!email || !password) return showError("Please fill in all fields");
    if (!isValidEmail(email)) return showError("Invalid email");

    showLoading();

    try {
      const tokens = await apiRequest("/sign_in", "POST", { email, password });

      if (tokens?.access_token) localStorage.setItem("access_token", tokens.access_token);
      if (tokens?.refresh_token) localStorage.setItem("refresh_token", tokens.refresh_token);

      await showSuccess("Login successful!");
      window.location.href = "profile.html";
    } catch (err) {
      await showError(err.message);
    }
  });

  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstName = document.getElementById("regFirstName")?.value.trim();
    const lastName = document.getElementById("regLastName")?.value.trim();
    const age = Number(document.getElementById("regAge")?.value);
    const email = document.getElementById("regEmail")?.value.trim();
    const password = document.getElementById("regPassword")?.value;
    const confirmPassword = document.getElementById("confirmPassword")?.value;

    const countryCode = document.getElementById("countryCode")?.value || "+995";
    const phoneLocal = document.getElementById("regPhone")?.value.trim();
    const phone = `${countryCode}${phoneLocal}`.replace(/\s+/g, "");

    const address = document.getElementById("regAddress")?.value.trim();
    const zipcode = document.getElementById("regZipcode")?.value.trim();
    const gender = document.getElementById("regGender")?.value || "OTHER";
    const avatarInput = document.getElementById("regAvatar")?.value.trim();

    if (!firstName || !lastName || !email || !password || !address || !zipcode || !phoneLocal)
      return showError("Please fill in all required fields");

    if (!Number.isFinite(age) || age <= 0) return showError("Please enter a valid age");
    if (!isValidEmail(email)) return showError("Invalid email");
    if (password !== confirmPassword) return showError("Passwords do not match");

    const seed = encodeURIComponent(`${firstName}-${lastName}-${email}`);
    const avatar = avatarInput || `https://api.dicebear.com/7.x/pixel-art/svg?seed=${seed}`;

    showLoading();

    try {
      await apiRequest("/sign_up", "POST", {
        firstName,
        lastName,
        age,
        email,
        password,
        address,
        phone,
        zipcode,
        avatar,
        gender,
      });


      await sendVerificationEmail(email);

      await showSuccess("Registered! Verification email sent. Please check inbox/spam.");
      activateLogin();
      document.getElementById("loginEmail").value = email;
      document.getElementById("loginPassword").value = "";
    } catch (err) {
      await showError(err.message);
    }
  });
});
