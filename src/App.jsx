import "./App.css";
import "./Components/Sidebar";
import Header from "./Components/Header";
import Content from "./Components/Content";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import axios from "axios";

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          display: "none",
        },
      },
    },
  },
});

function App() {
  const array = [
    {
      keyword: "さくらみこ",
      details: [
        {
          id: "3pI0HCRXRPo",
          url: "https://www.youtube.com/watch?v=3pI0HCRXRPo",
          title:
            "【 WILD HEARTS 】和風狩りゲー！難易度高い！？あそんでみるにぇ！！！！！！！！！！！【ホロライブ/さくらみこ】",
          thumbnail: "https://i.ytimg.com/vi/3pI0HCRXRPo/hqdefault.jpg",
        },
        {
          id: "7zuBFEmu5Ss",
          url: "https://www.youtube.com/watch?v=7zuBFEmu5Ss",
          title:
            "【 アスファルト9 】コラボ実装！みこの車で爆走しないか？？？？？【ホロライブ/さくらみこ】",
          thumbnail: "https://i.ytimg.com/vi/7zuBFEmu5Ss/hqdefault.jpg",
        },
        {
          id: "hwBOxFMjqMM",
          url: "https://www.youtube.com/watch?v=hwBOxFMjqMM",
          title:
            "【 Minecraft 】ダンジョンの難易度をどんどんあげていくにぇ！！！！！【ホロライブ/さくらみこ】",
          thumbnail: "https://i.ytimg.com/vi/hwBOxFMjqMM/hqdefault.jpg",
        },
        {
          id: "1vfO4MHuyiM",
          url: "https://www.youtube.com/watch?v=1vfO4MHuyiM",
          title: "【】【ホロライブ/さくらみこ】",
          thumbnail: "https://i.ytimg.com/vi/1vfO4MHuyiM/hqdefault.jpg",
        },
        {
          id: "tv_cp9XbCDY",
          url: "https://www.youtube.com/watch?v=tv_cp9XbCDY",
          title:
            "#4【 ホグワーツレガシー 】魔法の世界へ現実逃避【ホロライブ/さくらみこ】",
          thumbnail: "https://i.ytimg.com/vi/tv_cp9XbCDY/hqdefault.jpg",
        },
      ],
    },
    {
      keyword: "大神ミオ",
      details: [
        {
          id: "9yHImoGYbX0",
          url: "https://www.youtube.com/watch?v=9yHImoGYbX0",
          title: "【#朝ミオ 】２月最後の朝ミオ！みんなおはみぉーん！",
          thumbnail: "https://i.ytimg.com/vi/9yHImoGYbX0/hqdefault.jpg",
        },
        {
          id: "7EXXkxwUup4",
          url: "https://www.youtube.com/watch?v=7EXXkxwUup4",
          title:
            "【ホロライブ幼稚園】帰ってきたあの企画・・！ホロライブ幼稚園開園です！【 #ひろがるホロライブ 】",
          thumbnail: "https://i.ytimg.com/vi/7EXXkxwUup4/hqdefault.jpg",
        },
        {
          id: "mbijcNObIrQ",
          url: "https://www.youtube.com/watch?v=mbijcNObIrQ",
          title:
            "【ホグワーツ・レガシー】メインクエをすすめたい！！！【 ホロライブ / 大神ミオ 】",
          thumbnail: "https://i.ytimg.com/vi/mbijcNObIrQ/hqdefault.jpg",
        },
        {
          id: "BcYDUUFbj7A",
          url: "https://www.youtube.com/watch?v=BcYDUUFbj7A",
          title: "【#１ブロSMOK】１ブロックからはじまる、SMOK生活【マイクラ】",
          thumbnail: "https://i.ytimg.com/vi/BcYDUUFbj7A/hqdefault.jpg",
        },
        {
          id: "_oHdyqru-5c",
          url: "https://www.youtube.com/watch?v=_oHdyqru-5c",
          title: "【歌枠】お久しぶりです【 ホロライブ / 大神ミオ 】",
          thumbnail: "https://i.ytimg.com/vi/_oHdyqru-5c/hqdefault.jpg",
        },
      ],
    },
  ];
  const data = localStorage.getItem("videos")
    ? JSON.parse(localStorage.getItem("videos"))
    : [];
  const [videos, setVideos] = useState(array);
  useEffect(() => {
    const json = JSON.stringify(videos);
    localStorage.setItem("videos", json);
  }, [videos]);

  const handleSubmit = async (keyword) => {
    if (keyword === "") {
      alert("空文字は入力できません。");
    } else {
      // const API_KEY = "AIzaSyD1gQDp48GpVrCBj1NRfbojrFZDK9xx7wE"; //"AIzaSyAfgXgEXhOnaifKoqovi94AAAFiPQ-MI3A";
      // const searchUrl = `https://www.googleapis.com/youtube/v3/search?q=${keyword}&key=${API_KEY}&part=snippet&type=video&eventType=completed&maxResults=5`;
      // const response = await axios.get(searchUrl);
      // const videoData = response.data.items.map((item) => {
      //   return {
      //     id: item.id.videoId,
      //     url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      //     title: item.snippet.title,
      //     thumbnail: item.snippet.thumbnails.high.url,
      //   };
      // });
      // setVideos([
      //   ...videos,
      //   {
      //     keyword: keyword,
      //     details: videoData,
      //   },
      // ]);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header
          handleSubmit={handleSubmit}
          videos={videos}
          setVideos={setVideos}
        />
        <div className="indent">
          <Content videos={videos} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
