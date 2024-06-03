import { initializeApp } from 'firebase/app';

import{
    getAuth,
    createUserWithEmailAndPassword,
    signOut,signInWithEmailAndPassword,
    onAuthStateChanged, sendEmailVerification,
} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB_hJDCwPnTfmAOSKHn2_7FObuhhQldzXA",
    authDomain: "grocify-30596.firebaseapp.com",
    projectId: "grocify-30596",
    storageBucket: "grocify-30596.appspot.com",
    messagingSenderId: "1016309802431",
    appId: "1:1016309802431:web:9dd8de3af1380f51d72d0a",
    measurementId: "G-NV18CKD9Z4"
};

initializeApp(firebaseConfig);


const auth = getAuth()



 
onAuthStateChanged(auth, (user) => {
    if (user) {
      setupUI(user)
      const uid = user.uid;
      checkEmailVerification()
      // ...
    } else {
      setupUI()
    }
  });
const signupLoader = document.querySelector('#signup-loader');
const loginLoader = document.querySelector('#login-loader');

 // Show loader
const showLoader = (loader) => {
    loader.style.visibility = 'visible';
};

// Hide loader
const hideLoader = (loader) => {
    loader.style.visibility = 'hidden';
};

const checkEmailVerification = () => {
    auth.currentUser.reload().then(() => {
      setupUI(auth.currentUser);
    }).catch((error) => {
      console.error("Error reloading user: ", error);
    });
};

const signupForm = document.querySelector('#signup');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showLoader(signupLoader);

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        return sendEmailVerification(auth.currentUser); // Send email verification
    })
    .then(() => {
        alert("Email verification link sent!");
        hideLoader(signupLoader);
        signupForm.reset();
        
    })
    .catch((error) => {
        console.error("Error signing up: ", error);
        hideLoader(signupLoader);
    });
});

const loginForm = document.querySelector('#login');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showLoader(loginLoader);

    const email = loginForm['login-email'].value; 
    const password = loginForm['login-password'].value;
    signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        hideLoader(loginLoader);
        loginForm.reset()
    })

  

})


const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) => {
    e.preventDefault();
    signOut(auth)
   

})