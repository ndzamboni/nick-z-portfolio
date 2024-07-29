import React from "react";
import "./Certifications.css";
import { motion } from "framer-motion";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

function Certifications(props) {
  const theme = props.theme;
  if (certifications.certifications.length) {
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="certs-header" style={{ color: theme.text }}>
              Certifications
            </h1>
          </motion.div>
        </div>
        <div className="certs-body-div">
          {certifications.certifications.map((cert) => {
            return (
              <CertificationCard
                certificate={cert}
                theme={theme}
                key={cert.title}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return "";
  }
}

export default Certifications;
