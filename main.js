let lastSong = null;
let selection = null;
let playlist = ["sounds/ready.mp3", "sounds/waterphone.mp3", "sounds/elephant.mp3", "sounds/explosion.mp3", "sounds/rabbit.mp3" ]; // Lista de sons
let player = document.getElementById("audioplayer");
    player.autoplay=true; // Loop
    player.addEventListener("ended", aleatorio); // Quando acaba o som, começa outro

function aleatorio(){
    while(selection == lastSong){ // Repete até encontrar um som diferente (enquanto o som for igual ao último, repete o math.random par gerar outro possível)
        selection = Math.floor(Math.random() * playlist.length); // Random * todas os sons da playlist
    }
    lastSong = selection; // Relembrar o último som
    player.src = playlist[selection];
}

// Correr funções

aleatorio(); // Selecionar som
player.play(); // Começar a tocar o áudio