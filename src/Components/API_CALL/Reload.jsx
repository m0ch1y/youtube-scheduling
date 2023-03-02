import Api_call from "./Api";

import axios from "axios";

const Reload = async (videos, setVideos, search_list, setSearch_list) => {
  // setSearch_list([]);

  const searchList = Object.keys(videos).map((key) => {
    return videos[key].keyword;
  });
  // setVideos([]);

  const newVideos = [];
  searchList.forEach(async (keyword) => {
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
    newVideos.push({
      keyword: keyword,
      details: videoData,
    });
  });
  console.log(newVideos);
  setVideos(newVideos);
};

export default Reload;
