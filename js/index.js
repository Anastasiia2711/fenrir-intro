const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Anastasiia Eliseeva &copy ${thisYear}`;
footer.appendChild(copyright);


const skills = [id = 'JavaScript', 'Banking', 'Finance',  'GitHub', 'VSC', 'HTML', 'Cypress', 'Trello', 'Photoshop', 'Ligthroom', 'Bridge'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

 for (let i = 0; i < skills.length; i++) {
     const skill = document.createElement('li');
     skill.innerHTML = skills[i];
     skillsList.appendChild(skill)
 }

 const messageSection = document.getElementById('messages');
 messageSection.hidden = true;

const messageForm = document.getElementsByName('leave_message');
messageForm.item(0).addEventListener("submit", (event) => {
    event.preventDefault();
   
    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;
    console.log(name);
    console.log(email);
    console.log(message);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    const editMessage = document.createElement('li');
    newMessage.innerHTML = `<a href = "mailto: ${email}">${name}</a> send: <span>${message}</span>`;
  
    
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();
   });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

//     const editButton = document.createElement('button');
//     editButton.innerText = 'edit';
//     editButton.type = 'button';

//     editButton.addEventListener('click', () => {
//         const entry = editButton.parentNode;
//         entry.edit();
//    });

//     editMessage.appendChild(editButton);
//     messageList.appendChild(editMessage);
  
    messageForm.item(0).reset();

    messageSection.hidden = false;

  });
   
  