import { useEffect, useState } from "react";
import axios from "axios";
import MultiActionAreaCard from "./Card";
import Grid from "@mui/material/Grid";

const API_KEY = "[AIzaSyAfgXgEXhOnaifKoqovi94AAAFiPQ-MI3A]";

function Api({ content }) {
  const params = {
    key: API_KEY,
    q: { content }, // 検索キーワード
    type: "video", // video,channel,playlistから選択できる
    maxResults: "3", // 結果の最大数
    eventType: "upcoming",
  };
  const queryParams = new URLSearchParams(params);
  const url = "https://www.googleapis.com/youtube/v3/search" + queryParams;
  useEffect(() => {
    async function getYoutubeData() {
      const response = await axios.get(url);
      console.log(response);
    }
    getYoutubeData();
  }, [url]);
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item>
        <MultiActionAreaCard />
      </Grid>
      <Grid item>
        <MultiActionAreaCard />
      </Grid>
      <Grid item>
        <MultiActionAreaCard />
      </Grid>
      <Grid item>
        <MultiActionAreaCard />
      </Grid>
      <Grid item>
        <MultiActionAreaCard />
      </Grid>
    </Grid>
  );
}

export default Api;
