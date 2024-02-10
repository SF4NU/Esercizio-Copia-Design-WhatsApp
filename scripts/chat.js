import { conversazione } from "../data/data.js";

let messaggiHTML = "";
conversazione.forEach((messaggio) => {
  messaggiHTML += `
  <div class="messaggio1">
          ${messaggio.messaggio1}
          <span class="time-messaggio">12:38</span>
        </div>
        
        <div class="messaggio2">
          ${messaggio.messaggio2}
          <span class="time-messaggio">12:38</span>
        </div>
  `;
});
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

    document.querySelector(".input").value = "";
    scrollToBottom();
  }
});

function scrollToBottom() {
  const scrollable = document.getElementById("scrollable");

  scrollable.scrollTop = scrollable.scrollHeight;
}
scrollToBottom();
