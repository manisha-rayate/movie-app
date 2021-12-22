import React from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

const movies = [
  {
    src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
    title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
    channel: "Don Diablo",
    views: "396 k views",
    createdAt: "a week ago",
  },
  {
    src: "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
    title: "Queen - Greatest Hits",
    channel: "Queen Official",
    views: "40 M views",
    createdAt: "3 years ago",
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    title: "Star Wars: Episode IV - A New Hope",
    channel: "Ryan Harris",
    views: "45 M views",
    createdAt: "2 years ago",
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    title: "Star Wars: Episode V - The Empire Strikes Back",
    channel: "Petter",
    views: "99 K views",
    createdAt: "2 months ago",
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    title: "Star Wars: Episode VI - Return of the Jedi",
    channel: "Hristo",
    views: "12 M views",
    createdAt: "10 months ago",
  },
];

const CustomGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    flexWrap: "wrap",
  },
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

const Media = (props) => {
  const { loading = false } = props;

  return (
    <>
      <h3>{props.title}</h3>
      <CustomGrid
        container
        wrap="nowrap"
        justifyContent="center"
        alignItems="center"
      >
        {(loading ? Array.from(new Array(3)) : movies).map((item, index) => (
          <Box key={index} sx={{ width: 210, marginRight: 4, my: 5 }}>
            {item ? (
              <img
                style={{ width: "100%", height: 228, borderRadius: "10px" }}
                alt={item.title}
                src={item.src}
              />
            ) : (
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={228}
                animation="wave"
              />
            )}

            {item ? (
              <Box sx={{ pr: 2 }}>
                <Typography gutterBottom variant="body2">
                  {item.title}
                </Typography>
                <Typography
                  display="block"
                  variant="caption"
                  color="text.secondary"
                >
                  {item.channel}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {`${item.views} • ${item.createdAt}`}
                </Typography>
              </Box>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" animation="wave" />
              </Box>
            )}
          </Box>
        ))}
      </CustomGrid>
    </>
  );
};

Media.propTypes = {
  loading: PropTypes.bool,
};

const CardSlider = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media title="Popular" />
      <Media title="Category" />
    </Box>
  );
};

export default CardSlider;
