const form = document.getElementById("form")
const data = document.getElementById("data")
const liste = localStorage.getItem("liste")? JSON.parse(localStorage.getItem("liste")) : [] 

liste.forEach(personne=>{
    afficher(personne)
})

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const personne = {
        nom     : document.getElementById("nom").value,
        prenom  : document.getElementById("prenom").value,
        email   : document.getElementById("email").value,
        date    : new Date(document.getElementById("date_naissance").value).toLocaleDateString("fr-FR")
    }
    
    ajouter(personne)
    afficher(personne)

})

function afficher(personne){
    const tr = document.createElement("tr")
    let td = document.createElement("td")

    td.innerText = personne.nom
    tr.appendChild(td)

    td = document.createElement("td")
    td.innerText = personne.prenom
    tr.appendChild(td)

    td = document.createElement("td")
    td.innerText = personne.email
    tr.appendChild(td)

    td = document.createElement("td")
    td.innerText = personne.date
    tr.appendChild(td)

    data.appendChild(tr)
}

function ajouter(personne){
    liste.push(personne)
    localStorage.setItem("liste", JSON.stringify(liste))
    form.reset()
    alert("Personne ajoutée avec succés")
}