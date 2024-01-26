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
        <b>Welcome to coursera , Sign up below</b>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            fullWidth
            id={"username"}
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
            id={"password"}
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
              // let username = email;
              // let password1 = password;
              fetch("http://localhost:3000/admin/signup", {
                method: "post",
                body: JSON.stringify({
                  username: email,
                  password: password,
                }),
                headers: {
                  "Content-type": "application/json",
                },
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  console.log(data);
                  localStorage.setItem("token", data.token);
                });
            }}
          >
            Sing Up{" "}
          </Button>
        </Card>
      </div>
      {/* </center> */}
    </div>
  );
}
