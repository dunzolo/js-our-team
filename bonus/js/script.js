//creo l'array di oggetti rappresentante i membri del team
let teams = [
    {
        name: "Wayne Barnet",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopex",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
]

// Stampare le stesse informazioni su DOM sottoforma di stringhe
let container = document.getElementById('container');

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for(let i = 0; i < teams.length; i++){
    let member = teams[i];

    console.log(`Nome: ${member.name} - Ruolo: ${member.role} - Immagine: ${member.image}`);

    let box = document.createElement('div');

    box.innerText = `Nome: ${member.name} - Ruolo: ${member.role} - Immagine: ${member.image}`;

    container.appendChild(box);
}

