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
    company?: string;
    description: string;
    technologies: string[];
    highlights: string[];
    url?: string;
    github?: string;
    icon?: string;
  }>;
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
    achievements: string[];
    technologies: string[];
    url?: string;
    icon?: string;
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
    title: "Software Development Manager",
    bio: "Engineering leader with 12+ years of experience scaling teams and systems to serve 10M+ users. Proven track record in building high-performance cultures, optimizing cloud costs, and launching innovative products at speed.",
    email: "koul.akshay17@gmail.com",
    linkedin: "https://www.linkedin.com/in/koulakshay/",
    github: "https://github.com/xakoul",
    instagram: "https://www.instagram.com/xa_koul/",
    location: "Bengaluru, India"
  },
  skills: {
    technical: [
      "JavaScript",
      "Python",
      "Java",
      "Clojure",
      "Android",
      "Ruby on Rails",
      "TypeScript",
      "Kotlin",
      "HTML/CSS",
      "SQL",
      "NoSQL"
    ],
    frameworks: [
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Spring Boot",
      "GraphQL",
      "Kafka",
      "RabbitMQ",
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "Elasticsearch",
      "Etcd"
    ],
    tools: [
      "AWS",
      "GCP",
      "Firebase",
      "Cloudflare",
      "Docker",
      "Chef",
      "Terraform",
      "Fastlane",
      "GitHub",
      "Jira",
      "CircleCI",
      "Datadog",
      "Grafana"
    ],
    languages: [
      "English (Fluent)",
      "Hindi (Native)",
      "Kashmiri (Conversational)"
    ]
  },
  projects: [
    {
      name: "AgriCentral",
      company: "Jiva Agservices Pvt. Ltd.",
      description: "A free digital platform empowering over 10M farmers with market insights, personalized crop plans, weather forecasts, and pest diagnosis using satellite imagery, ML, and big data.",
      technologies: ["Android", "Kotlin", "Jetpack Compose", "Firebase", "Java", "Spring Boot", "Ruby on Rails", "CI/CD"],
      highlights: [
        "Scaled app to 10M farmers, improving crash-free sessions from 96.4% → 99.95%",
        "Reduced crashes per 10K sessions from 540 → 3.4, boosting engagement by 21%",
        "Migrated 26 microservices from Azure to GCP in 2 months with <30 minutes downtime",
        "Increased deployment speed by 25% while cutting cloud costs by 22.9%"
      ],
      url: "https://play.google.com/store/apps/details?id=com.globalagricentral&hl=en_IN",
      icon: "https://play-lh.googleusercontent.com/ETuV7ebLduaMBCVHSWxMDxmYruKrjeSnJWcU_DZ4hCZLyqeBXf72V7-NOv4kW4dBI-U=w240-h480-rw"
    },
    {
      name: "Jiva lite WhatsApp Chatbot",
      company: "Jiva Agservices Pvt. Ltd.",
      description: "Built an AI-powered WhatsApp chatbot in Bahasa for Indonesian farmers, streamlining harvest booking.",
      technologies: ["Dialogflow", "Vertex AI", "WhatsApp API"],
      highlights: [
        "Reduced booking time by 64%",
        "Improved customer experience",
        "Delivered multilingual AI solution at scale"
      ],
      url: "https://www.jivapetani.co.id/en/jivalite",
      icon: "https://play-lh.googleusercontent.com/c_sN7hrPzemXE7m0_RP9oNXL5HVSe6Il9van4IBIY2EncTvE9ZNq4q0i1IqS37NmPEM=w240-h480-rw"
    },
    {
      name: "Quintype Android SDK",
      company: "Quintype Technologies",
      description: "Developed in-house Android SDK and App Engine, reducing publisher app go-live time from 30+ days to under 2 weeks, powering 20+ media apps.",
      technologies: ["Android", "Java", "Kotlin", "CI/CD"],
      highlights: [
        "Reduced app launch cycle from 30+ days to < 2 weeks",
        "Powered 20+ publisher apps",
        "Improved scalability and onboarding speed"
      ],
      icon: "https://res.cloudinary.com/apideck/image/upload/v1554827336/catalog/quintype/icon128x128.png"
    },
    {
      name: "ALICE - Allocation Service",
      company: "Gojek Tech. India Pvt. Ltd.",
      description: "An orchestration tool at Gojek for matching drivers with customers, managing complete allocation flows and improving SLA compliance.",
      technologies: ["Clojure", "Redis", "Kafka", "PostgreSQL"],
      highlights: [
        "Balanced competing stakeholder priorities while focusing on customer value",
        "Led cross-functional projects across teams and geographies",
        "Established monitoring, incident management, and post-mortem processes",
        "Cut launch cycles from 14 → under 4 days, accelerating time-to-market by 71%",
        "Boosted partner onboarding speed by 50%",
        "Optimized allocation engine, improving request matching by 30% and reducing failures by 30%"
      ],
      url: "https://www.gojek.io/blog/how-gojek-manages-1-million-drivers-with-12-engineers-part-1",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-s8SpqNhuJNyZ4zb8szuRSdXhB9BDcuRmag&s"
    },
    {
      name: "BOLD - Content Management Platform",
      company: "Quintype Technologies",
      description: "A data-driven CMS powering media publications like The Quint, Swarajya, and National Herald to create, curate, and monetize content.",
      technologies: ["Clojure", "Redis", "Kafka", "PostgreSQL"],
      highlights: [
        "Built and scaled core platform and Android team to 8+ developers",
        "Reduced release cycle from 2 weeks → 3 days via CI/CD pipelines and code review workflows",
        "Designed and deployed microservices with 99.9% uptime serving 10M+ MAUs",
        "Optimized story editor with windowing, cutting load time by 65% and increasing engagement by 20%"
      ],
      url: "https://blog.quintype.com/product/bold-cms-explained-3-reasons-to-go-bold",
      icon: "https://i.postimg.cc/63LzGttw/Bold.png"
    },
    {
      name: "The Quint app",
      company: "Quintype Technologies",
      description: "The Quint is a digital-first news & views platform in India, delivering credible, interactive storytelling across politics, policy, gender, entertainment, sports, health, climate & more.",
      technologies: ["Android", "Kotlin", "CI/CD", "Jav"],
      highlights: ["Offers mobile-friendly content: articles, videos, explainers, and citizen journalism.",
        "Runs fact-checking through WebQoof to combat misinformation.",
        "Encourages reader participation via My Report, giving users a voice in reporting.",
        "Features investigative & long-form journalism, along with special projects that address social issues."
      ],
      url: "https://play.google.com/store/apps/details?id=com.thequint.mobile.android&hl=en_IN",
      icon: "https://play-lh.googleusercontent.com/oC0sc87f3WSww7bVN1g7UiDjChK4HL3ImhGqu9UewVHI5-P9ki6vlS1T6vdls2cU4SyZ=w480-h960-rw"
    }
  ],
  experience: [
    {
      company: "Jiva Agservices Pvt. Ltd.",
      position: "Software Development Manager",
      duration: "Jun 2022 - Sep 2025",
      description: "Jiva is an AgTech company backed by Olam International that empowers smallholder farmers in Indonesia, India, and Singapore. Founded in 2020, it provides digital advisory, access to quality inputs, micro-financing, and transparent crop procurement through mobile platforms and local networks, helping farmers improve yields, incomes, and sustainability at scale.",
      achievements: [
        "Led engineering teams and built scalable solutions serving 10M+ users.",
        "Scaled engineering team to 17+ developers and QA engineers",
        "Improved app stability to 99.95% crash-free sessions",
        "Migrated 26 microservices from Azure to GCP with less than 30 minutes downtime",
        "Cut cloud costs by 22.9% while increasing deployment speed by 25%",
        "Launched Jiva lite WhatsApp chatbot reducing booking time by 64%"
      ],
      technologies: ["Java", "Android", "Ruby on Rails","GraphQL", "GCP", "Kotlin", "React", "React Native", "Kubernetes", "Microservices", "Dialogflow" , "AI/ML"],
      url: "https://www.jiva.ag/",
      icon: "https://play-lh.googleusercontent.com/c_sN7hrPzemXE7m0_RP9oNXL5HVSe6Il9van4IBIY2EncTvE9ZNq4q0i1IqS37NmPEM=w240-h480-rw"
    },
    {
      company: "Gojek Tech. India Pvt. Ltd.",
      position: "Senior Software Engineer L3",
      duration: "Dec 2020 - May 2022",
      description: "Gojek is a leading Indonesian super app, part of the GoTo Group, that provides a wide range of on-demand services including ride-hailing, food and grocery delivery, logistics, digital payments, and more. Founded in 2010, it connects millions of users, driver-partners, and merchants across Southeast Asia through a single integrated platform.",
      achievements: [
        "Developed and maintained web applications using modern technologies",
        "Built responsive web applications used by 50K+ users",
        "Integrated third-party APIs and payment systems",
        "Collaborated with cross-functional teams in Agile environment",
        "Reduced bug reports by 30% through comprehensive testing"
      ],
      technologies: ["Clojure", "Python", "Postgres", "Kafka", "Etcd"],
      url: "https://www.gojek.io/",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-s8SpqNhuJNyZ4zb8szuRSdXhB9BDcuRmag&s"
    },
    {
      company: "Quintype Technologies",
      position: "Senior Software Engineer",
      duration: "Nov 2015 - Dec 2020",
      description: "Quintype Technologies is a media-tech company offering a digital-first publishing platform (DXP) that helps publishers create, distribute, and monetise content. They support CMS, paywalls, engagement tools, editorial AI and mobile apps. Over 300 publishers handle ~1.5 billion pageviews/month using their platform.",
      achievements: [
        "Built and scaled Android and backend teams, powering media platforms.",
        "Scaled core engineering team to 8+ developers",
        "Cut release cycle from 2 weeks → 3 days via CI/CD",
        "Powered 20+ publisher apps via in-house SDK & App Engine",
        "Achieved 99.9% uptime serving 10M+ MAUs",
        "Cut story editor load time by 65%, boosting engagement by 20%"
      ],
      technologies: ["Android", "Kotlin", "Clojure", "React", "Node.js", "Kubernetes", "Microservices"],
      url: "https://www.quintype.com/",
      icon: "https://res.cloudinary.com/apideck/image/upload/v1554827336/catalog/quintype/icon128x128.png"
    },
    {
      company: "Leftshift Technologies",
      position: "Android Developer",
      duration: "Sep 2013 - Nov 2015",
      description: "LeftShift Technologies is a Pune-based mobile and web app development company specializing in iOS, Android, and Node.js. They help startups and enterprises build, improve, and scale digital products with a strong focus on design, user experience, and functionality, having delivered 200+ projects across industries since 2007." ,
      achievements: [
        "Developed and optimized Android apps like BookMyShow, Byju’s, and Faasos.",
        "Achieved 5M+ downloads with 4.5+ rating across stores",
        "Optimized apps to handle 100K+ concurrent users",
        "Reduced app bundle size by 30%",
        "Eliminated UI lag on low-memory devices"
      ],
      technologies: ["Java", "Android", "Kotlin"],
      url: "https://leftshift.io/",
      icon: "https://i.postimg.cc/c4DfvTtv/leftshift.png"
    }
  ],
  hobbies: [
    "🎮 Gaming - Enjoy strategy games and indie titles",
    "📚 Reading - Sci-fi, Fantasy novels and tech blogs",
    "🎵 Music - Listening to old bollywood and rock classics",
    "👨‍🍳 Cooking - Experimenting with cuisines from different parts of India",
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