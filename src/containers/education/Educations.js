import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { majorEducation } from "../../portfolio";
import { Fade } from "react-reveal";

function Educations(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Major Education
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {majorEducation.data.map((degree) => {
          return (
            <DegreeCard degree={degree} theme={theme} key={degree.title} />
          );
        })}
      </div>
    </div>
  );
}

export default Educations;
