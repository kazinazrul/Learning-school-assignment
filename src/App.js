import React from "react";
import "./App.css";
import CourseData from "./fakeData/data";
import Courses from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import Header from "./components/Header/Header";



function App() {
  let totalCost = 0;
  const [course, setCourse] = useState(CourseData);
  const [totalEnrolled, setTotalEnrolled] = useState([]);

  const enrollHandler = (enrolled) => {
    let newEnrolled = [...totalEnrolled, enrolled];
    setTotalEnrolled(newEnrolled);
  }
  totalEnrolled.map((data) => {
    totalCost = totalCost + data.price;
  });
  return (
    <div className="fullPage">
        <div className="header">
          <Header/>  
        </div>
        <h2 className="title text-center text-dark">
          Explore your knowledge, choice your course.
        </h2>
      <div className="course-container">
          <div className="course-details">
              {
                course.map((course) => {
                  return (
                    <Courses
                      key={course.id}
                      course={course}
                      enrollHandler={enrollHandler}
                    />
                  );
                })
              }
          </div>

          <div className="cart">
              <Cart totalCost={totalCost} totalEnrolled={totalEnrolled} />
          </div>
        </div>
    </div>
  );
} 


export default App;
