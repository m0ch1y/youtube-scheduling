import { Grid } from "@mui/material";
import Card from "./Card";

function Content({ videos }) {
  if (videos === []) {
    return <div></div>;
  } else {
    return (
      <div>
        {videos.map((detailData, index) => (
          <Grid key={index} container spacing={3} justifyContent="center">
            {detailData.details.map((video) => (
              <Grid key={video.id} item>
                <div>
                  <Card
                    title={video.title}
                    thumbnail={video.thumbnail}
                    url={video.url}
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        ))}
      </div>
    );
  }
}

export default Content;
