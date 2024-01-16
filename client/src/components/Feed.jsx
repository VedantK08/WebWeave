import { Box } from "@mui/material";
import React, { useEffect } from "react";
//import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, selectAllPosts } from "../Features/postSlice";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
    </Box>
  );
};

export default Feed;
