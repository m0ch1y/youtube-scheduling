import axios from "axios";

const Api_call = async (videos, setVideos, searchTerm) => {
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${process.env.REACT_APP_API_KEY}&part=snippet&type=video&eventType=completed&maxResults=8`;
  const response = await axios.get(searchUrl);
  const videoData = response.data.items.map((item) => {
    return {
      id: item.id.videoId,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
    };
  });
  setVideos([
    ...videos,
    {
      keyword: searchTerm,
      details: videoData,
    },
  ]);
  console.log(videos);
};

export default Api_call;
