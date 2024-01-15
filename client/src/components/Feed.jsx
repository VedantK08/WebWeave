import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, selectAllPosts } from "../Features/postSlice";

const Feed = () => {
  const Posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <Box flex={4} p={2}>
      {Posts.map((post) => (
        <Post post={post} />
      ))}
    </Box>
  );
};

export default Feed;
