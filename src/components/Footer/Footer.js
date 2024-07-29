import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { greeting } from "../../portfolio.js";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          {greeting.footer} {new Date().getFullYear()}.
        </p>
      </motion.div>
    </div>
  );
}
