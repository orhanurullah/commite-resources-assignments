/** DOM VARIABLES */
const weekSelection = document.querySelector('#weeks');
const container = document.querySelector('#container');

/** WEEKS DATAS */
const weeks = [
    /** WEEK - 1 WRITE YOUR INFO*/
    [
        {
            "id":1,
            "name":"Orhan N",
            "username":"@orhanurullah",
            "projectName":"Weather APP",
            "repository":"https://github.com/orhanurullah/weather-app",
            "deployment":"aa",
            "description":"A weather app with react"
        },
        {
            "id":2,
            "name":"Turgay T Erkal",
            "username":"@Turgay044",
            "projectName":"My Weather APP",
            "repository":"https://github.com/Turgay044/weather-app",
            "deployment":"",
            "description":"A weather app with react"
        },
        {
            "id":1,
            "name":"Orhan Nurullah",
            "username":"@orhanurullah",
            "projectName":"MY APP",
            "repository":"https://github.com/orhanurullah/weather-app",
            "deployment":"",
            "description":"A weather app with react"
        },
        {
            "id":2,
            "name":"Turgay Turgut Erkal",
            "username":"@Turgay044",
            "projectName":"THE WEATHER APP",
            "repository":"https://github.com/Turgay044/weather-app",
            "deployment":"",
            "description":"A weather app with react"
        },
        {
            "id":1,
            "name":"Orhan Nurullah",
            "username":"@orhanurullah",
            "projectName":"Weather Aplication",
            "repository":"https://github.com/orhanurullah/weather-app",
            "deployment":"",
            "description":"A weather app with react"
        },
        {
            "id":2,
            "name":"Turgay Turgut Erkal",
            "username":"@Turgay044",
            "projectName":"Great Weather App",
            "repository":"https://github.com/Turgay044/weather-app",
            "deployment":"",
            "description":"A weather app with react"
        }
    ],
    /** WEEK - 2 */
    [
        {
            "id":1,
            "name":"Orhan Nurullah KILIÇ",
            "username":"@orhanurullah",
            "projectName":"Weather APP",
            "repository":"https://github.com/orhanurullah/weather-app",
            "deployment":"aa",
            "description":"A Acayip app with react"
        },
        {
            "id":2,
            "name":"Turgay Turgut Erkal",
            "username":"@Turgay044",
            "projectName":"My Weather APP",
            "repository":"https://github.com/Turgay044/weather-app",
            "deployment":"",
            "description":"A weather app with react"
        },
        {
            "id":1,
            "name":"Orhan Nurullah",
            "username":"@orhanurullah",
            "projectName":"MY APP",
            "repository":"https://github.com/orhanurullah/weather-app",
            "deployment":"",
            "description":"A weather app with react"
        },
        {
            "id":2,
            "name":"Turgay Turgut Erkal",
            "username":"@Turgay044",
            "projectName":"THE WEATHER APP",
            "repository":"https://github.com/Turgay044/weather-app",
            "deployment":"",
            "description":"A weather app with react"
        },
        {
            "id":1,
            "name":"Orhan Nurullah",
            "username":"@orhanurullah",
            "projectName":"Weather Aplication",
            "repository":"https://github.com/orhanurullah/weather-app",
            "deployment":"",
            "description":"A weather app with react"
        },
        {
            "id":2,
            "name":"Turgay Turgut Erkal",
            "username":"@Turgay044",
            "projectName":"Great Weather App",
            "repository":"https://github.com/Turgay044/weather-app",
            "deployment":"",
            "description":"A weather app with react"
        }
    ],
    /** WEEK - 3 */
    [
        {
            "id":1,
            "name":"Orhan Nurullah",
            "username":"@orhanurullah",
            "projectName":"Weather APP",
            "repository":"https://github.com/orhanurullah/weather-app",
            "deployment":"aa",
            "description":"A weather app with react"
        },
        {
            "id":2,
            "name":"Turgay Turgut E",
            "username":"@Turgay044",
            "projectName":"My Weather APP",
            "repository":"https://github.com/Turgay044/weather-app",
            "deployment":"",
            "description":"A weather app with react"
        },
        {
            "id":1,
            "name":"Orhan Nurullah",
            "username":"@orhanurullah",
            "projectName":"MY APP",
            "repository":"https://github.com/orhanurullah/weather-app",
            "deployment":"",
            "description":"A weather app with react"
        },
        {
            "id":2,
            "name":"Turgay Turgut Erkal",
            "username":"@Turgay044",
            "projectName":"THE WEATHER APP",
            "repository":"https://github.com/Turgay044/weather-app",
            "deployment":"",
            "description":"A weather app with react"
        },
        {
            "id":1,
            "name":"Orhan Nurullah",
            "username":"@orhanurullah",
            "projectName":"Weather Aplication",
            "repository":"https://github.com/orhanurullah/weather-app",
            "deployment":"",
            "description":"A weather app with react"
        },
        {
            "id":2,
            "name":"Turgay Turgut Erkal",
            "username":"@Turgay044",
            "projectName":"Great Weather App",
            "repository":"https://github.com/Turgay044/weather-app",
            "deployment":"",
            "description":"A weather app with react"
        }
    ]
]
/**
 * Parser Method load(data)
 * data is equal number of weeks
 */
const load = (data) => {
    let week = data;
    let length = weeks[0].length;
    for(let i = 0; i < length; i++){
        // CREATE CARD
        const card = document.createElement('div');
        card.className = 'card mx-2 my-2 text-center';
        container.appendChild(card);
        // CREATE CARD-HEADER
        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        cardHeader.innerText = weeks[week][i].projectName;
        cardHeader.setAttribute('title', 'given project name');
        card.appendChild(cardHeader);
        // CREATE CARD-BODY
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        card.appendChild(cardBody);
        // CREATE CARD-TITLE
        const cardTitle = document.createElement('h5');
        cardTitle.innerText = weeks[week][i].name;
        cardBody.appendChild(cardTitle);
        // CREATE CARD-USERNAME
        const cardUsername = document.createElement("h6");
        cardBody.appendChild(cardUsername);
        const cardUsernameHref = document.createElement('a');
        cardUsernameHref.setAttribute('href', "https://github.com/" + weeks[week][i].username.split('@')[1]);
        cardUsernameHref.setAttribute('title', 'See at github');
        cardUsernameHref.setAttribute('target', '_blank');
        cardUsernameHref.innerText = weeks[week][i].username;
        cardUsername.appendChild(cardUsernameHref);
        //CREATE LINKS WRAPPER
        const linksWrapper = document.createElement('div');
        linksWrapper.className = 'link-box';
        cardBody.appendChild(linksWrapper);
        // CREATE PROJECT LINK
        const projectLink = document.createElement('a');
        projectLink.className = "btn btn-primary";
        projectLink.setAttribute('target', '_blank');
        projectLink.setAttribute('href', weeks[week][i].repository);
        projectLink.innerText = "Repository";
        projectLink.setAttribute('title', 'See repository');
        linksWrapper.appendChild(projectLink);
        // CREATE DEPLOY LINK
        const deployLink = document.createElement('a');
        deployLink.className = 'btn btn-secondary';
        deployLink.innerText = 'Deployment';
        if(weeks[week][i].deployment !== ''){
            deployLink.className = 'btn btn-success';
            deployLink.setAttribute('target', '_blank');
            deployLink.setAttribute('href', weeks[week][i].deployment);
            deployLink.setAttribute('title', 'See on pages');
        }else{
            deployLink.className = 'btn btn-secondary';
            deployLink.setAttribute('title', 'There is no deployment yet');
        }
        linksWrapper.appendChild(deployLink);
        // CREATE CARD-FOOTER
        const cardFooter = document.createElement('div');
        cardFooter.className='card-footer mt-2';
        cardFooter.innerText = weeks[week][i].description;
        cardFooter.setAttribute('title', 'description');
        cardBody.appendChild(cardFooter);
    }
}

/** Select visible text */
const temp = document.querySelector('#temp');
temp.innerText = localStorage.getItem('valName') ? localStorage.getItem('valName') : 'Select One Week';
/** Load function is loading */
let value = localStorage.getItem('value') ? localStorage.getItem('value') : weeks.length-1;
window.onload = load(value);
/**
 * Onchange metod for select element
 */
weekSelection.addEventListener('change', () => {
    value = weekSelection.value;
    localStorage.setItem('value', value);
    localStorage.setItem('valName', weekSelection.options[weekSelection.selectedIndex].text);
    window.location.reload();
});

/**
 * 
 * @param {weeks.length} val 
 * Create Select Options Elements
 */
const createOptionsElement = (val) => {
    for(let i = 0; i < val; i++){
        let option = document.createElement('option');
        option.setAttribute('value', i);
        option.innerText = 'Week ' + (i+1);
        weekSelection.appendChild(option);
    }
}
/** Create Element function is load options element */
window.onload = createOptionsElement(weeks.length);

