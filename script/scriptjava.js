let xmlhttp = new XMLHttpRequest();

function fetchData() {
    let xmlDoc = xmlhttp.responseXML;
    let table = "<tr><th>Nom</th><th>Prenom</th><th>DateDeNaissance</th><th>Sexe</th><th>Pseudo</th><th>Email</th><th>MotDePasse</th></tr>";
    let x = xmlDoc.getElementsByTagName("USER");
    for (let i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("NOM")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("PRENOM")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("DATENAISSANCE")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("SEXE")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("PSEUDO")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("EMAIL")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("MOTDEPASSE")[0].childNodes[0].nodeValue +
            "</td>" +
            "<td><button type=\"button\" onclick=\"editUser(" +
            x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue + ")\">" +
            "Edit</button></td>" +
            "<td><button type=\"button\" onclick=\"deleteUser(" +
            x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue + ")\">" +
            "Delete</button></td>" +
            "</tr>";

    }
    document.getElementById("data").innerHTML = table;
}

function editUser(id) {
    let tblusers = document.getElementById("tblUser");
    let nom = document.getElementById("n");
    let prenom = document.getElementById("p");
    let dateDeNaissance = document.getElementById("D");
    let sexe = document.getElementById("s");
    let pseudo = document.getElementById("Pseudo1");
    let email = document.getElementById("ema");
    let motDePasse = document.getElementById("ps");
    let hId = document.getElementById("hId");
    let btnAdd = document.getElementById("btnAdd");
    let btnUpdate = document.getElementById("btnUpdate");
    btnUpdate.style.display = "";
    btnAdd.style.display = "none";


    let xmlDoc = xmlhttp.responseXML;
    let users = xmlDoc.getElementsByTagName("USER");
    let user;

    for (let i = 0; i < users.length; i++) {
        if (users[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue == id) {
            user = users[i];
        }
    }

    tblusers.style.display = "block";
    hId.value = user.getElementsByTagName("ID")[0].childNodes[0].nodeValue;
    nom.value = user.getElementsByTagName("NOM")[0].childNodes[0].nodeValue;
    prenom.value = user.getElementsByTagName("PRENOM")[0].childNodes[0].nodeValue;
    dateDeNaissance.value = user.getElementsByTagName("DATENAISSANCE")[0].childNodes[0].nodeValue;
    sexe.value = user.getElementsByTagName("SEXE")[0].childNodes[0].nodeValue;
    pseudo.value = user.getElementsByTagName("PSEUDO")[0].childNodes[0].nodeValue;
    email.value = user.getElementsByTagName("EMAIL")[0].childNodes[0].nodeValue;
    motDePasse.value = user.getElementsByTagName("MOTDEPASSE")[0].childNodes[0].nodeValue;
}

function updateUser() {
    let xmlDoc = xmlhttp.responseXML;
    let id = document.getElementById("hId").value;
    let users = xmlDoc.getElementsByTagName("USER");
    let user;

    for (let i = 0; i < users.length; i++) {
        if (users[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue == id) {
            user = users[i];
        }
    }

    let nom = document.getElementById("n");
    let prenom = document.getElementById("p");
    let dateDeNaissance = document.getElementById("D");
    let sexe = document.getElementById("s");
    let pseudo = document.getElementById("Pseudo1");
    let email = document.getElementById("ema");
    let motDePasse = document.getElementById("ps");

    user.getElementsByTagName("NOM")[0].childNodes[0].nodeValue = nom.value;
    user.getElementsByTagName("PRENOM")[0].childNodes[0].nodeValue = prenom.value;
    user.getElementsByTagName("DATENAISSANCE")[0].childNodes[0].nodeValue = dateDeNaissance.value;
    user.getElementsByTagName("SEXE")[0].childNodes[0].nodeValue = sexe.value;
    user.getElementsByTagName("PSEUDO")[0].childNodes[0].nodeValue = pseudo.value;
    user.getElementsByTagName("EMAIL")[0].childNodes[0].nodeValue = email.value;
    user.getElementsByTagName("MOTDEPASSE")[0].childNodes[0].nodeValue = motDePasse.value;


    fetchData();
}

function deleteUser(id) {
    let xmlDoc = xmlhttp.responseXML;
    let users = xmlDoc.getElementsByTagName("USER");
    let user;

    for (let i = 0; i < users.length; i++) {
        if (users[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue == id) {
            user = users[i];
        }
    }

    xmlDoc.documentElement.removeChild(user);
    fetchData();
}

function makeTextFile(text) {
    let textFile = null;
    let data = new Blob([text], {type: 'text/plain'});

    if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
};

function saveUser() {

    let link = document.createElement('a');
    link.setAttribute('download', '../data/dwc_base.xml');

    const s = new XMLSerializer();

    link.href = makeTextFile(s.serializeToString(xmlhttp.responseXML));
    document.body.appendChild(link);

    window.requestAnimationFrame(function () {
        let event = new MouseEvent('click');
        link.dispatchEvent(event);
        document.body.removeChild(link);
    });
}

function addUser() {
    let tblUser = document.getElementById("tblUser");
    let btnUpdate = document.getElementById("btnUpdate");
    let btnAdd = document.getElementById("btnAdd");

    tblUser.style.display = "block";
    btnUpdate.style.display = "none";
    btnAdd.style.display = "";
    clearInputForm();
}

function clearInputForm() {
    let nom = document.getElementById("n");
    let prenom = document.getElementById("p");
    let dateDeNaissance = document.getElementById("D");
    let sexe = document.getElementById("s");
    let pseudo = document.getElementById("Pseudo1");
    let email = document.getElementById("ema");
    let motDePasse = document.getElementById("ps");
    let hId = document.getElementById("hId");

    nom.value = "";
    prenom.value = "";
    dateDeNaissance.value = "";
    sexe.value = "";
    pseudo.value = "";
    email.value = "";
    motDePasse.value = "";
    hId.value = "";
}

function submitUser() {
    let nom = document.getElementById("n");
    let prenom = document.getElementById("p");
    let dateDeNaissance = document.getElementById("D");
    let sexe = document.getElementById("s");
    let pseudo = document.getElementById("Pseudo1");
    let email = document.getElementById("ema");
    let motDePasse = document.getElementById("ps");

    if (nom.value !== undefined && prenom.value !== undefined && dateDeNaissance.value !== undefined && sexe.value !== undefined && pseudo.value !== undefined && email.value !== undefined && motDePasse.value !== undefined) {
        let xmlDoc = xmlhttp.responseXML;
        let users = xmlDoc.getElementsByTagName("USER");
        let id = 1;

        if (users.length !== 0) {
            id += Number(users[users.length - 1].getElementsByTagName('ID')[0].childNodes[0].nodeValue);
        }


        let userNode = xmlDoc.createElement("USER");
        let nomNode = xmlDoc.createElement("NOM");
        let prenomNode = xmlDoc.createElement("PRENOM");
        let dateDeNaissanceNode = xmlDoc.createElement("DATEDENAISSANCE");
        let sexeNode = xmlDoc.createElement("SEXE");
        let pseudoNode = xmlDoc.createElement("PSEUDO");
        let emailNode = xmlDoc.createElement("EMAIL");
        let motDePasseNode = xmlDoc.createElement("MOTDEPASSE");
        let idNode = xmlDoc.createElement("ID");

        let nodeNom =  document.createTextNode(nom.value)
        nomNode.appendChild(nodeNom);

        let nodePrenom = document.createTextNode(prenom.value)
        prenomNode.appendChild(nodePrenom);

        let nodeDateDeNaissance = document.createTextNode(dateDeNaissance.value)
        dateDeNaissanceNode.appendChild(nodeDateDeNaissance);

        let nodeSexe = document.createTextNode(sexe.value)
        sexeNode.appendChild(nodeSexe);

        let nodePseudo = document.createTextNode(pseudo.value)
        pseudoNode.appendChild(nodePseudo);

        let nodeEmail = document.createTextNode(email.value)
        emailNode.appendChild(nodeEmail);

        let nodeMotDePasse = document.createTextNode(motDePasse.value)
        motDePasseNode.appendChild(nodeMotDePasse);

        let nodeId = document.createTextNode(id.toString())
        idNode.appendChild(nodeId);

        userNode.append(idNode);
        userNode.append(nomNode);
        userNode.append(prenomNode);
        userNode.append(dateDeNaissanceNode);
        userNode.append(sexeNode);
        userNode.append(pseudoNode);
        userNode.append(emailNode);
        userNode.append(motDePasseNode);
        xmlDoc.documentElement.append(userNode);

        clearInputForm();
        fetchData();
    }


}

function loadXMLDoc() {
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            fetchData();
        }
    };
    xmlhttp.open("GET", "../data/base.xml", true);
    xmlhttp.send();
}