const tabs = document.querySelectorAll(".tab");
const signup = document.getElementById("signup");
const login = document.getElementById("login");
const reset = document.getElementById("reset");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        if (index === 0) {
            signup.classList.remove("hidden");
            signup.classList.add("flex");

            login.classList.add("hidden");
            login.classList.remove("flex");

            reset.classList.add("hidden");
            reset.classList.remove("flex");

        } else {
            login.classList.remove("hidden");
            login.classList.add("flex");

            signup.classList.add("hidden");
            signup.classList.remove("flex");

            reset.classList.add("hidden");
            reset.classList.remove("flex");
        }
    });
});



// Signup function
const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const Name = document.getElementById("name").value.trim();
    const Email = document.getElementById("signup-mail").value.trim();
    const Password = document.getElementById("signup-pass").value.trim();
    const Phone = document.getElementById("phone").value.trim();


    if (!Name || !Email || !Password || !Phone) {
        alert("Give all required data");
        return;
    }

    try {

        const response = await fetch("http://localhost:1111/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Name, Email, Password, Phone })
        });

        const data = await response.json();

        alert(data.Message);

    } catch (error) {
        console.log(error);
        alert("Server Error");
    }
});

//ResetPassword

const resetBtn = document.getElementById("resetBtn")

resetBtn.addEventListener("click", () => {
    login.classList.add("hidden")
    reset.classList.remove("hidden")
    reset.classList.add("flex")
})

const backToLogin = document.getElementById("back-login")

backToLogin.addEventListener("click", () => {
    login.classList.remove("hidden");
    login.classList.add("flex");

    reset.classList.add("hidden");
    reset.classList.remove("flex");
})

const logout = document.getElementById("logout")
const mainNav = document.getElementById("mainNav")
const dashNav = document.getElementById("dashNav")
const forms = document.getElementById("container")
const dashboard = document.getElementById("dashboard")
const loginBtb = document.getElementById("loginBtn")

logout.addEventListener("click", () => {
    dashboard.classList.remove("flex")
    dashboard.classList.add("hidden")

    forms.classList.remove("hidden")
    forms.classList.add("flex")

    dashNav.classList.remove("flex")
    dashNav.classList.add("hidden")

    mainNav.classList.remove("hidden")
    mainNav.classList.add("flex")
})


loginBtn.addEventListener("click", () => {
    dashboard.classList.add("flex")
    dashboard.classList.remove("hidden")

    forms.classList.add("hidden")
    forms.classList.remove("flex")

    dashNav.classList.add("flex")
    dashNav.classList.remove("hidden")

    mainNav.classList.add("hidden")
    mainNav.classList.remove("flex")
})


