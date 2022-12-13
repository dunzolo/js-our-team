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
let container = document.querySelector('.container');

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for(let i = 0; i < teams.length; i++){
    let member = teams[i];

    let name_card = document.getElementById(`name-${i+1}`);
    name_card.innerText = member.name;

    let role_card = document.getElementById(`role-${i+1}`);
    role_card.innerText = member.role;

    let image_card = document.getElementById(`image-${i+1}`);
    image_card.src = "../img/"+member.image;

}

