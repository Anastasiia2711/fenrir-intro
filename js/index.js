const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Anastasiia Eliseeva &copy ${thisYear}`;
footer.appendChild(copyright);


const skills = ['JavaScript', 'Banking', 'Finance',  'GitHub', 'VSC', 'HTML', 'Cypress', 'Trello', 'Photoshop', 'Ligthroom', 'Bridge'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill)
}