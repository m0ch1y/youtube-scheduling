import axios from "axios";

const getNewVideos = async (searchList) => {
  let videos = [];
  for (const keyword of searchList) {
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?q=${keyword}&key=${process.env.REACT_APP_API_KEY}&part=snippet&type=video&eventType=completed&maxResults=8`;
    const response = await axios.get(searchUrl);
    const videoData = response.data.items.map((item) => {
      return {
        id: item.id.videoId,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
      };
    });
    videos.push({
      keyword: keyword,
      details: videoData,
    });
  }
  return videos;
};

const Reload = async (videos, setVideos) => {
  const searchList = videos.map((video) => {
    return video.keyword;
  });

  const newVideos = await getNewVideos(searchList);

  setVideos(newVideos);
};

export default Reload;
