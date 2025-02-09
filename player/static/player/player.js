// Lista de canciones
const songs = [
    {
      title: "Aserejé",
      cover: "{% static 'covers/cover1.jpg' %}",
      src: "{% static 'songs/song1.mp3' %}",
    },
    {
      title: "Torero",
      cover: "{% static 'covers/cover2.jpg' %}",
      src: "{% static 'songs/song2.mp3' %}",
    },
    {
      title: "Un velero llamado libertad",
      cover: "{% static 'covers/cover3.jpg' %}",
      src: "{% static 'songs/song3.mp3' %}",
    },
  ];
  
  let currentSongIndex = 0;
  const audioPlayer = document.getElementById("audioPlayer");
  const songTitle = document.getElementById("songTitle");
  const cover = document.getElementById("cover");
  
  // Actualiza el reproductor con los datos de la canción actual
  function updatePlayer() {
    const currentSong = songs[currentSongIndex];
    songTitle.textContent = currentSong.title;
    cover.src = currentSong.cover;
    audioPlayer.src = currentSong.src;
    audioPlayer.play();
  }
  
  // Botón anterior
  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updatePlayer();
  }
  
  // Botón siguiente
  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updatePlayer();
  }
  
  // Play/Pausa (solo alterna entre pausar/reproducir)
  function togglePlayPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }
  
  // Inicializa el reproductor
  updatePlayer();
  