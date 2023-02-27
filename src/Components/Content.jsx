import { Grid } from "@mui/material";
import Card from "./Card";

function Content({ videos }) {
  if (videos === []) {
    return <div></div>;
  } else {
    return (
      <div>
        {videos.map((detailData, index) => (
          <Grid key={index} container spacing={4}>
            <div
              className="scroll"
              style={{ display: "flex", width: "4600px" }}
            >
              {detailData.details.map((video) => (
                <Grid key={video.id} ml={6} mr={2} mt={8} mb={4} item>
                  <div>
                    <Card
                      title={video.title}
                      thumbnail={video.thumbnail}
                      url={video.url}
                    />
                  </div>
                </Grid>
              ))}
            </div>
          </Grid>
        ))}
      </div>
    );
  }
}

export default Content;
