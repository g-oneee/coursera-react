import { Button } from "@mui/material";
import { Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Appbar() {
  const [userEmail, setUserEmail] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (data.username) {
          setUserEmail(data.username);
        }
      });
  }, []);
  const navigate = useNavigate();
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", padding: 8 }}
    >
      <div>
        <Typography>Coursera</Typography>
      </div>
      <div>
        {userEmail ? (
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: 7, paddingLeft: 10 }}>{userEmail}</div>
            <Button
              variant="contained"
              style={{ marginRight: 8 }}
              onClick={() => {
                localStorage.setItem("token", null);
                window.location = "/signin";
                // navigate("/signup");
              }}
            >
              logout
            </Button>
          </div>
        ) : (
          <>
            <Button
              variant="contained"
              style={{ marginRight: 8 }}
              onClick={() => {
                // window.location = "/signup";
                navigate("/signup");
              }}
            >
              Sign in
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                // window.location = "/signin";
                navigate("/signin");
              }}
            >
              login
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
