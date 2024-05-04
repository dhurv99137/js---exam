import navbar from "../Components/navbar.js";

document.getElementById("navbar").innerHTML=navbar()





const  isUserExists = (user) => {
    try {
      fetch("http://localhost:3000/result", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
      });
      getData()
    } catch (error) {
     console.log(error,message);
    }
 }



const handleData = (e) => {
    e.preventDefault();
    let user = {
        Name: document.getElementById("StudentName").value,
        Marth: document.getElementById("Marth").value,
        science: document.getElementById("science").value,
        english: document.getElementById("english").value
    };
    isUserExists(user);
};

document.getElementById("userData").addEventListener("submit", handleData);