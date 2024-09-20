export interface ProjLbImg {
    label: string;
    img: string;
    ghlink ?: string;
    deplink ?: string;
    auth: string;
    desc: string;
    used : string;
}

export const projectsList: ProjLbImg[] = [
    {
        label: "Number Roulette",
        img: "./nr.png",
        ghlink: "https://github.com/ArunavaCoderEm/Number-Roulette",
        deplink: "https://github.com/ArunavaCoderEm/Number-Roulette",
        auth: "Arunava Dutta",
        desc: "A web-based game where users spin a wheel in a game room to score points.",
        used: "React, TS, Websocket",
    },
    {
        label: "Vehycle",
        img: "./veh.png",
        ghlink: "https://github.com/ArunavaCoderEm/Vehycle",
        deplink: "https://vehycle.vercel.app/",
        auth: "Arunava Dutta",
        desc: "A platform to find and book vehicle repair services.",
        used: "Hono, MRN, TS, FB, TW",
    },
    {
        label: "RepXai",
        img: "./repx.jpg",
        ghlink: "https://github.com/Rep-X-AI/repx-ai",
        deplink: "https://repxai.vercel.app",
        auth: "Arunava Dutta",
        desc: "AI-powered site for evaluating student marks and managing assignments.",
        used: "MERN, FB, TW",
    },
    {
        label: "TaskEase",
        img: "./task.jpg",
        ghlink: "https://github.com/ArunavaCoderEm/TaskEase",
        deplink: "https://taskease-mu.vercel.app/",
        auth: "Arunava Dutta",
        desc: "A todo manager to streamline task management with priority tracking.",
        used: "MERN, TS, TW",
    },
    {
        label: "StudyGenie",
        img: "./ext.png",
        ghlink: "https://github.com/CodeFusers/frontend",
        deplink: "https://studygenie-cf.vercel.app",
        auth: "Arunava Dutta",
        desc: "Upload PDFs, text, and videos for study aids with notes, summaries, and Q&A.",
        used: "MERN, FB, TW",
    },
    {
        label: "Edemy",
        img: "./edm.png",
        ghlink: "https://github.com/eDemy-SIH/eDemy-Website",
        deplink: "https://edemy-32175.vercel.app",
        auth: "Arunava Dutta",
        desc: "Website with multilingual support and AI for career support.",
        used: "HTML, CSS, JS",
    },
    {
        label: "PetMe",
        img: "./pet.png",
        ghlink: "https://github.com/ArunavaCoderEm/PetMe-Home-For-Pets",
        deplink: "https://petme-one.vercel.app",
        auth: "Arunava Dutta",
        desc: "A platform for buying and selling pets, with user sign-in and listing features.",
        used: "React, FB, TW",
    },
    {
        label: "NovelNest",
        img: "./novel.jpg",
        ghlink: "https://github.com/ArunavaCoderEm/Novel-Nest",
        deplink: "https://novelnest-seven.vercel.app",
        auth: "Arunava Dutta",
        desc: "An online bookstore with detailed descriptions of books.",
        used: "ReactJS, TW",
    },
];
