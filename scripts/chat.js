import { conversazione, risposte, people } from "../data/data.js";
let time = 0;
let messaggiHTML = "";
conversazione.forEach((messaggio) => {
  messaggiHTML += `
  <div class="messaggio1">
          ${messaggio.messaggio1}
          <span class="time-messaggio">12:3${time}</span>
        </div>
        
        <div class="messaggio2">
          ${messaggio.messaggio2}
          <span class="time-messaggio">12:3${time}</span>
        </div>
  `
  time++;
});

let nomeHeaderHTML = "";

document.querySelector(".js-messaggi-utente").innerHTML = messaggiHTML;

document.querySelector(".input").addEventListener("keypress", () => {
  if (event.key === "Enter") {
    let messaggio = document.querySelector(".input").value;
    const nuovoMex = `<div class="messaggio2">
                       ${messaggio}
                       <span class="time-messaggio">12:38</span>
                     </div>`;
    messaggiHTML += nuovoMex;
    document.querySelector(".js-messaggi-utente").innerHTML = messaggiHTML;
    console.log(messaggio);
    const numeroRandom = Math.floor(Math.random() * 4) + 1;
    const rispostaMex = `
    <div class="messaggio1">
            ${risposte[numeroRandom]}
            <span class="time-messaggio">12:38</span>
          </div>`;
    messaggiHTML += rispostaMex;
    setTimeout(() => {
      document.querySelector(".js-messaggi-utente").innerHTML = messaggiHTML;
      scrollToBottom();
    }, 2000);
      

    document.querySelector(".input").value = "";
    scrollToBottom();
  }
});

function scrollToBottom() {
  const scrollable = document.getElementById("scrollable");

  scrollable.scrollTop = scrollable.scrollHeight;
}
scrollToBottom();
