import { SvgIcons } from "@/components/svg";
import profileImg2 from "../../public/images/profileImg2.png"
import videoLibraryImg from "../../public/images/videoLibrary.png"
import componentLibrary from "../../public/images/componentLibrary.webp"
import ecom from "../../public/images/ecom.webp"
import blogMemo from "../../public/images/blogMemo.png"
import createNpmImg from "../../public/images/createNpm.png"

export const candidateInfo = {
    name: "Juvita Saini",
    email: "juvitasaini@gmail.com",
    tagline: "A passionate Frontend Developer",
    portfolio: "https://juvitasaini09.github.io/portfolio/",
    profileImg2: profileImg2,
    mediumLink: "https://medium.com/@juvitasaini"
}


export const socialLinks = [
    { id: "twitter", url: "https://x.com/SainiJuvita?s=03", Icon: SvgIcons.Twitter },
    { id: "linkedin", url: "https://www.linkedin.com/in/juvitasaini/", Icon: SvgIcons.LinkedIn },
    { id: "github", url: "https://github.com/JuvitaSaini09", Icon: SvgIcons.Github },
    { id: "leetcode", url: "https://leetcode.com/u/Juvita_Saini/", Icon: SvgIcons.LeetCode },
]
    ;
export const skills = [
    "HTML5", "JavaScript", "React.js", "Next.JS", "TypeScript", "CSS3", "Tailwind CSS", "Material-UI", "Ant Design", "Recharts", "Git", "GitHub", "Cypress", "Socket.io",
];

export const experience = [
    {
        company: "CarbonMinus",
        role: "Frontend Developer",
        duration: "Sep, 2023 - Feb, 2025",
        description: "Built scalable, high-performance UI components, improving responsiveness and user engagement through optimized rendering and efficient state management.🚀",
        detailedExperience: [
            "Developed a real-time alert feature using Socket.io for instant notifications.",
            "Implemented various charts using Recharts to visualize data effectively.",
            "Initially worked with Ant Design but later transitioned the project to Material UI for better flexibility and customization.",
            "Integrated features like dark theme, layout, routing, and navigation to enhance user experience.",
            "Wrote test cases in Cypress to ensure code quality and functionality.",
            "Used Styled Components throughout the project for modular and maintainable CSS.",
            "Added a download feature across the project, allowing users to download charts and specific UI components.",
            "Worked on bug fixing and error tracking using Sentry to monitor live issues and improve stability.",
            "Independently developed a new feature with a junior backend developer, successfully merging it into the main project without senior assistance.",
            "Integrated React Google Maps for dynamic location tracking and custom map views.",
            "Created comprehensive documentation and README files to improve project understanding and team collaboration.",
            "Advised transitioning from Create React App (CRA) to Vite for a better development experience and performance improvements."
        ],

    },
];



export const mainProjects = [
    {
        title: "Video Library",
        description: "This is a video library web app. This is a front-end project. It has mainly the following features: Home, Playlists, Liked, Watch Later, History. Technologies used are: ReactJS, Mockbee for mock backend.",
        link: "https://github.com/JuvitaSaini09/quartz-video-lib-react",
        imgUrl: videoLibraryImg,
        liveLink: "https://quartz-video-library.netlify.app/",
        category: "Neog Major Project",
        technologies: "ReactJS, Mockbee",
        date: "",
    },
    {
        title: "Component Library",
        description: "BuildUI is a component library built using HTML and CSS. You can use this component library in your projects. With the help of this library, you don’t need to code from scratch; you just pick components.",
        link: "https://github.com/JuvitaSaini09/build-ui-cl",
        imgUrl: componentLibrary,
        liveLink: "https://build-ui-component-library.netlify.app/",
        category: "Neog Major Project",
        technologies: "HTML, CSS",
        date: "",
    },
    {
        title: "Ecommerce Store",
        description: "Quartz Book Store is an e-commerce website. It is made with HTML and CSS. It has the following features: Home Page, Product Listing Page, Filters by option (three categories), Cart Management, Wishlist Management, and Authentication page.",
        link: "https://github.com/JuvitaSaini09/quartz-ecom-react",
        imgUrl: ecom,
        liveLink: "https://quartz-ecom-books.netlify.app/",
        category: "Neog Major Project",
        technologies: "HTML, CSS",
        date: "",
    },]


export const projects = [
    ...mainProjects,
    {
        title: "WEB BUDDIES: Cool design",
        description: "This is a static page with multiple sections including Hero Section, Navbar, Featured Products, etc.",
        link: "",
        imgUrl: "",
        liveLink: "https://webbuddies.netlify.app/",
        category: "UI Practice",
        technologies: "",
        date: "July, 2023",
    },
    {
        title: "Quiz App",
        description: "Quiz App consists of multiple categories. It consists of MCQ questions. For every right question, you will be awarded 10 scores. The score page will be shown at the end.",
        link: "https://github.com/JuvitaSaini09/quiz-mini-app",
        imgUrl: "",
        liveLink: "https://indiaquiz.netlify.app/",
        category: "Neog Mini Project",
        technologies: "",
        date: "",
    },
    {
        title: "Customize Umbrella",
        description: "This project has one page which is responsive. It has an umbrella with three colors. A logo on the umbrella can be added from the local system.",
        link: "https://github.com/JuvitaSaini09/Custimize-umbrella2",
        imgUrl: "",
        liveLink: "https://custom-umbrella2.netlify.app/",
        category: "Mini Project",
        technologies: "",
        date: "April, 2023",
    },
    {
        title: "Pomodoro App",
        description: "Pomodoro App is used for productivity in doing tasks. It has features like adding a task, editing/deleting a task, Pomodoro timer, and start/pause/reset clock.",
        link: "https://github.com/JuvitaSaini09/Pomodoro",
        imgUrl: "",
        liveLink: "https://todo-pomodoro.netlify.app/",
        category: "Neog Mini Project",
        technologies: "",
        date: "",
    },
    {
        title: "How well do you know me?",
        description: "A CLI app built with NodeJS. Send this to your friend and see how much your friend knows you.",
        link: "https://github.com/JuvitaSaini09/Do-You-know-me-quiz",
        imgUrl: "",
        liveLink: "https://replit.com/@JuvitaSaini/Project1?embed=true",
        category: "MARK 1",
        technologies: "NodeJS",
        date: "August, 2021",
    },
    {
        title: "Are you a Bollywood fan?",
        description: "Do you watch Bollywood movies? Play the quiz and see how much you know about Bollywood.",
        link: "https://github.com/JuvitaSaini09/Quiz-on-Bollyood",
        imgUrl: "",
        liveLink: "https://replit.com/@JuvitaSaini/Ass1?embed=true",
        category: "MARK 2",
        technologies: "",
        date: "August, 2021",
    },
    {
        title: "Portfolio Website",
        description: "This is a portfolio website. It includes my introduction, projects, and blogs section.",
        link: "https://github.com/JuvitaSaini09/MyPortfolio",
        imgUrl: "",
        liveLink: "https://juvitasaini-portfolio.netlify.app/",
        category: "MARK 4",
        technologies: "",
        date: "August, 2021",
    },
    {
        title: "Minion Speak App",
        description: "This app converts English to the banana language. It is made with VanillaJS.",
        link: "https://github.com/JuvitaSaini09/Minion-Speak-App",
        imgUrl: "",
        liveLink: "https://minion-bananana-talk.netlify.app/",
        category: "MARK 6",
        technologies: "VanillaJS",
        date: "August, 2021",
    },
    {
        title: "Ferb Translation App",
        description: "This is a translation app built using VanillaJS. This app converts English to Ferb Latin.",
        link: "https://github.com/JuvitaSaini09/Ferb-latin-translation",
        imgUrl: "",
        liveLink: "https://ferb-latin-langaguage-converter.netlify.app/",
        category: "MARK 7",
        technologies: "VanillaJS",
        date: "August, 2021",
    },
    {
        title: "Animal Emoji Interpreter",
        description: "This is an emoji interpreter web app. This web app translates the meaning of animal emojis.",
        link: "https://github.com/JuvitaSaini09/Animal-Interpreter",
        imgUrl: "",
        liveLink: "https://4ds8s.csb.app/",
        category: "MARK 8",
        technologies: "",
        date: "August, 2021",
    },
    {
        title: "My Favourite Food List",
        description: "In this app, you can know some of my favorite foods. This app is built using ReactJS.",
        link: "https://github.com/JuvitaSaini09/MyFavFoodList",
        imgUrl: "",
        liveLink: "https://715qk.csb.app/",
        category: "MARK 9",
        technologies: "ReactJS",
        date: "August, 2021",
    },
    {
        title: "Cash Register",
        description: "Enter the bill and cash given by the customer, and this app will tell you the minimum number of notes required to return the change.",
        link: "https://github.com/JuvitaSaini09/Cash-Register",
        imgUrl: "",
        liveLink: "https://cash-resgister.netlify.app/",
        category: "MARK 10",
        technologies: "",
        date: "August, 2021",
    },
    {
        title: "Is Your Birthday Lucky?",
        description: "This is a fun web app that tells whether your birthday is lucky or not.",
        link: "https://github.com/JuvitaSaini09/IS-MY-BIRTHDAY-LUCKY",
        imgUrl: "",
        liveLink: "https://is-my-birthday-lucky.netlify.app/",
        category: "MARK 11",
        technologies: "",
        date: "August, 2021",
    },
    {
        title: "Fun With Triangles",
        description: "In this app, you can check whether given angles can form a triangle, calculate the hypotenuse, sum of angles, take a quiz related to triangles, and calculate the area of a triangle.",
        link: "https://github.com/JuvitaSaini09/fun-with-triangles",
        imgUrl: "",
        liveLink: "https://fun-with-triangle-in-maths.netlify.app/",
        category: "MARK 12",
        technologies: "",
        date: "August, 2021",
    },
    {
        title: "Is Your Birthday A Palindrome?",
        description: "In this app, you can check whether your birthday is a palindrome or not.",
        link: "https://github.com/JuvitaSaini09/Is-Your-Birthday-A-Palindrome",
        imgUrl: "",
        liveLink: "https://birthday-palindrome-web-app.netlify.app/",
        category: "MARK 13",
        technologies: "",
        date: "August, 2021",
    },
    {
        title: "Profit and Loss Calculator",
        description: "In this app, you can know whether your stocks are in profit or loss.",
        link: "https://github.com/JuvitaSaini09/Profit-and-loss-calculator",
        imgUrl: "",
        liveLink: "https://profit-and-loss.netlify.app/",
        category: "MARK 14",
        technologies: "",
        date: "August, 2021",
    },
];

export const blogs = [
    {
        title: "useMemo vs memo in React",
        link: "https://medium.com/@juvitasaini/usememo-vs-memo-in-react-8c9da370dbdc",
        imgUrl: blogMemo,
        description: "When optimizing performance in a React application, two useful tools at your disposal are useMemo and memo. While both serve the purpose of optimization, they are used in different scenarios and ways. Let's explore these differences with examples...",
    },
    {
        title: "Create Your Own NPM Package",
        link: "https://medium.com/@juvitasaini/how-to-create-your-own-npm-package-a-step-by-step-guide-88c0005f9698",
        imgUrl: createNpmImg,
        description: "Have you ever wanted to share your JavaScript code with the world and make it easily accessible for others to use in their projects? Creating your own NPM (Node Package Manager) package allows you to do just that! In this step-by-step guide, we will walk you through the process of creating and publishing your very own NPM package...",
    },
]




// When optimizing performance in a React application, two useful tools at your disposal are useMemo and memo. While both serve the purpose of optimization, they are used in different scenarios and ways. Let's explore these differences with examples.
