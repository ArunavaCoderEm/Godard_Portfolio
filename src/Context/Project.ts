export interface ProjLbImg {
  label: string;
  img: string;
  ghlink?: string;
  deplink?: string;
  auth: string;
  type?: string;
  desc: string;
  index?: number;
  used: string;
  maxdesc?: string;
  team?: string[];
  speciality?: string;
}
    

export const projectsList: ProjLbImg[] = [
  {
    label: "ReviewR",
    img: "/rr.png",
    type: "Saas",
    ghlink: "https://github.com/ArunavaCoderEm/ReviewR",
    deplink: "https://review-r.vercel.app/",
    auth: "Arunava Dutta",
    desc: "Simply generate ready-to-use template code of authentic reviews.",
    used: "NextJS, Prisma, NeonDB",
    index: 0,
    maxdesc:
      "A SaaS platform that empowers users to generate professional and customizable review templates effortlessly. Designed for businesses and individuals to enhance credibility.",
    speciality: "Template-based review generation with ease and authenticity.",
    team: ["Arunava Dutta"]
  },
  {
    label: "Number Roulette",
    img: "/nr.png",
    type: "Game",
    ghlink: "https://github.com/ArunavaCoderEm/Number-Roulette",
    deplink: "https://github.com/ArunavaCoderEm/Number-Roulette",
    auth: "Arunava Dutta",
    desc: "A web-based game where users spin a wheel in a game room to score points.",
    used: "React, TS, Websocket",
    index: 1,
    maxdesc:
      "An engaging web-based game that combines strategy and luck, allowing players to compete in real-time by spinning a roulette wheel to maximize their scores.",
    speciality: "Real-time interactive gaming with WebSocket integration.",
    team: ["Arunava Dutta"]
  },
  {
    label: "KhetiSathi",
    img: "/ks.png",
    type: "SIH 24 winner",
    ghlink: "https://github.com/SIH-CodeFusers/AIgro",
    deplink: "https://khetisathi-4286.pages.dev/",
    auth: "Arunava Dutta",
    desc: "AI based website to help farmers with vast features.",
    used: "MERN, Clerk, Python",
    index: 2,
    maxdesc:
      "A comprehensive AI-driven platform that equips farmers with tools and insights for effective agricultural management, including weather analysis, crop guidance, and financial planning.",
    speciality: "Empowering farmers with AI for smarter agriculture.",
    team: ["Arunava Dutta", "Satyaki Dey", "Priyanshu Dutta", "Pretisha Sahoo", "Rishi Bhattasali", "Shinjan Saha"]
  },
  {
    label: "SupesView",
    img: "/sps.png",
    type: "Caching",
    ghlink: "https://github.com/ArunavaCoderEm/Supes-View",
    deplink: "https://supesview.pages.dev/",
    auth: "Arunava Dutta",
    desc: "Website to get superhero information with caching using tanstack query.",
    used: "React, Tanstack, ShadCN",
    index: 3,
    maxdesc:
      "A feature-rich platform offering detailed information about superheroes, utilizing advanced caching for seamless and efficient data retrieval.",
    speciality: "Efficient superhero data delivery with advanced caching.",
    team: ["Arunava Dutta"]
  },
  {
    label: "Vehycle",
    img: "/veh.png",
    type: "Saas",
    ghlink: "https://github.com/ArunavaCoderEm/Vehycle",
    deplink: "https://vehycle.vercel.app/",
    auth: "Arunava Dutta",
    desc: "A platform to find and book vehicle repair services.",
    used: "Hono, MRN, TS, FB, TW",
    index: 4,
    maxdesc:
      "An innovative SaaS platform designed for users to effortlessly locate and book mechanics or repair services for their vehicles with a seamless user experience.",
    speciality: "Connecting users and vehicle repair services efficiently.",
    team: ["Arunava Dutta"]
  },
  {
    label: "RepXai",
    img: "/repx.jpg",
    type: "Saas",
    ghlink: "https://github.com/Rep-X-AI/repx-ai",
    deplink: "https://repxai.vercel.app",
    auth: "Arunava Dutta",
    desc: "AI-powered site for evaluating student marks and managing assignments.",
    used: "MERN, FB, TW",
    index: 5,
    maxdesc:
      "An AI-driven educational platform that simplifies the process of evaluating student assignments, managing marks, and generating actionable insights for educators.",
    speciality: "AI-enhanced academic performance evaluation and management.",
    team: ["Arunava Dutta", "Satyaki Dey", "Priyanshu Dutta", "Pretisha Sahoo", "Rishi Bhattasali", "Subhadeep Roy"]
  },
  {
    label: "StudyGenie",
    img: "/ext.png",
    type: "Saas",
    ghlink: "https://github.com/CodeFusers/frontend",
    deplink: "https://studygenie-cf.vercel.app",
    auth: "Arunava Dutta",
    desc: "Upload PDFs, text, and videos for study aids with notes, summaries, and Q&A.",
    used: "MERN, FB, TW",
    index: 6,
    maxdesc:
      "A unique platform enabling students to upload and transform study materials into interactive notes, detailed summaries, and tailored question sets.",
    speciality: "Transforming study materials into interactive learning aids.",
    team: ["Arunava Dutta", "Satyaki Dey", "Priyanshu Dutta", "Pretisha Sahoo"]
  },
  {
    label: "Edemy",
    img: "/edm.png",
    type: "SIH 23 Final",
    ghlink: "https://github.com/eDemy-SIH/eDemy-Website",
    deplink: "https://edemy-32175.vercel.app",
    auth: "Arunava Dutta",
    desc: "Website with multilingual support and AI for career support.",
    used: "HTML, CSS, JS",
    index: 7,
    maxdesc:
      "A multilingual website featuring AI tools for personalized career guidance, empowering students to make informed decisions about their futures.",
    speciality: "Multilingual education platform with AI career support.",
    team: ["Arunava Dutta", "Satyaki Dey", "Priyanshu Dutta", "Sonika Biswas", "Rishi Bhattasali"]
  },
  {
    label: "PetMe",
    img: "/pet.png",
    type: "Saas",
    ghlink: "https://github.com/ArunavaCoderEm/PetMe-Home-For-Pets",
    deplink: "https://petme-one.vercel.app",
    auth: "Arunava Dutta",
    desc: "A platform for buying and selling pets, with user sign-in and listing features.",
    used: "React, FB, TW",
    index: 8,
    maxdesc:
      "A user-friendly platform for buying and selling pets, equipped with secure sign-in, easy listings, and intuitive browsing options for pet enthusiasts.",
    speciality: "Pet marketplace with seamless user experiences.",
    team: ["Arunava Dutta"]
  },
  {
    label: "TaskEase",
    img: "/task.jpg",
    type: "Saas",
    ghlink: "https://github.com/ArunavaCoderEm/TaskEase",
    deplink: "https://taskease-mu.vercel.app/",
    auth: "Arunava Dutta",
    desc: "A todo manager to streamline task management with priority tracking.",
    used: "MERN, TS, TW",
    index: 9,
    maxdesc:
      "A productivity-boosting application designed to simplify task management, prioritize effectively, and ensure timely completions for users.",
    speciality: "Enhanced task management with intuitive priority tracking.",
     team: ["Arunava Dutta"]
  },
  {
    label: "NovelNest",
    img: "/novel.jpg",
    type: "APIs",
    ghlink: "https://github.com/ArunavaCoderEm/Novel-Nest",
    deplink: "https://novelnest-seven.vercel.app",
    auth: "Arunava Dutta",
    desc: "An online bookstore with detailed descriptions of books.",
    used: "ReactJS, TW",
    index: 10,
    maxdesc:
      "A virtual bookstore offering extensive details about books, enabling readers to make informed choices and discover their next favorite reads.",
    speciality: "Comprehensive book details for avid readers.",
     team: ["Arunava Dutta"]
  },
  {
    label: "ScrapeSmart",
    img: "/scr.png",
    type: "Scrapping",
    ghlink: "https://github.com/ArunavaCoderEm/ScrapeSmart",
    deplink: "https://scrapesmart003.streamlit.app/",
    auth: "Arunava Dutta",
    desc: "A website to scrape other website data also with AI prompts.",
    used: "Python, Streamlit",
    index: 11,
    maxdesc:
      "A powerful data scraping platform integrated with AI prompts to streamline data extraction and make analysis more effective and efficient.",
    speciality: "Smart data scraping with AI prompt integration.",
     team: ["Arunava Dutta"]
  },
];
