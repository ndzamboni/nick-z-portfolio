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
        title: "placeholder",
        subtitle: "Certificate in Full Stack Web Development",
        logo_path: "placeholder.jpg",
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
        title: "Placeholder",
        subtitle: "placeholder",
        logo_path: "placeholder.jpg",
        certificate_link:
          "https://api.badgr.io/public/assertions/vaZHGY3bQe2o-g5kVNQ7_Q?identity__email=mateo.t.wallace%40gmail.com",
        alt_name: "placeholder",
        color_code: "#fffbf3",
      },
    ],
  };
  
  // Experience Page
  const experience = {
    title: "Experience",
    subtitle: "Work, Internship and Volunteership",
    description:
      "Currently working as a Membership Director for the YMCA of Greensboro. I work with large amounts of data, lead a large team, and I have to have strong problem solving skills. I am also a Full Stack Web Developer, with a focus on the MERN stack. I have experience with a variety of projects, from simple websites to complex web applications.",
    header_image_path: "experience.svg",
    sections: [
      {
        title: "Work Experience",
        experiences: [
          {
            title: "Membership Director - YMCA of Greensboro",
            company: "YMCA of Greensboro",
            company_url: "https://www.ymcagreensboro.org/locations/alex-w-spears-iii-ymca",
            logo_path: "placeholder.jpg",
            duration: "August 2021 - Present",
            location: "Greensboro, NC",
            description: `Leads a team of over 30 staff to provide quality service to over 6,000 members. Manages an annual budget of over $2 million and is responsible for membership data and reporting. Works with the CEO and other directors to create and implement new programs and services.`,
            color: "#117888",
          },
          {
            title: "Family Services Director",
            company: "YMCA of Greensboro",
            company_url: "https://www.ymcagreensboro.org/locations/alex-w-spears-iii-ymca",
            logo_path: "placeholder.jpg",
            duration: "August 2015 - August 2021",
            location: "Greensboro, NC",
            description: `Directed family service programs, managing community outreach and engagement. Led a large team of staff to provide quality summer camp and after school programs.`,
            color: "#e3405f",
          },
          
        ],
      },
      {
        title: "Volunteerships",
        experiences: [
          {
            title: "Bright Beginnings Program Leader",
            company: "YMCA of Greensboro",
            company_url: "https://www.ymcagreensboro.org/locations/alex-w-spears-iii-ymca",
            logo_path: "placeholder.jpg",
            duration: "August 2018 - Present",
            location: "Greensboro, NC",
            description:
              "Leads the annual Bright Beginnings program which provides school supplies and clothing to children in need annually.",
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
        name: "Discord Gaming Vision Board",
        url: "https://github.com/ndzamboni/discord-bot-gaming-vision-board",
        deployedSite: "https://github.com/ndzamboni/discord-bot-gaming-vision-board",
        image: "discorddemo.PNG",
        alt_name: "Vision Board Bot on Discord",
        description:
          "Allows users to post games they would like to play to a shared vision board. Users can then react to the games they would like to play, and the bot will keep track of the games with the most reactions.",
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
        name: "Potty Partner",
        url: "https://github.com/ndzamboni/Potty_Partner",
        deployedSite: "https://potty-partner.onrender.com",
        image: "pottyPartner.PNG",
        alt_name: "potty partner deployed site",
        description:
          "Potty Partner is a web application designed to help users find bathrooms and leave reviews. Whether you’re traveling, in a new city, or just out and about, Potty Partner makes it easy to locate nearby restrooms and read user reviews to find the cleanest, most accessible options. This app aims to provide a community-driven resource for bathroom locations and conditions, ensuring that everyone has access to clean and safe facilities when they need them most.",
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
        name: "Survey App for YMCA of Greensboro",
        url: "https://github.com/ndzamboni/qr-survey-app",
        deployedSite: "https://github.com/ndzamboni/qr-survey-app",
        image: "surveyApp.PNG",
        alt_name: "Survey app for YMCA of Greensboro",
        description:
          "This app allows people to scan a QR code, select their membership type, and complete a survey with questions specific to their membership. The survey responses are saved in JSON files for easy export to any database later.",
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
        name: "QR Code Generator",
        url: "https://github.com/ndzamboni/qr-code-generator",
        deployedSite: "https://github.com/ndzamboni/qr-code-generator",
        image: "qrcode.PNG",
        alt_name: "QR Code Generator",
        description:
          "This is a simple Python script that generates QR codes from user-provided URLs and saves them as image files. The script uses the qrcode and Pillow libraries to create and manipulate QR code images.",
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
        name: "Content Management System",
        url: "https://github.com/ndzamboni/Content_Management_System",
        deployedSite: "https://content-management-system-rigk.onrender.com",
        image: "cmsBlog.PNG",
        alt_name: "Flappy pappy running locally on your computer",
        description:
          "This project is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts. The site is built from scratch and follows the Model-View-Controller (MVC) paradigm, using Handlebars.js as the templating language, Sequelize as the ORM, and express-session for authentication. The application is deployed on Render and connects to an external PostgreSQL database.",
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
        name: "Zrilla Horror Media App",
        url: "https://github.com/Zrilla-App/zrilla?tab=readme-ov-file",
        deployedSite: "https://zrilla-app.github.io/zrilla/",
        image: "zrilla-home.PNG",
        alt_name: "Zrilla Horror Media App",
        description:
          "Welcome to Zrilla, your go-to app for all things horror and thriller movies! Whether you're a seasoned horror aficionado or just dipping your toes into the genre's chilling waters, Zrilla has everything you need to keep track of your favorite films, rate them, and share your thoughts with fellow horror enthusiasts. With Zrilla, you can dive into the darkest corners of cinema and emerge unscathed... or maybe not.",
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
        name: "Weather App",
        url: "https://github.com/ndzamboni/weather-app-nz",
        deployedSite: "https://ndzamboni.github.io/weather-app-nz/",
        image: "weather-2.PNG",
        alt_name: "Deployed site for Weather App",
        description:
          "This is a simple weather dashboard application that allows users to check the current weather and 7-day forecast for a specific city. Users can search for a city, and the app will display the current weather conditions along with a forecast for the next 7 days. The app utilizes the OpenWeatherMap API to fetch weather data based on user input.",
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
        name: "Employee Tracker",
        url: "https://github.com/ndzamboni/employeeTracker",
        deployedSite: "https://github.com/ndzamboni/employeeTracker",
        image: "backendDatabaseCLI.PNG",
        alt_name: "Employee Tracker",
        description:
          "This app takes the user input to store, update, add, remove employee data in detail. This app stores data to a Postgre SQL database and allows the user to easily manipulate the data via this app. Using \"chalk\" the backend app randomizes the menu item colors each time the app is started. This app will be able to be run through the back end as well as server side with a UI.",
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
        name: "Habit Tracker",
        url: "https://github.com/ndzamboni/habit-tracker-z",
        deployedSite: "https://github.com/ndzamboni/habit-tracker-z",
        image: "habitTracker.PNG",
        alt_name: "Habit Tracker App",
        description:
          "This app allows the user to track any habits, hobbies, or rituals and log their data, as well as visualize their data over a period of time. WORK IN PROGRESS.",
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
        name: "Flight Companion Log",
        url: "https://github.com/ndzamboni/Flight-Companion-Log",
        deployedSite: "https://github.com/ndzamboni/Flight-Companion-Log",
        image: "flight.PNG",
        alt_name: "Deployed site for Flight Companion Log",
        description:
          "This app allows the user to log their flights, including the date, time, location, and any notes they would like to add. The user can also view all of their logged flights and delete any they would like.",
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
        name: "Password Generator",
        url: "https://github.com/ndzamboni/password-py",
        deployedSite: "https://github.com/ndzamboni/password-py",
        image: "passwordGen.PNG",
        alt_name: "Deployed site for weather boy",
        description:
          "A Python-based password generator that creates strong, secure passwords based on user-defined criteria. This enhanced version ensures password complexity, evaluates password strength, and allows saving generated passwords to a file.",
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
        name: "Node Note Taker",
        url: "https://github.com/ndzamboni/node-note-taker",
        deployedSite: "https://github.com/ndzamboni/node-note-taker",
        image: "nodeNoteTaker.PNG",
        alt_name: "Node Note Taker Repo",
        description:
          "This Node.js application allows users to create, save, view, and delete notes. It utilizes Express.js for handling server requests, fs (File System) module for interacting with the file system, and uuid package for generating unique IDs for notes.",
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
  