let xhr = new XMLHttpRequest()

xhr.onload = function() {
    if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        document.getElementById("quote").innerHTML =
        `<p>${response.quote}</p>
        <img alt="no images" src="${response.photo}"></img>
        <p> ${response.author}</p>
        <p> ${response.id} </p>`
    } else if (this.readyState === 4 && this.status === 404) {
        alert("Erreur 404 :/");
    }
};

document.getElementById("button").addEventListener("click", () => {
    window.location.reload()
    })

xhr.open("GET", "https://thatsthespir.it/api", true);
xhr.send();
xhr.onload();