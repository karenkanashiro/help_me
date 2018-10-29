var contactList = ['Karen','Lari','Ninna','Trio','Bauru'];

/*contactList[0] //Karen
contactList[1] //Lari
contactList[2] //Ninna
contactList[3] //Trio
contactList[4] //Bauru
*/
console.log(contactList);

/*var myObj = {
    nome: 'Larissa',
    idade: 19;
    curso: 'IBM',
    habilidades: [
        'varias medalhas',
        '10 nas provas',
        '5 ICs',
        'rainha da zoeira'
    ]
}*/

var contactList = [
    {
        name: 'Lari Mulan',
        photo: 'images/mulan.jpg',
        bio: 'Consegui outra IC',
        lastSeen: 'Just now'
    },
    {
        name: 'Ninna Fapesp',
        photo: 'https://mestrado.club/wp-content/uploads/2017/06/img_5953be127f1ff.png',
        bio: 'Nem comecei a estudar',
        lastSeen: 'Today'
    },
    {
        name: 'Nati',
        photo: 'http://fluxoconsultoria.poli.ufrj.br/wp-content/uploads/2015/10/reuni%C3%A3o_editada-e1458487719441.jpg',
        bio: 'reunicao hoje?',
        lastSeen: '2 days ago'
    },
    {
        name: 'Bea sem coração',
        photo: 'images/1.jpg',
        bio: 'ei, mocinha',
        lastSeen: 'Just now'
    },
    {
        name: 'Biscoito',
        photo: 'images/2.jpg',
        bio: 'Caraca',
        lastSeen: '1 hours ago'
    },
    {
        name: 'Camila',
        photo: 'images/mulan.jpg',
        bio: 'Consegui outra IC',
        lastSeen: 'Today'
    },
    {
        name: 'Karina',
        photo: 'http://br.web.img3.acsta.net/c_300_300/pictures/18/07/27/13/53/2854483.jpg',
        bio: 'Oxe',
        lastSeen: 'last week'
    },
];

var section = document.getElementById('contact-list'); //como se fosse a tag body, atraves dele tem acesso a todas as coisas

var len = contactList.length;

for (var i=0;i < len;i++){
    var person = contactList[i];
    //console.log(contactList[i]);
    section.innerHTML += `<div class="box-avatar">
                    <div class="box-image">
                        <img src="${person.photo}"/>
                    </div>
                    <div class="name-status">
                        <h4 class="name"> ${person.name} </h4>
                        <span class="bio">${person.bio}</span>
                        <small class="status"> ${person.lastSeen} </small>
                    </div>
                </div>`;
}

/*let myVar = '';
const myVar = '';*/
