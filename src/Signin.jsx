import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      {/* <center> */}
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <b>Welcome to coursera</b>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />

          <Button
            size={"large"}
            variant="contained"
            onClick={() => {
              fetch("http://localhost:3000/admin/login", {
                method: "post",
                // body: JSON.stringify({
                //   email,
                //   password,
                // }),
                headers: {
                  "Content-type": "application/json",
                  username: email,
                  password: password,
                  // email,
                  // password,
                },
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  console.log(data);
                  localStorage.setItem("token", data.token);
                  console.log("token is" + localStorage.token);

                  //reloading here
                  window.location = "/";
                });
            }}
          >
            Sign in
          </Button>
        </Card>
      </div>
      {/* </center> */}
    </div>
  );
}
