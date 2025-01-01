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
        label: "ReviewR",
        img: "./rr.png",
        ghlink: "https://github.com/ArunavaCoderEm/ReviewR",
        deplink: "https://review-r.vercel.app/",
        auth: "Arunava Dutta",
        desc: "Simply generate ready-to-use template code of authentic reviews.",
        used: "NextJS, Prisma, NeonDB",
    },
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
        label: "KhetiSathi",
        img: "./ks.png",
        ghlink: "https://github.com/SIH-CodeFusers/AIgro",
        deplink: "https://khetisathi-4286.pages.dev/",
        auth: "Arunava Dutta",
        desc: "AI based website to help farmers with vast features.",
        used: "MERN, Clerk, Python",
    },
    {
        label: "SupesView",
        img: "./sps.png",
        ghlink: "https://github.com/ArunavaCoderEm/Supes-View",
        deplink: "https://supesview.pages.dev/",
        auth: "Arunava Dutta",
        desc: "Website to get superhero information.",
        used: "React, Tanstack, ShadCN",
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
];
