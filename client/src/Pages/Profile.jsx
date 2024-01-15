import {
  Avatar,
  Box,
  Button,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import Post from "../components/Post";

const Profile = () => {
  const itemData = [
    {
      img: "https://i.pinimg.com/474x/5a/da/b9/5adab947baaf32dc23caf046d0aca657.jpg",
      title: "HR",
    },
    {
      img: "https://i.pinimg.com/474x/88/b2/fc/88b2fcb94a822be3285e64802f141b7d.jpg",
      title: "HR",
    },
    {
      img: "https://images.assettype.com/nationalherald/2022-01/d510c564-a528-4005-9388-038440e69bb6/Hrithik_Roshan_goes_fierce__intense_in_first_look_of__Vikram_Vedha_.jpg",
      title: "Hr",
    },
  ];

  return (
    <>
      <Link to="/userHome">
        <Button variant="contained" startIcon={<ArrowBack />} sx={{ mb: 2 }}>
          Go back to Home Page
        </Button>
      </Link>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="Hritik Roshan"
          src="https://pragativadi.com/wp-content/uploads/2021/01/Hrithik-Roshan-3-1579703264814_16fcda6e62f_large.jpg"
          sx={{ height: 250, width: 250 }}
        />
        <Box sx={{ marginLeft: 5, mb: 5 }}>
          <Typography variant="h2" align="right">
            Hritik Roshan
          </Typography>
        </Box>
        <Typography
          variant="h4"
          align="right"
          style={{ marginLeft: -345, marginTop: "5%" }}
        >
          India
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom sx={{ marginTop: "1%" }}>
        About Me: I am an Indian Actor working in Hindi cinemas.
      </Typography>
      <Typography>My Photos: </Typography>
      <ImageList
        sx={{ width: 550, height: 300, gap: 10 }}
        cols={3}
        rowHeight={250}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}`} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      <hr />
      <hr />
      <hr />
      <br />
      <Typography variant="h3" gutterBottom>
        My Posts
      </Typography>
      <hr />
      <hr />
      <Post />
    </>
  );
};

export default Profile;
