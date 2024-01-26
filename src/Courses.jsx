import { Button, Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

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
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {courses.map((course) => (
        // <div key={course.id}>
        //   <h3>{course.title}</h3>
        //   <p>{course.description}</p>
        // </div>
        <Course course={course} key={course.id} />
      ))}
      {/* {JSON.str ingify(courses)} */}
    </div>
  );
};

function Course(props) {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: 300,
          minHeight: 200,
          marginLeft: 20,
        }}
      >
        <Typography textAlign={"center"} variant="h5">
          {props.course.title}
        </Typography>
        <Typography textAlign={"center"} variant={"subtitle1"}>
          {props.course.description}
        </Typography>
        <img src={props.course.imageLink} alt="hellew" style={{ width: 300 }} />
        {/* <p>{props.course.description}</p> */}
        <Button
          variant="contained"
          onClick={() => {
            // window.location = "course/" + props.course.id;
            navigate(`/course/${props.course.id}`);
          }}
          style={{ marginLeft: 100 }}
        >
          View
        </Button>
      </Card>
    </div>
  );
}

export default Courses;
