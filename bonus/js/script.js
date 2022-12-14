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

let row_cards = document.getElementById('row-card');

for(let i = 0; i < teams.length; i++){
    let member = teams[i];

    let col = document.createElement('div');

    col.classList.add('col-4', 'p-3');

    // let image_card = document.createElement('img');

    // image_card.src = "../img/"+member.image;

    // let card_body = document.createElement('div');

    // card_body.classList.add('card-body', 'bg-white', 'p-2');

    // let name_card = document.createElement('p');

    // name_card.innerText = member.name;

    // let role_card = document.createElement('p');

    // role_card.classList.add('font-size-12');

    // role_card.innerText = member.role;

    row_cards.append(col);
    // col.append(image_card);
    // col.append(card_body);
    // card_body.append(name_card);
    // card_body.append(role_card);

    col.innerHTML = `
        <img src="./img/${member.image}"/>
        <div class="card-body bg-white p-2">
            <h4>${member.name}</h4>
            <p>${member.role}</p>
        </div>
    `
}

