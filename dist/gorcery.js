document.addEventListener("DOMContentLoaded", function () {
  // Select elements
  const menu = document.getElementById("menu");
  const cancel = document.getElementById("cancel");
  const menubar = document.getElementById("menubar");

  // Check if elements are selected correctly

  // Ensure elements exist before adding event listeners
  if (menu && menubar) {
    // Event listener for menu button to show the menubar
    menu.addEventListener("click", () => {
      menubar.classList.remove("hidden", "translate-x-52");
      menubar.classList.add("block", "translate-x-0");
      document.querySelector("#span").classList.add("hidden");
    });
  }

  if (cancel && menubar) {
    cancel.addEventListener("click", () => {
      menubar.classList.remove("block", "translate-x-0");
      menubar.classList.add("hidden", "translate-x-52");
      // Add hidden class after the transition ends
      menubar.addEventListener(
        "transitionend",
        () => {
          menubar.classList.add("hidden");
        },
        { once: true }
      );
      document.querySelector("#span").classList.remove("hidden");
    });
  }
});

// signup form and login form visibility
const closeButtons = document.querySelectorAll("#close");
const login = document.querySelector("#login");
const signup = document.querySelector("#signup");
const loginButton = document.querySelector("#login_button");
const signupButton = document.querySelector("#signup_button");

function checkVisibilityAndDisableButtons() {
  if (signup.classList.contains("block")) {
    loginButton.disabled = true;
  } else {
    loginButton.disabled = false;
  }

  if (login.classList.contains("block")) {
    signupButton.disabled = true;
  } else {
    signupButton.disabled = false;
  }
}

signupButton.addEventListener("click", () => {
  signup.classList.add("block");
  signup.classList.remove("hidden");
  checkVisibilityAndDisableButtons();
});

loginButton.addEventListener("click", () => {
  login.classList.add("block");
  login.classList.remove("hidden");
  checkVisibilityAndDisableButtons();
});

closeButtons.forEach((cose) => {
  cose.addEventListener("click", () => {
    signup.classList.add("hidden");
    login.classList.add("hidden");
    signup.classList.remove("block");
    login.classList.remove("block");
    checkVisibilityAndDisableButtons();
  });
});

// profile page and verification check
const profile = document.querySelector("#profile");
const profileButton = document.querySelector("#profile_button");
const profileContainer = document.querySelector("#profile_container");
const userEmail = document.querySelector("#email");
const verificationStatus = document.querySelector("#verify");
const container = document.querySelector("#container");
const container_1 = document.querySelector("#container1");
const profile_container = document.querySelector("#profile_container");

profile.addEventListener("click", () => {
  profileContainer.classList.add("block");
  profileContainer.classList.remove("hidden");
});
profileButton.addEventListener("click", () => {
  profileContainer.classList.remove("block");
  profileContainer.classList.add("hidden");
});

const checkVerification = () => {
  if (verificationStatus.innerHTML === "Verified") {
    verificationStatus.classList.remove("text-red-600");
    verificationStatus.classList.add("text-lime-500");
  } else {
    verificationStatus.classList.remove("text-lime-500");
    verificationStatus.classList.add("text-red-600");
  }
};

const setupUI = (user) => {
  //togge ui
  if (user) {
    //account info

    userEmail.innerHTML = `${user.email}`;
    verificationStatus.innerHTML = user.emailVerified
      ? "Verified"
      : "Not Verified";

    checkVerification();

    container.classList.add("block");
    container.classList.remove("hidden");
    container_1.classList.add("hidden");
    container_1.classList.remove("block");
  } else {
    profile_container.innerHTML = "";
    container.classList.add("hidden");
    container_1.classList.add("block");
    container.classList.remove("block");
    container_1.classList.remove("hidden");
  }
};
