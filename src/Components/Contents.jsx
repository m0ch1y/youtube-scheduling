import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Grid from "@mui/material/Grid";

const API_KEY = "AIzaSyAfgXgEXhOnaifKoqovi94AAAFiPQ-MI3A";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

function Api() {
  const [channelId, setChannelId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchChannelId = async () => {
      const response = await axios.get(
        `${BASE_URL}/search?key=${API_KEY}&maxResults=1&part=snippet&type=channel&q=${searchTerm}`
      );
      setChannelId(response.data.items[0].snippet.channelId);
    };
    fetchChannelId();
  }, [searchTerm]);

  const fetchVideos = async () => {
    const response = await axios.get(
      `${BASE_URL}/search?key=${API_KEY}&channelId=${channelId}&part=snippet&eventType=upcoming&type=video`
    );
    const videoData = response.data.items.map((item) => {
      return {
        id: item.id.videoId,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.maxres.url,
        startTime:
          item.snippet.liveBroadcastContent === "upcoming"
            ? item.snippet.liveBroadcastContent
            : null,
      };
    });
    setVideos(videoData);
  };
  if (channelId) {
    fetchVideos();
  }
  /*
  const handleSubmit = async (event) => {
    event.preventDefault();
    const API_KEY = "AIzaSyAfgXgEXhOnaifKoqovi94AAAFiPQ-MI3A";
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&eventType=upcoming`;
    const response = await axios.get(searchUrl);
    const videoIds = response.data.items.map((item) => item.id.videoId);
    const videoDetailsUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoIds.join(
      ","
    )}&key=${API_KEY}&part=snippet,liveStreamingDetails`;
    const videoDetailsResponse = await axios.get(videoDetailsUrl);
    const updatedVideos = videoDetailsResponse.data.items.map((item) => {
      return {
        id: item.id,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.maxres.url,
        startTime: item.liveStreamingDetails.scheduledStartTime,
        url: `https://www.youtube.com/watch?v=${item.id}`,
      };
    });
    setVideos(updatedVideos);
  };
*/
  return (
    <div>
      <form onSubmit={fetchVideos}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <Grid container spacing={3} justifyContent="center">
        {videos.map((video) => (
          <Grid item>
            <div key={video.id}>
              <Card
                title={video.title}
                thumbnail={video.thumbnail}
                url={video.url}
                startTime={new Date(video.startTime).toLocaleString()}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Api;
