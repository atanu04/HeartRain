const emojis = ["💙", "❤️", "🧡","💛","💚","💜","🖤","🤎"];

function emoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.style.left = Math.random()*100+"vw";
  emoji.style.animationDuration = Math.random() * 2 + 3 + "s";
  var index = Math.floor(Math.random()*10)%8;
  //console.log(index);
  emoji.innerText = emojis[index];
  document.body.appendChild(emoji);

  setTimeout(()=>{
    emoji.remove();
  },5000);
}
//emoji();
setInterval(emoji,1000);
