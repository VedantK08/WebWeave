import { ArrowBack } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
//import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { messageSelector, selectUser } from "../Features/userSlice";

const Account = () => {
  //const [user,setUser] = useState();
  const data = useSelector(selectUser);
  console.log(data);
  const message = useSelector(messageSelector);

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
            {data.name}
          </Typography>
        </Box>
        <Typography
          variant="h4"
          align="right"
          style={{ marginLeft: -85, marginTop: "5%" }}
        >
          India
        </Typography>
      </Box>
      <Typography variant="h4">Account Details:</Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableRow>
            <TableCell>Name : {data.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email : {data.email}</TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </>
  );
};

export default Account;

/**
<Table sx={{ minWidth: 650 }} aria-label="simple table">
          {userData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.label}</TableCell>
              <TableCell align="left" sx={{ paddingLeft: "250px" }}>
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </Table>
 */
