import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  Typography,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";

import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Yami Gautam"
            src="https://www.filmibeat.com/img/2022/11/yamigautam-1669634502.jpg"
          />
          <Avatar
            alt="Shahid kapoor"
            src="https://e1.pxfuel.com/desktop-wallpaper/547/609/desktop-wallpaper-who-s-the-boss-of-box-office-it-s-kabir-singh-shahid-kapoor-beard.jpg"
          />
          <Avatar
            alt="Kangana Rannut"
            src="https://cdn.siasat.com/wp-content/uploads/2021/11/kangana-1.jpg"
          />
          <Avatar
            alt="Kapil Sharma"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRs8CljfSDmoaq27DqDgV3djY_D7q46zMU7A&usqp=CAU"
          />
          <Avatar
            alt="sussanne Khan"
            src="https://www.pinkvilla.com/pics/480x270/sussanne-dating-arslan-goni_202209.jpg"
          />
          <Avatar
            alt="Sonu Sood"
            src="https://upload.wikimedia.org/wikipedia/commons/4/43/SonuSood.jpg"
          />
          <Avatar
            alt="S.S. Rajamouli"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtsNdttUJkyTlPY9Ih96CwRV2F-Vv7d7isw&usqp=CAU"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.siasat.com/wp-content/uploads/2021/11/kangana-1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Kangana Rannut
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://www.pinkvilla.com/pics/480x270/sussanne-dating-arslan-goni_202209.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sussanne Khan
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRs8CljfSDmoaq27DqDgV3djY_D7q46zMU7A&usqp=CAU"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Kapil Sharma
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
