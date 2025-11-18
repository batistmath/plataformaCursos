import React, { useState } from 'react';
import { courseVideos } from '../data/videos'; // importa os links de videos

function VideoPlayer() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // indica qual o primeiro video da lista a ser exibido
  const currentVideo = courseVideos[currentVideoIndex]; // usando o index do video, busca na lista todos os dados dele, titulo, link, descticao e etc
  const hasPrevious = currentVideoIndex > 0; // verdadeiro se tiver um video antes desse
  const hasNext = currentVideoIndex < courseVideos.length - 1; // verdadeiro se houver um video depois desse

  const extractYoutubeId = (url) => {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get('v'); // usa o link do video para pegar o id dele e usar depois para renderizar
  };

  const goToPrevious = () => {
    if (hasPrevious) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const goToNext = () => {
    if (hasNext) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  if (!currentVideo) {
    return <p>Nenhum vídeo encontrado para este curso.</p>;
  }
  
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${extractYoutubeId(currentVideo.url)}`; // variavel contendo o link ja montado com o id do video - muda a cada video trocado

  return (
    <div className="video-player-page">
      <h2>{currentVideo.title}</h2>
      
      <div className="video-content-container">
        
        <div className="video-display">
          <iframe // carrega o player de video do Youtube
            width="800"
            height="450"
            src={youtubeEmbedUrl}
            title={currentVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-controls">
          <h3>Navegação do Curso ({currentVideoIndex + 1}/{courseVideos.length})</h3>
          <button 
            onClick={goToPrevious} 
            disabled={!hasPrevious}
            className="prev-button"
          >
            Vídeo Anterior
          </button>
          <button 
            onClick={goToNext} 
            disabled={!hasNext}
            className="next-button"
          >
            Próximo Vídeo
          </button>
          
          <div className="video-list"> 
             {courseVideos.map((video, index) => ( // itera sobre a lista de videos e exibe o paragrafo de cada um 
                <p 
                    key={video.id} 
                    style={{ fontWeight: index === currentVideoIndex ? 'bold' : 'normal' }}
                    onClick={() => setCurrentVideoIndex(index)} // direciona para o video que o usuario clicar dentro da lista de videos exibidos
                >
                    {index + 1}. {video.title}
                </p>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;