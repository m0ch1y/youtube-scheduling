import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, IconButton, Stack, TextField } from "@mui/material";
import Card from "./Card";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Api() {
  const data = localStorage.getItem("videos")
    ? JSON.parse(localStorage.getItem("videos"))
    : [];
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState(data);

  useEffect(() => {
    const json = JSON.stringify(videos);
    localStorage.setItem("todos", json);
  }, [videos]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    if (searchTerm === "") {
      alert("空文字は入力できません。");
    } else {
      const API_KEY = "AIzaSyD1gQDp48GpVrCBj1NRfbojrFZDK9xx7wE"; //"AIzaSyAfgXgEXhOnaifKoqovi94AAAFiPQ-MI3A";
      const searchUrl = `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&eventType=upcoming&maxResults=1`;
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
    }
    setSearchTerm("");
  };

  return (
    <div>
      <Stack direction={"row"} p={1} justifyContent="center">
        <TextField
          fullWidth
          id="standard-basic"
          label="入力"
          variant="standard"
          value={searchTerm}
          onChange={handleChange}
        />
        <IconButton color="secondary" onClick={handleSubmit}>
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </Stack>
      {console.log(videos)}
      <Grid container spacing={3} justifyContent="center">
        {videos.map((detailData) =>
          detailData.details.map((video) => (
            <Grid item>
              <div key={video.id}>
                <Card
                  title={video.title}
                  thumbnail={video.thumbnail}
                  url={video.url}
                />
              </div>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}

export default Api;
