import { Button, Card, TextField } from "@mui/material";
import React, { useState } from "react";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <b>Welcome to coursera ,Add course</b>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            fullWidth
            id={"Title"}
            label="Title"
            variant="outlined"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            style={{ marginBottom: 10 }}
          />
          <TextField
            fullWidth
            id={"Description"}
            label="Description"
            variant="outlined"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            style={{ marginBottom: 10 }}
          />
          <TextField
            fullWidth
            id={"image"}
            label="Image Link"
            variant="outlined"
            onChange={(e) => {
              setImage(e.target.value);
            }}
            style={{ marginBottom: 10 }}
          />
          <Button
            size={"large"}
            variant="contained"
            onClick={() => {
              fetch("http://localhost:3000/admin/courses", {
                method: "post",
                body: JSON.stringify({
                  title: title,
                  description: description,
                  imageLink: image,
                  published: true,
                }),
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
                  alert("course added");
                  //   localStorage.setItem("token", data.token);
                });
            }}
          >
            Add course
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default AddCourse;
