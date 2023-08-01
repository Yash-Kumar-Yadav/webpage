const firebaseConfig = {
    apiKey: "AIzaSyBh0KPZuVSS9LWnBtuEJzcN6bo6mizlQds",
    authDomain: "database1-da963.firebaseapp.com",
    databaseURL: "https://database1-da963-default-rtdb.firebaseio.com",
    projectId: "database1-da963",
    storageBucket: "database1-da963.appspot.com",
    messagingSenderId: "709021638907",
    appId: "1:709021638907:web:7e0126721041cd4de5105e",
    measurementId: "G-L1HBEH2LPH"
  };


firebase.initializeApp(firebaseConfig);


var contactFormDB = firebase.database().ref("database1");

document.getElementById("database1").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);


  document.querySelector(".alert").style.display = "block";


  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);


  document.getElementById("database1").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};