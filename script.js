document.getElementById('compensar-btn').addEventListener('click', function() {
    var videoContainer = document.getElementById('video-container');
    
    // Verifica se o vídeo está oculto
    if (videoContainer.style.display === 'none') {
        // Exibe o vídeo
        videoContainer.style.display = 'block';
    } else {
        // Caso contrário, o vídeo fica oculto novamente
        videoContainer.style.display = 'none';
    }
});
