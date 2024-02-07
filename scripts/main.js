import {people} from "../data/data.js";
let chatHTML = ''
people.forEach((person) => {
  chatHTML += `
  <a class="hidden-link" href="chat.html"><div class="div-mex">
              <div class="profile-image">
                <img class="profile-pic" src="profilepictures/user.png">
                </div>
              <div class="name-mex">
                <div class="name">${person.name}</div>
                <div class="mex">${person.message}</div>
              </div>
              <div class="activity">
                <div class="time">${person.hour}</div>
                <div class="mex-counter">${person.notifications}</div>
              </div>
            </div></a>
  `;
})
  document.querySelector('.js-main-div-mex').innerHTML = chatHTML;
