import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { motion } from "framer-motion";
import { style } from "glamor";

export default function ProjectCard({ repo, theme }) {
  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        {...styles}
        key={repo.name}
        style={{
          backgroundColor: theme.projectCard,
          backgroundImage: `linear-gradient(#6e1c2b, ${theme.projectCard} max(9.5rem, 15vh))`,
        }}
        className="project-card"
      >
        {repo.image ? (
          <a href={repo.url} target="_blank" rel="noopener noreferrer">
            <img
              src={require(`../../assests/images/${repo.image}`)}
              alt={repo.alt_name}
            />
          </a>
        ) : (
          ""
        )}

        <div style={{ padding: "10px 2rem 1rem 2rem" }}>
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p
            className="experience-card-company"
            style={{ color: theme.secondaryText }}
          >
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
              Repo
            </a>
            {repo.deployedSite ? (
              <a
                href={repo.deployedSite}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "15px" }}
              >
                Deployed Site
              </a>
            ) : (
              ""
            )}
          </p>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
