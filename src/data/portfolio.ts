export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  progress: number;
}

export interface Experience {
  role: string;
  company: string;
  logo: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    description: string;
    email: string;
    resumeUrl: string;
    location: string;
    avatarImages: {
      laptop: string;
      wave: string;
    };
  };
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
  skills: {
    title: string;
    description: string;
    categories: SkillCategory[];
    highlights: string[];
  };
  education: {
    school: string;
    degree: string;
    duration: string;
    logo: string;
    description: string;
    achievements: string[];
  };
  experience: Experience[];
  projects: Project[];
}

// export const portfolioData: PortfolioData = {
//   personal: {
//     name: "Yassin Hesham",
//     title: "Junior Data Scientist by day, AI Engineer by night",
//     description: "I train models, break stuff, then train them better. Fueled by coffee, curiosity, and occasional StackOverflow breakdowns. Let's make machines smarter—before they make fun of us!",
//     email: "yaseen2003@yahoo.com",
//     resumeUrl: "https://drive.google.com/file/d/1yWn10QLSCYmwKa8U8duF49QlYTOeu_5r/view?usp=sharing",
//     location: "Cairo, Egypt",
//     avatarImages: {
//       laptop: "/portfolio/images/avatar-laptop.svg",
//       wave: "/portfolio/images/avatar-wave.svg"
//     }
//   },

//   socialLinks: {
//     github: "https://github.com/CorrosiveMoon",
//     linkedin: "https://www.linkedin.com/in/yassin-fwazz-a25615230/",
//     email: "yaseen2003@yahoo.com"
//   },

//   skills: {
//     title: "What I Do",
//     description: "AI Engineer/Data Scientist on a mission to make machines smarter and data more useful. I design intelligent systems, build deep learning models, and automate pipelines — all with a few lines of Python (and occasional memes).",
//     categories: [
//       {
//         title: "AI & Machine Learning",
//         skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
//         progress: 90
//       },
//       {
//         title: "Data Engineering & Analysis",
//         skills: ["SQL", "NoSQL", "MongoDB", "Power BI", "Data Pipelines"],
//         progress: 85
//       },
//       {
//         title: "Backend Development",
//         skills: ["Flask", "Django", "FastAPI", "REST APIs"],
//         progress: 80
//       },
//       {
//         title: "AI Systems",
//         skills: ["LangChain", "RAG Systems", "Vector Databases", "LLMs"],
//         progress: 80
//       },
//       {
//         title: "Frontend & Dashboards",
//         skills: ["Streamlit", "HTML/CSS", "JavaScript", "Data Visualization"],
//         progress: 65
//       }
//     ],
//     highlights: [
//       "🤖 Build and deploy robust ML & Deep Learning models for real-world applications",
//       "📦 Design end-to-end AI pipelines from data ingestion to prediction",
//       "🧠 Experiment with RAGs, LLMs, LangChain, and vector databases to bring context-aware AI to life",
//       "💻 Develop backend APIs and data services using Python, Flask, and Django"
//     ]
//   },

//   education: {
//     school: "New Giza University",
//     degree: "BSc in Artificial Intelligence and Data Science",
//     duration: "October 2021 – June 2025",
//     logo: "/portfolio/images/ngulogo.webp",
//     description: "Pursuing my undergraduate studies with a strong foundation in AI, software engineering, and data science. My academic journey has been complemented by real-world technical projects, leadership in student governance, and impactful volunteer roles.",
//     achievements: [
//       "Led as Student Union President for the School of IT, driving collaboration and peer support initiatives",
//       "Built full-stack data projects and UIs as part of software engineering and deep learning courses",
//       "Developed and deployed machine learning models and dashboards in academic and extracurricular projects",
//       "Event Team Leader for the Cap & Gown ceremony (Mar 2024): Led 30+ members, managed logistics, and coordinated vendor engagement",
//       "Volunteered in New Student Orientation (Sep 2022): Introduced new students to university life and organized onboarding activities"
//     ]
//   },

//   experience: [
//     {
//       role: "Data Scientist / ML Engineer",
//       company: "DSquares",
//       logo: "/portfolio/images/dsquareslogo.webp",
//       duration: "July 2023 – September 2023",
//       description: "Developed a machine learning model for predicting customer age groups based on behavioral data from loyalty programs and coupon usage.",
//       achievements: [
//         "Engineered features and cleaned data using statistical techniques for accuracy and reliability",
//         "Categorized merchants into groups like Fashion, Health & Beauty, Accessories, etc.",
//         "Built an RFM table to identify insights into customer value and behavior"
//       ]
//     },
//     {
//       role: "Data/Software Engineer",
//       company: "NGU Alumni Office",
//       logo: "/portfolio/images/ngulogo.webp",
//       duration: "2024 – Present",
//       description: "Designed a custom alumni data portal enabling NGU staff to manage and interact with alumni information effectively.",
//       achievements: [
//         "Built and deployed an internal Streamlit dashboard connected to MongoDB",
//         "Enabled querying alumni profiles, including profile images and contact information",
//         "Improved data accessibility and reduced manual overhead for alumni coordination tasks"
//       ]
//     }
//   ],

//   projects: [
//     {
//       title: "Tennis Analysis",
//       description: "Tracks player and ball movement in tennis videos using YOLOv8. Extracts court keypoints and visualizes trajectories. Built with Ultralytics, PyTorch, and OpenCV.",
//       image: "/portfolio/images/tennis-logo.png",
//       technologies: ["Python", "YOLOv8", "PyTorch", "OpenCV", "Computer Vision"],
//       github: "https://github.com/CorrosiveMoon/Tennis-Analysis",
//       featured: true
//     },
//     {
//       title: "RAG Python Tutor Chatbot",
//       description: "Retrieval-Augmented Generation chatbot that answers Python queries with context awareness. Uses LangChain, Chroma, Streamlit, and OpenAI.",
//       image: "/portfolio/images/chatbotlogo.jpg",
//       technologies: ["LangChain", "Chroma", "Streamlit", "OpenAI", "RAG"],
//       featured: true
//     },
//     {
//       title: "Premier League Dashboard",
//       description: "Query and explore Premier League data using MongoDB, a football API, and a Streamlit frontend. Stats-driven fan heaven.",
//       image: "/portfolio/images/premierleaguelogo.png",
//       technologies: ["MongoDB", "Streamlit", "REST API", "Data Visualization"],
//       github: "https://github.com/CorrosiveMoon/Premier-League-Statistics",
//       featured: true
//     },
//     {
//       title: "TailorED (LMS)",
//       description: "Graduation project: an AI-powered Learning Management System with features like personalized paths, virtual mentors, quiz adaptation, summarization, and smart content search.",
//       image: "/portfolio/images/TailoredLogo.png",
//       technologies: ["AI", "LMS", "Personalization", "Machine Learning"],
//       featured: true
//     }
//   ]
// };


// Helper function to get the correct image path
const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  return `${basePath}${path}`;
};

export const portfolioData: PortfolioData = {
  personal: {
    name: "Yassin Hesham",
    title: "Junior Data Scientist by day, AI Engineer by night",
    description: "I train models, break stuff, then train them better. Fueled by coffee, curiosity, and occasional StackOverflow breakdowns. Let's make machines smarter—before they make fun of us!",
    email: "yaseen2003@yahoo.com",
    resumeUrl: "https://drive.google.com/file/d/1yWn10QLSCYmwKa8U8duF49QlYTOeu_5r/view?usp=sharing",
    location: "Cairo, Egypt",
    avatarImages: {
      laptop: getImagePath("/images/avatar-laptop.svg"),
      wave: getImagePath("/images/avatar-wave.svg")
    }
  },

  socialLinks: {
    github: "https://github.com/CorrosiveMoon",
    linkedin: "https://www.linkedin.com/in/yassin-fwazz-a25615230/",
    email: "yaseen2003@yahoo.com"
  },

  skills: {
    title: "What I Do",
    description: "AI Engineer/Data Scientist on a mission to make machines smarter and data more useful. I design intelligent systems, build deep learning models, and automate pipelines — all with a few lines of Python (and occasional memes).",
    categories: [
      {
        title: "AI & Machine Learning",
        skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
        progress: 90
      },
      {
        title: "Data Engineering & Analysis",
        skills: ["SQL", "NoSQL", "MongoDB", "Power BI", "Data Pipelines"],
        progress: 85
      },
      {
        title: "Backend Development",
        skills: ["Flask", "Django", "FastAPI", "REST APIs"],
        progress: 80
      },
      {
        title: "AI Systems",
        skills: ["LangChain", "RAG Systems", "Vector Databases", "LLMs"],
        progress: 80
      },
      {
        title: "Frontend & Dashboards",
        skills: ["Streamlit", "HTML/CSS", "JavaScript", "Data Visualization"],
        progress: 65
      }
    ],
    highlights: [
      "🤖 Build and deploy robust ML & Deep Learning models for real-world applications",
      "📦 Design end-to-end AI pipelines from data ingestion to prediction",
      "🧠 Experiment with RAGs, LLMs, LangChain, and vector databases to bring context-aware AI to life",
      "💻 Develop backend APIs and data services using Python, Flask, and Django"
    ]
  },

  education: {
    school: "New Giza University",
    degree: "BSc in Artificial Intelligence and Data Science",
    duration: "October 2021 – June 2025",
    logo: getImagePath("/images/ngulogo.webp"),
    description: "Pursuing my undergraduate studies with a strong foundation in AI, software engineering, and data science. My academic journey has been complemented by real-world technical projects, leadership in student governance, and impactful volunteer roles.",
    achievements: [
      "Led as Student Union President for the School of IT, driving collaboration and peer support initiatives",
      "Built full-stack data projects and UIs as part of software engineering and deep learning courses",
      "Developed and deployed machine learning models and dashboards in academic and extracurricular projects",
      "Event Team Leader for the Cap & Gown ceremony (Mar 2024): Led 30+ members, managed logistics, and coordinated vendor engagement",
      "Volunteered in New Student Orientation (Sep 2022): Introduced new students to university life and organized onboarding activities"
    ]
  },

  experience: [
    {
      role: "Data Scientist / ML Engineer",
      company: "DSquares",
      logo: getImagePath("/images/dsquareslogo.webp"),
      duration: "July 2023 – September 2023",
      description: "Developed a machine learning model for predicting customer age groups based on behavioral data from loyalty programs and coupon usage.",
      achievements: [
        "Engineered features and cleaned data using statistical techniques for accuracy and reliability",
        "Categorized merchants into groups like Fashion, Health & Beauty, Accessories, etc.",
        "Built an RFM table to identify insights into customer value and behavior"
      ]
    },
    {
      role: "Data/Software Engineer",
      company: "NGU Alumni Office",
      logo: getImagePath("/images/ngulogo.webp"),
      duration: "2024 – Present",
      description: "Designed a custom alumni data portal enabling NGU staff to manage and interact with alumni information effectively.",
      achievements: [
        "Built and deployed an internal Streamlit dashboard connected to MongoDB",
        "Enabled querying alumni profiles, including profile images and contact information",
        "Improved data accessibility and reduced manual overhead for alumni coordination tasks"
      ]
    }
  ],

  projects: [
    {
      title: "Tennis Analysis",
      description: "Tracks player and ball movement in tennis videos using YOLOv8. Extracts court keypoints and visualizes trajectories. Built with Ultralytics, PyTorch, and OpenCV.",
      image: getImagePath("/images/tennis-logo.png"),
      technologies: ["Python", "YOLOv8", "PyTorch", "OpenCV", "Computer Vision"],
      github: "https://github.com/CorrosiveMoon/Tennis-Analysis",
      featured: true
    },
    {
      title: "RAG Python Tutor Chatbot",
      description: "Retrieval-Augmented Generation chatbot that answers Python queries with context awareness. Uses LangChain, Chroma, Streamlit, and OpenAI.",
      image: getImagePath("/images/chatbotlogo.jpg"),
      technologies: ["LangChain", "Chroma", "Streamlit", "OpenAI", "RAG"],
      featured: true
    },
    {
      title: "Premier League Dashboard",
      description: "Query and explore Premier League data using MongoDB, a football API, and a Streamlit frontend. Stats-driven fan heaven.",
      image: getImagePath("/images/premierleaguelogo.png"),
      technologies: ["MongoDB", "Streamlit", "REST API", "Data Visualization"],
      github: "https://github.com/CorrosiveMoon/Premier-League-Statistics",
      featured: true
    },
    {
      title: "TailorED (LMS)",
      description: "Graduation project: an AI-powered Learning Management System with features like personalized paths, virtual mentors, quiz adaptation, summarization, and smart content search.",
      image: getImagePath("/images/TailoredLogo.png"),
      technologies: ["AI", "LMS", "Personalization", "Machine Learning"],
      featured: true
    }
  ]
};