import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { majorEducation } from "../../portfolio";
import { motion } from "framer-motion";

function Educations(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h1 className="educations-header" style={{ color: theme.text }}>
            Major Education
          </h1>
        </motion.div>
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
