import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../Features/userSlice";
import { getAllPosts, selectAllPosts } from "../Features/postSlice";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const allPosts = useSelector(selectAllPosts);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    // Add your logic here for deleting the post
    console.log("Delete post logic here");
    handleClose(); // Close the menu after deleting
  };

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  // console.log(`userdata : ${userData}`);
  console.log(`allPosts : ${allPosts}`);
  return (
    <div>
      {allPosts.map((post) => (
        <Card key={post.id} sx={{ maxWidth: "75%", margin: 5 }}>
          <CardHeader
            avatar={
              <Link to="/profile">
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  R
                </Avatar>
              </Link>
            }
            action={
              <>
                <IconButton aria-label="settings" onClick={handleClick}>
                  <MoreVert />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleDelete}>Delete</MenuItem>
                </Menu>
              </>
            }
            title={userData.name}
          />
          <CardMedia
            component="img"
            sx={{
              width: "100%", // Set the width to cover the entire card
              maxHeight: "200px", // Set the maximum height in pixels
              objectFit: "cover", // Maintain aspect ratio and cover the space
            }}
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
      ))}
    </div>
  );
};

export default Post;
