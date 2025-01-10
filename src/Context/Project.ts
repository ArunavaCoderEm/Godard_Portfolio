export interface ProjLbImg {
    label: string;
    img: string;
    ghlink ?: string;
    deplink ?: string;
    auth: string;
    type?: string;
    desc: string;
    index?: number,
    used : string;
}

export const projectsList: ProjLbImg[] = [
    {
        label: "ReviewR",
        img: "./rr.png",
        type: "Saas",
        ghlink: "https://github.com/ArunavaCoderEm/ReviewR",
        deplink: "https://review-r.vercel.app/",
        auth: "Arunava Dutta",
        desc: "Simply generate ready-to-use template code of authentic reviews.",
        used: "NextJS, Prisma, NeonDB",
        index: 0
    },
    {
        label: "Number Roulette",
        img: "./nr.png",
        type: "Game",
        ghlink: "https://github.com/ArunavaCoderEm/Number-Roulette",
        deplink: "https://github.com/ArunavaCoderEm/Number-Roulette",
        auth: "Arunava Dutta",
        desc: "A web-based game where users spin a wheel in a game room to score points.",
        used: "React, TS, Websocket",
        index: 1
    },
    {
        label: "KhetiSathi",
        img: "./ks.png",
        type: "SIH 24 winner",
        ghlink: "https://github.com/SIH-CodeFusers/AIgro",
        deplink: "https://khetisathi-4286.pages.dev/",
        auth: "Arunava Dutta",
        desc: "AI based website to help farmers with vast features.",
        used: "MERN, Clerk, Python",
        index: 2
    },
    {
        label: "SupesView",
        img: "./sps.png",
        type: "Caching",
        ghlink: "https://github.com/ArunavaCoderEm/Supes-View",
        deplink: "https://supesview.pages.dev/",
        auth: "Arunava Dutta",
        desc: "Website to get superhero information.",
        used: "React, Tanstack, ShadCN",
        index: 3
    },
    {
        label: "Vehycle",
        img: "./veh.png",
        type: "Saas",
        ghlink: "https://github.com/ArunavaCoderEm/Vehycle",
        deplink: "https://vehycle.vercel.app/",
        auth: "Arunava Dutta",
        desc: "A platform to find and book vehicle repair services.",
        used: "Hono, MRN, TS, FB, TW",
        index: 4
    },
    {
        label: "RepXai",
        img: "./repx.jpg",
        type: "Saas",
        ghlink: "https://github.com/Rep-X-AI/repx-ai",
        deplink: "https://repxai.vercel.app",
        auth: "Arunava Dutta",
        desc: "AI-powered site for evaluating student marks and managing assignments.",
        used: "MERN, FB, TW",
        index: 5
    },
    {
        label: "StudyGenie",
        img: "./ext.png",
        type: "Saas",
        ghlink: "https://github.com/CodeFusers/frontend",
        deplink: "https://studygenie-cf.vercel.app",
        auth: "Arunava Dutta",
        desc: "Upload PDFs, text, and videos for study aids with notes, summaries, and Q&A.",
        used: "MERN, FB, TW",
        index: 6
    },
    {
        label: "Edemy",
        img: "./edm.png",
        type: "SIH 23 Final",
        ghlink: "https://github.com/eDemy-SIH/eDemy-Website",
        deplink: "https://edemy-32175.vercel.app",
        auth: "Arunava Dutta",
        desc: "Website with multilingual support and AI for career support.",
        used: "HTML, CSS, JS",
        index: 7
    },
    {
        label: "PetMe",
        img: "./pet.png",
        type: "Saas",
        ghlink: "https://github.com/ArunavaCoderEm/PetMe-Home-For-Pets",
        deplink: "https://petme-one.vercel.app",
        auth: "Arunava Dutta",
        desc: "A platform for buying and selling pets, with user sign-in and listing features.",
        used: "React, FB, TW",
        index: 8
    },
    {
        label: "TaskEase",
        img: "./task.jpg",
        type: "Saas",
        ghlink: "https://github.com/ArunavaCoderEm/TaskEase",
        deplink: "https://taskease-mu.vercel.app/",
        auth: "Arunava Dutta",
        desc: "A todo manager to streamline task management with priority tracking.",
        used: "MERN, TS, TW",
        index: 9
    },
    {
        label: "NovelNest",
        img: "./novel.jpg",
        type: "APIs",
        ghlink: "https://github.com/ArunavaCoderEm/Novel-Nest",
        deplink: "https://novelnest-seven.vercel.app",
        auth: "Arunava Dutta",
        desc: "An online bookstore with detailed descriptions of books.",
        used: "ReactJS, TW",
        index: 10
    },
    {
        label: "ScrapeSmart",
        img: "./scr.png",
        type: "Scrapping",
        ghlink: "https://github.com/ArunavaCoderEm/ScrapeSmart",
        deplink: "https://scrapesmart003.streamlit.app/",
        auth: "Arunava Dutta",
        desc: "A website to scrape other website data also with AI prompts.",
        used: "Python, Streamlit",
        index: 11
    },
];
