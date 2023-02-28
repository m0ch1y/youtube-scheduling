import { Box, Stack } from "@mui/material";
import Card from "./Header_Components/Card";

function Content({ videos }) {
  if (videos === []) {
    return <div></div>;
  } else {
    return (
      <Stack spacing={5} pt={3}>
        {videos.map(({ details }, index) => (
          <Stack key={index} direction="row" className="scroll">
            {details.map((video) => (
              <Box key={video.id} item px={2}>
                <Card
                  title={video.title}
                  thumbnail={video.thumbnail}
                  url={video.url}
                />
              </Box>
            ))}
          </Stack>
        ))}
      </Stack>
    );
  }
}

export default Content;
