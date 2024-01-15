import {
  Avatar,
  Button,
  ButtonGroup,
  Checkbox,
  Fab,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import { Box } from "@mui/system";
import React, { useState } from "react";
import { Add as AddIcon, DateRange, Image } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../Features/userSlice";
import { createPost } from "../Features/postSlice";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    caption: "",
    image: null,
  });
  const [category, setCategory] = useState("technology");

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setData((prev) => ({
        ...prev,
        image: e.target.files[0],
      }));
    } else {
      setData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("caption", data.caption);
    formData.append("image", data.image, data.image.name);
    formData.append("category", category);
    formData.append("user_id", user.user_id);
    //console.log({ ...data, category: category });
    /* for (var key of formData.entries()) {
      console.log("inside for");
      console.log(key[0] + ", " + key[1] + "," + key[2] + "," + key[3]);
    } */

    dispatch(createPost(formData)).then(() => {
      setOpen(false);
      setData({
        caption: "",
        image: null,
      });
    });
  };

  const handleChanged = (e) => {
    setCategory(e.target.name);
  };

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height="auto"
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src={user.profile_photo_url}
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              {user.username}
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            //label="Multiline"
            multiline
            rows={3}
            placeholder="Enter Caption"
            name="caption"
            value={data.caption}
            onChange={handleChange}
            variant="standard"
          />
          <input
            type="file"
            accept="image/jpeg , image/jpg" // Allow only image files
            onChange={handleChange}
            name="image"
          />

          {/* <input type="file" onChange={changeHandle} /> */}

          <Stack direction="row" gap={1} mt={2} mb={2}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={category === "technology"}
                    onChange={handleChanged}
                    name="technology"
                  />
                }
                label="Technology"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={category === "travel"}
                    onChange={handleChanged}
                    name="travel"
                  />
                }
                label="Travel"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={category === "business"}
                    onChange={handleChanged}
                    name="business"
                  />
                }
                label="Business"
              />
            </FormGroup>
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={handleClick}>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
