export interface ProjLbImg {
    label: string;
    img: string;
    ghlink ?: string;
    deplink ?: string;
    auth: string;
    desc: string;
    stack : string;
}

export const projectsList: ProjLbImg[] = [
    {
        label : "Number Roulette",
        img : "./nr.png",
        ghlink : "https://github.com/ArunavaCoderEm/Number-Roulette",
        deplink : "https://github.com/ArunavaCoderEm/Number-Roulette",
        auth: "Arunava Dutta",
        desc : "NumberRoulette is a web-based game.The game allows users to join a game room, enter an arena, and compete by spinning a lucky wheel to score points.",
        stack : "React TS Websocket"

    },
    {
        label : "RepXai",
        img : "./repx.jpg",
        ghlink : "https://github.com/Rep-X-AI/repx-ai",
        deplink : "https://repxai.vercel.app",
        auth: "Arunava Dutta",
        desc : "It is an AI-powered website designed for evaluating student marks. Teachers can create assignments, and students can join them, providing a seamless and efficient way to manage and assess academic performance.",
        stack : "MERN FB"

    },
    {
        label : "TaskEase",
        img : "./task.jpg",
        ghlink : "https://github.com/ArunavaCoderEm/TaskEase",
        deplink : "https://taskease-mu.vercel.app/",
        auth: "Arunava Dutta",
        desc : "TaskEase is a comprehensive todo manager website designed to streamline your task management process effortlessly with proprity tracker.",
        stack : "MERN TS"
    },
    {
        label : "Extracto",
        img : "./ext.png",
        ghlink : "https://github.com/CodeFusers/Client",
        deplink : "https://extracto.vercel.app",
        auth: "Arunava Dutta",
        desc : "Our website offers PDF, text, and YouTube video uploads to assist students with last-minute studies. It provides well-detailed notes, summaries, and a variety of questions and answers generated from our custom-built model.",
        stack : "MERN FB"
    },
    {
        label : "Edemy",
        img : "./edm.png",
        ghlink : "https://github.com/eDemy-SIH/eDemy-Website",
        deplink : "https://edemy-32175.vercel.app",
        auth: "Arunava Dutta",
        desc : "In our software, we offer several free features, including an AI chat, multilingual support, career roadmap, and a psychometric test.",
        stack : "HTML CSS JS"
    },
    {
        label : "PetMe",
        img : "./pet.png",
        ghlink : "https://github.com/ArunavaCoderEm/PetMe-Home-For-Pets",
        deplink : "https://petme-one.vercel.app",
        auth: "Arunava Dutta",
        desc : "Petme is a web-based platform where you can buy or sell pets of your choice. The website features functionalities like user sign-in and creating listings for pets available for sale.",
        stack : "MERN FB"
    },
    {
        label : "WeatherMe",
        img : "./wme.jpg",
        ghlink : "https://github.com/ArunavaCoderEm/WeatherMe",
        deplink : "https://weatherme-chi.vercel.app",
        auth: "Arunava Dutta",
        desc : "A sleek and intuitive weather website providing real-time weather updates, forecasts, and radar maps. Features include location-based alerts and detailed climate data for planning and safety.",
        stack : "HTML CSS JS"
    },
    {
        label : "NovelNest",
        img : "./novel.jpg",
        ghlink : "https://github.com/ArunavaCoderEm/Novel-Nest",
        deplink : "https://novelnest-seven.vercel.app",
        auth: "Arunava Dutta",
        desc : "A comprehensive online bookstore offering a vast selection of books across all genres. Features detailed book descriptions, reviews, and personalized recommendations for an enhanced reading experience.",
        stack : "ReactJS"
    },
]