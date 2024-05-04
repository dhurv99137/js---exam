import navbar from "../Components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const getData = () => {
    fetch("http://localhost:3000/result")
        .then((res) => {
            return res.json();
        })
        .then((Feedback_data) => {
            Customers_Feedback_ui(Feedback_data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
};

const Customers_Feedback_ui = (Feedback_data) => {
    const cartPage = document.querySelector(".cart-page");
    cartPage.innerHTML = "";

    Feedback_data.forEach((ele) => {
        let name = document.createElement("td");
        name.textContent = ele.Name;

        let Marth = document.createElement("td");
        Marth.textContent = ele.Marth;

        let science = document.createElement("td");
        science.textContent = ele.science;

        let english = document.createElement("td");
        english.textContent = ele.english;

        let totalMarks = +ele.Marth + +ele.science + +ele.english;


        let Score = document.createElement("td");
        Score.textContent = totalMarks;

        let td1 = document.createElement("td")
        let btt = document.createElement("button");
        btt.textContent = "Delete";
        btt.addEventListener("click", () => {
            deleteRow(ele.id);
        });
        td1.append(btt)

        let tr = document.createElement("tr");
        tr.append(name, Marth, science, english, Score, td1);
        cartPage.append(tr);
    });
};

const deleteRow = (id) => {
    fetch(`http://localhost:3000/result/${id}`, {
        method: "DELETE"
    })
        .then((res) => {
            return res.json();
        })
        .then(() => {
            getData();
        })
        .catch((error) => {
            console.error("Error deleting row:", error);
        });
};

getData();
