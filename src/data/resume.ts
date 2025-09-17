export interface ResumeData {
  personal: {
    name: string;
    title: string;
    bio: string;
    email: string;
    linkedin: string;
    github?: string;
    instagram?: string;
    location: string;
  };
  skills: {
    technical: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
    languages: string[];
  };
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    highlights: string[];
    url?: string;
    github?: string;
  }>;
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
    achievements: string[];
    technologies: string[];
  }>;
  hobbies: string[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
    preferredMethod: string;
    availability: string;
  };
}

// Sample data structure - you can update this with your actual resume information
export const resumeData: ResumeData = {
  personal: {
    name: "Akshay Koul",
    title: "Software Engineer",
    bio: "Passionate software engineer with expertise in full-stack development, cloud technologies, and building scalable applications. I love solving complex problems and creating innovative solutions.",
    email: "koul.akshay17@gmail.com",
    linkedin: "https://www.linkedin.com/in/koulakshay/",
    github: "https://github.com/xakoul",
    instagram: "https://www.instagram.com/xa_koul/",
    location: "United States"
  },
  skills: {
    technical: [
      "JavaScript/TypeScript",
      "Python",
      "Java",
      "HTML/CSS",
      "SQL",
      "NoSQL"
    ],
    frameworks: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Spring Boot"
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL"
    ],
    tools: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Git",
      "CI/CD",
      "Terraform"
    ],
    languages: [
      "English (Fluent)",
      "Hindi (Native)"
    ]
  },
  projects: [
    {
      name: "E-commerce Platform",
      description: "A full-stack e-commerce platform with modern UI/UX and secure payment processing",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      highlights: [
        "Built responsive frontend with React and Tailwind CSS",
        "Implemented secure authentication and authorization",
        "Integrated payment processing with Stripe",
        "Deployed on AWS with auto-scaling capabilities"
      ]
    },
    {
      name: "Task Management System",
      description: "A collaborative project management tool with real-time updates",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      highlights: [
        "Real-time collaboration features",
        "Advanced task filtering and search",
        "Role-based access control",
        "Mobile-responsive design"
      ]
    },
    {
      name: "Data Analytics Dashboard",
      description: "Interactive dashboard for visualizing business metrics and KPIs",
      technologies: ["Python", "FastAPI", "React", "D3.js", "PostgreSQL"],
      highlights: [
        "Custom data visualization components",
        "Real-time data processing pipeline",
        "Automated report generation",
        "Performance optimized for large datasets"
      ]
    }
  ],
  experience: [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Software Engineer",
      duration: "2022 - Present",
      description: "Leading full-stack development initiatives and mentoring junior developers",
      achievements: [
        "Led development of microservices architecture serving 100K+ users",
        "Improved application performance by 40% through optimization",
        "Mentored 5+ junior developers and established code review processes",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      company: "Digital Solutions Co.",
      position: "Software Engineer",
      duration: "2020 - 2022",
      description: "Developed and maintained web applications using modern technologies",
      achievements: [
        "Built responsive web applications used by 50K+ users",
        "Integrated third-party APIs and payment systems",
        "Collaborated with cross-functional teams in Agile environment",
        "Reduced bug reports by 30% through comprehensive testing"
      ],
      technologies: ["JavaScript", "Python", "MongoDB", "Express.js"]
    }
  ],
  hobbies: [
    "🎮 Gaming - Enjoy strategy games and indie titles",
    "📚 Reading - Sci-fi novels and tech blogs",
    "🏃‍♂️ Running - Regular marathons and trail running",
    "🎵 Music - Playing guitar and music production",
    "🌱 Gardening - Growing herbs and vegetables",
    "👨‍🍳 Cooking - Experimenting with international cuisines",
    "📷 Photography - Landscape and street photography",
    "🧩 Problem Solving - Competitive programming and puzzles"
  ],
  contact: {
    email: "koul.akshay17@gmail.com",
    linkedin: "https://www.linkedin.com/in/koulakshay/",
    github: "https://github.com/xakoul",
    preferredMethod: "Email or LinkedIn",
    availability: "Open to new opportunities and collaborations"
  }
};

export const suggestedQuestions = [
  "Who is Akshay Koul?",
  "What skills do you have?",
  "What projects have you worked on?",
  "What companies have you worked with?",
  "What are your hobbies?",
  "How can I get in touch with you?"
];