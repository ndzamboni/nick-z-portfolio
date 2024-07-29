import React from "react";
import "./Error404.css";
import { errorPageInfo } from "../../portfolio";
import { motion } from "framer-motion";
import FeelingProud from "./FeelingProud";

export default function Error404(props) {
  const theme = props.theme;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {" "}
                <span style={{ color: theme.accentColor }}>
                  {errorPageInfo.titleHighlight}{" "}
                </span>
                {errorPageInfo.title}
              </h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {errorPageInfo.subTitle}
              </p>
            </div>
          </div>
          <div className="greeting-image-div">
            {errorPageInfo.image ? (
              <img
                className="profile-pic"
                src={require(`../../assests/images/${errorPageInfo.image}`)}
                alt=""
              />
            ) : (
              <FeelingProud theme={theme} />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
