import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../Features/userSlice";
import { getAllPosts, selectAllPosts } from "../Features/postSlice";

const Post = ({ post }) => {
  /* const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const postData = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
 */
  return (
    <Card sx={{ maxWidth: "75%", margin: 5 }}>
      <CardHeader
        avatar={
          <Link to="/profile">
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          </Link>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={`${post.imagename}`}
      />
      <CardMedia
        component="img"
        height="20%"
        image={`http://localhost:3002/uploads/${post.imagename}`}
        alt="Post Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
