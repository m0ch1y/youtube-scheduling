import { useState } from "react";
import axios from "axios";
import Card from "./Card";
import Grid from "@mui/material/Grid";

function Api() {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

    const handleSubmit = async (event) => {
    event.preventDefault();
    const API_KEY = 'AIzaSyAfgXgEXhOnaifKoqovi94AAAFiPQ-MI3A';
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&eventType=upcoming`;
    const response = await axios.get(searchUrl);
    const videoIds = response.data.items.map((item) => item.id.videoId);
    const videoDetailsUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoIds.join(',')}&key=${API_KEY}&part=snippet,liveStreamingDetails`;
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
  return (
 <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <Grid container spacing={3} justifyContent="center">
        {videos.map((video) => (
          <Grid item>
          <div key={video.id}>
            <Card title={video.title} thumbnail={video.thumbnail} url={video.url} startTime={new Date(video.startTime).toLocaleString()} />
          </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Api;
