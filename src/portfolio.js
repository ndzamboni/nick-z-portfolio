/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
    isSplash: 1, // boolean: loading screen on first visit
    themeToggle: 1, // boolean: allow user to change theme in header
    showProfilePhoto: 1, // boolean: determines if profile or graphic is shown
  };
  
  //Home Page
  const greeting = {
    profilePhoto: "", //doesnt work for some reason. go to Greeting.js line 56
    title: "Hello World 👋!",
    footer: "Copyright © Nick Zamboni ", // footer + currentYear + "."
    full_name: "Nick Zamboni",
    subTitle: "Full Stack Developer, striving to always learn more.",
    resumeLink:
      "",
  };
  
  // Error 404, Not Found
  const errorPageInfo = {
    titleHighlight: "404",
    title: "Not Found",
    subTitle:
      "",
    image: 0, //for graphic make 0, for image make myImage.png
  };
  
  const socialMediaLinks = {
    /* Your Social Media Link */
    github: "https://github.com/ndzamboni",
    linkedin: "https://www.linkedin.com/in/nick-zamboni-44664b10b/",
    gmail: "ndzamboni@gmail.com",
    gitlab: "",
    twitter: "https://twitter.com/NickZamb",
    instagram: "",
  };
  
  const skills = {
    data: [
      {
        title: "Full Stack Development",
        fileName: "FullStackImg",
        skills: [
          "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
          "⚡ Building responsive website front end using ReactJS",
          "⚡ Creating application backend in Node & Express",
          "⚡ Managing databases with MongoDB and MySQL",
          "⚡ Structuring API's using REST & GraphQL",
        ],
        softwareSkills: [
          {
            skillName: "HTML5",
            fontAwesomeClassname: "simple-icons:html5",
            style: {
              color: "#E34F26",
            },
          },
          {
            skillName: "CSS3",
            fontAwesomeClassname: "fa-css3",
            style: {
              color: "#1572B6",
            },
          },
          {
            skillName: "JavaScript",
            fontAwesomeClassname: "simple-icons:javascript",
            style: {
              backgroundColor: "#FFFFFF",
              color: "#F7DF1E",
            },
          },
          {
            skillName: "MongoDB",
            fontAwesomeClassname: "simple-icons:mongodb",
            style: {
              color: "#439743",
            },
          },
          {
            skillName: "Express.js",
            fontAwesomeClassname: "simple-icons:express",
            style: {
              color: "#ffffff",
            },
          },
          {
            skillName: "ReactJS",
            fontAwesomeClassname: "simple-icons:react",
            style: {
              color: "#61DAFB",
            },
          },
          {
            skillName: "NodeJS",
            fontAwesomeClassname: "simple-icons:node-dot-js",
            style: {
              color: "#339933",
            },
          },
          {
            skillName: "NPM",
            fontAwesomeClassname: "simple-icons:npm",
            style: {
              color: "#CB3837",
            },
          },
          {
            skillName: "GraphQL",
            fontAwesomeClassname: "simple-icons:graphql",
            style: {
              color: "#DE33A6",
            },
          },
          {
            skillName: "MySQL",
            fontAwesomeClassname: "simple-icons:mysql",
            style: {
              color: "#4479A1",
            },
          },
          {
            skillName: "jQuery",
            fontAwesomeClassname: "simple-icons:jquery",
            style: {
              color: "#0865A6",
            },
          },
          {
            skillName: "Markdown",
            fontAwesomeClassname: "simple-icons:markdown",
            style: {
              color: "#ffffff",
            },
          },
          {
            skillName: "Git",
            fontAwesomeClassname: "simple-icons:git",
            style: {
              color: "#E94E32",
            },
          },
        ],
      },
      {
        title: "Cloud Infra-Architecture",
        fileName: "DataScienceImg",
        skills: [
          "⚡ Experience working on multiple cloud platforms",
          "⚡ Experience hosting and managing websites",
          "⚡ Experience with Continuous Integration",
        ],
        softwareSkills: [
          {
            skillName: "Heroku",
            fontAwesomeClassname: "simple-icons:heroku",
            style: {
              color: "#6863A6",
            },
          },
          {
            skillName: "MongoDB",
            fontAwesomeClassname: "simple-icons:mongodb",
            style: {
              color: "#47A248",
            },
          },
          {
            skillName: "GitHub Pages",
            fontAwesomeClassname: "simple-icons:github",
            style: {
              color: "#5b77ef",
            },
          },
          {
            skillName: "Vercel",
            fontAwesomeClassname: "simple-icons:vercel",
            style: {
              color: "#ffffff",
            },
          },
          {
            skillName: "Glitch",
            fontAwesomeClassname: "simple-icons:glitch",
            style: {
              color: "#3333FF",
            },
          },
        ],
      },
    ],
  };
  
  const majorEducation = {
    data: [
      {
        title: "",
        subtitle: "Certificate in Full Stack Web Development",
        logo_path: "",
        alt_name: "",
        duration: "",
        descriptions: [
          "⚡ A six month intensive bootcamp course of 480 contact hours.",
          "⚡ Learned to work on multiple group projects integrating Git workflow.",
          "⚡ Gained the skill to become a MERN stack developer, creating various deployed websites with databases.",
        ],
        website_link:
          "",
      },
    ],
  };
  
  const certifications = {
    certifications: [
      // {
      //   title: "M0001: MongoDB Basics",
      //   subtitle: "MongoDB University",
      //   logo_path: "mongo.png",
      //   certificate_link:
      //     "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      //   alt_name: "MongoDB University",
      //   color_code: "#47A048",
      // },
      // {
      //   title: "A300: Atlas Security",
      //   subtitle: "MongoDB University",
      //   logo_path: "mongo.png",
      //   certificate_link:
      //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      //   alt_name: "MongoDB University",
      //   color_code: "#47A048",
      // },
      {
        title: "Postman Student Expert",
        subtitle: "Postman",
        logo_path: "postman.png",
        certificate_link:
          "https://api.badgr.io/public/assertions/vaZHGY3bQe2o-g5kVNQ7_Q?identity__email=mateo.t.wallace%40gmail.com",
        alt_name: "Postman",
        color_code: "#fffbf3",
      },
    ],
  };
  
  // Experience Page
  const experience = {
    title: "Experience",
    subtitle: "Work, Internship and Volunteership",
    description:
      "Currently working as a Teaching Assistant and Tutor. Actively looking for remote work in the form of internships and job opportunities. Constantly working on personal projects.",
    header_image_path: "experience.svg",
    sections: [
      {
        title: "Work Experience",
        experiences: [
          {
            title: "Full Stack Web Developer - Teaching Assistant",
            company: "edX Boot Camps, LLC",
            company_url: "https://www.edx.org/boot-camps",
            logo_path: "edx-bootcamps-logo.jpg",
            duration: "Feb 2023 - Present",
            location: "Remote",
            description: `Instructing the next generation of Web Developers in MERN stack skills. Incorporating grading, code review, and error handling into the workflow.`,
            color: "#117888",
          },
          {
            title: "Web Development & Math Tutor",
            company: "Freelance",
            company_url: "https://mateo-wallace.github.io/",
            logo_path: "mateo-logo.png",
            duration: "June 2015 - Present",
            location: "Remote",
            description: `Tutoring and teaching since high school in a variety of subjects. Preparing students for college & workforce level scenarios.`,
            color: "#e3405f",
          },
          {
            title: "Director of Operations",
            company: "US Postal & Printing",
            company_url:
              "https://www.yelp.com/biz/us-postal-and-printing-west-palm-beach",
            logo_path: "uspp-logo.png",
            duration: "May 2018 - Dec 2022",
            location: "West Palm Beach, FL",
            description: `Running a physical store. Managing a team of proficient individuals to satisfy customer needs. Utilizing and managing databases of customers, addresses, and packages. Graphic design for clients of all event types.`,
            color: "#3453a5",
          },
        ],
      },
      {
        title: "Volunteerships",
        experiences: [
          {
            title: "GitHub Student Developer",
            company: "GitHub",
            company_url: "https://github.com/",
            logo_path: "github.png",
            duration: "Nov 2022 - Present",
            location: "Remote",
            description:
              "Contribute to Open Source Community and Open Source Project.",
            color: "#040f26",
          },
        ],
      },
    ],
  };
  
  // Projects Page
  const projectsHeader = {
    title: "Projects",
    description:
      "My projects make use of a vast variety of latest technology tools. My best experience is in creating NodeJS Backend Projects and React Projects. Below are some of my projects.",
    avatar_image_path: "projects_image.svg",
  };
  
  // Contact Page
  const contactPageData = {
    contactSection: {
      title: "Contact Me",
      description:
        "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
    },
  };
  
  const projects = {
    data: [
      {
        name: "Discord DumBot",
        url: "https://github.com/Mateo-Wallace/MP2-Discord-DumBot-V2",
        deployedSite: "https://mateo-wallace.github.io/MP2-Discord-DumBot-V2/",
        image: "dumbot.png",
        alt_name: "DumBot running on discord",
        description:
          "Open source Discord Bot. Allows users to roll dice and play music with various utility commands.",
        languages: [
          {
            name: "DiscordJS",
            iconifyClass: "logos-discord-icon",
          },
          {
            name: "NodeJS",
            iconifyClass: "vscode-icons:file-type-node",
          },
          {
            name: "FFmpeg",
            iconifyClass: "logos-ffmpeg-icon",
          },
        ],
      },
      {
        name: "rpg-dice-js",
        url: "https://github.com/Mateo-Wallace/rpg-dice-js",
        deployedSite: "https://www.npmjs.com/package/@mateo-wallace/rpg-dice-js",
        image: "rpg-dice-js.png",
        alt_name: "rpg-dics-js on the npm website",
        description:
          "Dice rolling npm package. Allows users to either import a basic roll() function or import a Dice() class where they can use custom settings.",
        languages: [
          {
            name: "npm",
            iconifyClass: "logos-npm-icon",
          },
          {
            name: "NodeJS",
            iconifyClass: "vscode-icons:file-type-node",
          },
        ],
      },
      {
        name: "US Postal & Printing",
        url: "https://github.com/Mateo-Wallace/US-Postal-Printing",
        deployedSite: "https://us-postal-printing.herokuapp.com/",
        image: "us-postal.png",
        alt_name: "Deployed site for us postal printing",
        description:
          "MERN Stack example site for a postal company. Allows users to track packages, make orders, email the store, and save all of that information to their profile for future reference.",
        languages: [
          {
            name: "MongoDB",
            iconifyClass: "logos-mongodb-icon",
          },
          {
            name: "Express",
            iconifyClass: "skill-icons:expressjs-dark",
          },
          {
            name: "NodeJS",
            iconifyClass: "vscode-icons:file-type-node",
          },
          {
            name: "React",
            iconifyClass: "logos-react",
          },
          {
            name: "GraphQL",
            iconifyClass: "logos-graphql",
          },
        ],
      },
      {
        name: "ShoCase",
        url: "https://github.com/Bfunk54/ShoCase",
        deployedSite: "https://shocase.herokuapp.com/",
        image: "shocase.png",
        alt_name: "Deployed site for ShoCase",
        description:
          "A social media website where users create playlists of Anime reccomendations. Other users can like and comment on existing playlists. It has a personal profile page and a simple search bar.",
        languages: [
          {
            name: "MySQL",
            iconifyClass: "logos-mysql",
          },
          {
            name: "Express",
            iconifyClass: "skill-icons:expressjs-dark",
          },
          {
            name: "NodeJS",
            iconifyClass: "vscode-icons:file-type-node",
          },
          {
            name: "Handlebars",
            iconifyClass: "vscode-icons:file-type-handlebars",
          },
          {
            name: "CSS3",
            iconifyClass: "vscode-icons:file-type-css",
          },
        ],
      },
      {
        name: "Flappy Pappy",
        url: "https://github.com/Mateo-Wallace/MP5-Unity-Flappy-Pappy",
        image: "flappy-pappy.png",
        alt_name: "Flappy pappy running locally on your computer",
        description:
          "Flappy bird clone. Allows the user to play a simple game where you jump between pipes in order to achieve a high score.",
        languages: [
          {
            name: "C#",
            iconifyClass: "logos-c-sharp",
          },
          {
            name: "Unity",
            iconifyClass: "skill-icons:unity-dark",
          },
        ],
      },
      {
        name: "Just Tech News",
        url: "https://github.com/Mateo-Wallace/C1-Python-Newsfeed",
        deployedSite: "https://c1-python-newsfeed.herokuapp.com/",
        image: "just-tech-news.png",
        alt_name: "Deployed site for just tech news",
        description:
          "Reddit clone built with Python and Flask. Allows users to create posts, comment, and upvote other posts.",
        languages: [
          {
            name: "Python",
            iconifyClass: "logos-python",
          },
          {
            name: "MySQL",
            iconifyClass: "logos-mysql",
          },
          {
            name: "Flask",
            iconifyClass: "skill-icons:flask-light",
          },
          {
            name: "Jinja",
            iconifyClass: "vscode-icons:file-type-jinja",
          },
        ],
      },
      {
        name: "Google Books Search",
        url: "https://github.com/Mateo-Wallace/M21-Book-Search-Engine",
        deployedSite: "https://m21-book-search-engine.herokuapp.com/",
        image: "book-search.png",
        alt_name: "Deployed site for Google Books Search",
        description:
          "MERN Stack search engine that allows user to create an account, search for books, and save books to a database.",
        languages: [
          {
            name: "MongoDB",
            iconifyClass: "logos-mongodb-icon",
          },
          {
            name: "Express",
            iconifyClass: "skill-icons:expressjs-dark",
          },
          {
            name: "NodeJS",
            iconifyClass: "vscode-icons:file-type-node",
          },
          {
            name: "React",
            iconifyClass: "logos-react",
          },
          {
            name: "GraphQL",
            iconifyClass: "logos-graphql",
          },
        ],
      },
      {
        name: "Blog Boy",
        url: "https://github.com/Mateo-Wallace/M14-Tech-Blog",
        deployedSite: "https://tranquil-cove-06789.herokuapp.com/",
        image: "blog-boy.png",
        alt_name: "Deployed site for blog boy",
        description:
          "A social media website where users can create an account and make posts tied to their account that others can comment on.",
        languages: [
          {
            name: "MySQL",
            iconifyClass: "logos-mysql",
          },
          {
            name: "Express",
            iconifyClass: "skill-icons:expressjs-dark",
          },
          {
            name: "NodeJS",
            iconifyClass: "vscode-icons:file-type-node",
          },
          {
            name: "Handlebars",
            iconifyClass: "vscode-icons:file-type-handlebars",
          },
          {
            name: "CSS3",
            iconifyClass: "vscode-icons:file-type-css",
          },
        ],
      },
      {
        name: "Note Taker",
        url: "https://github.com/Mateo-Wallace/M11-Note-Taker",
        deployedSite: "https://desolate-fjord-67880.herokuapp.com/",
        image: "note-taker.png",
        alt_name: "Deployed site for note taker",
        description:
          "Allows a user to create notes, read created notes, update existing notes, and delete notes.",
        languages: [
          {
            name: "NodeJS",
            iconifyClass: "vscode-icons:file-type-node",
          },
          {
            name: "Express",
            iconifyClass: "skill-icons:expressjs-dark",
          },
          {
            name: "HTML5",
            iconifyClass: "vscode-icons:file-type-html",
          },
          {
            name: "CSS3",
            iconifyClass: "vscode-icons:file-type-css",
          },
        ],
      },
      {
        name: "Steamy Scoops",
        url: "https://github.com/Mateo-Wallace/P1-Steamy-Scoops",
        deployedSite: "https://mateo-wallace.github.io/P1-Steamy-Scoops/",
        image: "steamy-scoops.png",
        alt_name: "Deployed site for steamy scoops",
        description:
          "A news site where a user can search a video game and be presented with Steam news and Youtube news.",
        languages: [
          {
            name: "HTML5",
            iconifyClass: "vscode-icons:file-type-html",
          },
          {
            name: "CSS3",
            iconifyClass: "vscode-icons:file-type-css",
          },
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "Tailwind",
            iconifyClass: "logos-tailwindcss-icon",
          },
          {
            name: "jQuery",
            iconifyClass: "skill-icons:jquery",
          },
        ],
      },
      {
        name: "Weather Boy",
        url: "https://github.com/Mateo-Wallace/M6-Weather-Dashboard",
        deployedSite: "https://mateo-wallace.github.io/M6-Weather-Dashboard/",
        image: "weather-boy.png",
        alt_name: "Deployed site for weather boy",
        description:
          "Weather app that allows the user to type in a city and see the weather for the next 5 days. Makes use of API in order to get weather data.",
        languages: [
          {
            name: "HTML5",
            iconifyClass: "vscode-icons:file-type-html",
          },
          {
            name: "CSS3",
            iconifyClass: "vscode-icons:file-type-css",
          },
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "Bootstrap",
            iconifyClass: "logos-bootstrap",
          },
        ],
      },
      {
        name: "CSS Cheat Sheet",
        url: "https://github.com/Mateo-Wallace/M2-CSS-Cheatsheet",
        deployedSite: "https://mateo-wallace.github.io/M2-CSS-Cheatsheet/",
        image: "css-cheatsheet.png",
        alt_name: "Deployed site for css cheat sheet",
        description:
          "One of my first projects I ever built. It uses advanced CSS in order to make a study guide esque site for CSS notes.",
        languages: [
          {
            name: "HTML5",
            iconifyClass: "vscode-icons:file-type-html",
          },
          {
            name: "CSS3",
            iconifyClass: "vscode-icons:file-type-css",
          },
        ],
      },
    ],
  };
  
  export {
    settings,
    greeting,
    errorPageInfo,
    socialMediaLinks,
    skills,
    majorEducation,
    certifications,
    experience,
    projectsHeader,
    contactPageData,
    projects,
  };
  