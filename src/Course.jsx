import { Button, Card, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Course() {
  let { courseId } = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "get",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.courses);
        setCourses(data.courses);
      });
  }, []);
  let course = null;
  for (var i = 0; i < courses.length; i++) {
    if (courses[i].id == courseId) course = courses[i];
  }
  if (!course) return <div>loading....</div>;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CourseCard course={course} />
      <UpdateCard course={course}></UpdateCard>
    </div>
  );
}

function UpdateCard(props) {
  let course = props.course;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleUpdate = () => {
    const updatedValues = {};
    if (title !== "") {
      updatedValues.title = title;
    }

    if (description !== "") {
      updatedValues.description = description;
    }

    if (image !== "") {
      updatedValues.imageLink = image;
    }
    fetch("http://localhost:3000/admin/courses/" + course.id, {
      method: "put",
      body: JSON.stringify({
        ...updatedValues,
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
        console.log(data);
        alert("updated");
        //   localStorage.setItem("token", data.token);
      });
  };
  return (
    <div>
      {/* <h1>{course.id}</h1> */}
      <div
        style={{ display: "flex", justifyContent: "center", marginLeft: 10 }}
      >
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
          <Button size={"large"} variant="contained" onClick={handleUpdate}>
            Update course
          </Button>
        </Card>
      </div>
    </div>
  );
}

function CourseCard(props) {
  let course = props.course;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: 600,
          minHeight: 200,
          marginLeft: 20,
        }}
      >
        <Typography textAlign={"center"} variant="h5">
          {course.title}
        </Typography>
        <Typography textAlign={"center"} variant={"subtitle1"}>
          {course.description}
        </Typography>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={course.imageLink} alt="hellew" style={{ width: "90%" }} />
        </div>
        <br />
      </Card>
    </div>
  );
}

// export default Course;
