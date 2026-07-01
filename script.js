const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const texto = document.getElementById("texto");
const music = document.getElementById("music");
const hearts = document.getElementById("hearts");

let intentos = 0;

// Crear corazones flotando
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💙";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);

}, 500);

// Mover botón No
noBtn.addEventListener("mouseover", () => {

    intentos++;

    if(intentos >= 6){
        texto.innerHTML = "te haces el difícil amor";
    }

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// En celulares
noBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    intentos++;

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position="fixed";
    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";

    if(intentos>=6){
        texto.innerHTML="te haces el difícil amor";
    }
});

// Botón Sí
yesBtn.addEventListener("click",()=>{

    music.play();

    document.body.innerHTML=`

    <div style="
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background:linear-gradient(#b8e3ff,#dff4ff);
    flex-direction:column;
    text-align:center;
    ">

    <img src="bears.jpg"
    style="width:280px;border-radius:25px;box-shadow:0 10px 30px rgba(0,0,0,.2);">

    <h1 style="
    margin-top:30px;
    color:#2563eb;
    font-size:38px;
    ">
    sabía q te morías por mí, pequeño 💙
    </h1>

    <p style="
    font-size:22px;
    margin-top:15px;
    color:#3b82f6;
    ">
    ahora oficialmente ya no te me puedes escapar
    </p>

    </div>

    `;

});