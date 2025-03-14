export const useYouTube = () => {
    const searchYouTube = async (query) => {
      const apiKey = process.env.NUXT_PUBLIC_YOUTUBE_API_KEY;
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&key=${apiKey}&maxResults=5`;
  
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erreur lors de la requête API YouTube:', error);
      }
    };
  
    return { searchYouTube };
  };
