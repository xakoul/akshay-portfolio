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
    technical: Array<{name: string; icon: string}>;
    frameworks: Array<{name: string; icon: string}>;
    databases: Array<{name: string; icon: string}>;
    tools: Array<{name: string; icon: string}>;
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
    title: "Senior Engineering Manager",
    bio: "Senior Engineering Manager with 13+ years of experience leading high-performing teams and architecting multi-tier web services at scale. Currently at Best Buy India LLP, driving technical strategy across search and suggest platforms. Proven expertise in people management (hiring, mentoring, career development) and system design (HLD/LLD). Successfully scaled engineering teams from the ground up, delivering distributed systems serving 10M+ users while maintaining operational excellence.",
    email: "koul.akshay17@gmail.com",
    linkedin: "https://www.linkedin.com/in/koulakshay/",
    github: "https://github.com/xakoul",
    instagram: "https://www.instagram.com/xa_koul/",
    location: "Bengaluru, India"
  },
  skills: {
    technical: [
      { name: "JavaScript", icon: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" },
      { name: "Python", icon: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" },
      { name: "Java", icon: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" },
      { name: "Clojure", icon: "https://img.shields.io/badge/Clojure-%23Clojure.svg?style=for-the-badge&logo=Clojure&logoColor=Clojure" },
      { name: "Android", icon: "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" },
      { name: "Ruby on Rails", icon: "https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white" },
      { name: "TypeScript", icon: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" },
      { name: "Kotlin", icon: "https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white" },
      { name: "HTML/CSS", icon: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" },
      { name: "SQL", icon: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" },
      { name: "NoSQL", icon: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" }
    ],
    frameworks: [
      { name: "React", icon: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },
      { name: "React Native", icon: "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },
      { name: "Next.js", icon: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" },
      { name: "Node.js", icon: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" },
      { name: "Express.js", icon: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" },
      { name: "FastAPI", icon: "https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" },
      { name: "Spring Boot", icon: "https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" },
      { name: "GraphQL", icon: "https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" },
      { name: "Kafka", icon: "https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka" },
      { name: "RabbitMQ", icon: "https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white" }
    ],
    databases: [
      { name: "PostgreSQL", icon: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" },
      { name: "MongoDB", icon: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" },
      { name: "Redis", icon: "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white" },
      { name: "MySQL", icon: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" },
      { name: "Elasticsearch", icon: "https://img.shields.io/badge/-ElasticSearch-005571?style=for-the-badge&logo=elasticsearch" },
      { name: "Etcd", icon: "https://img.shields.io/badge/etcd-419EDA?style=for-the-badge&logo=etcd&logoColor=white" }
    ],
    tools: [
      { name: "AWS", icon: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" },
      { name: "GCP", icon: "https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white" },
      { name: "Firebase", icon: "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" },
      { name: "Cloudflare", icon: "https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white" },
      { name: "Docker", icon: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" },
      { name: "Chef", icon: "https://img.shields.io/badge/chef-F09820?style=for-the-badge&logo=chef&logoColor=white" },
      { name: "Terraform", icon: "https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white" },
      { name: "Fastlane", icon: "https://img.shields.io/badge/fastlane-00F200?style=for-the-badge&logo=fastlane&logoColor=white" },
      { name: "GitHub", icon: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" },
      { name: "Jira", icon: "https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white" },
      { name: "CircleCI", icon: "https://img.shields.io/badge/circleci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white" },
      { name: "Datadog", icon: "https://img.shields.io/badge/datadog-%23632CA6.svg?style=for-the-badge&logo=datadog&logoColor=white" },
      { name: "Grafana", icon: "https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white" },
      { name: "Dialogflow", icon: "https://img.shields.io/badge/dialogflow-FF9800?style=for-the-badge&logo=dialogflow&logoColor=white" },
      { name: "Vertex AI", icon: "https://img.shields.io/badge/Vertex%20AI-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" },
      { name: "Gemini", icon: "https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" },
      { name: "GitHub Copilot", icon: "https://img.shields.io/badge/GitHub%20Copilot-000000?style=for-the-badge&logo=githubcopilot&logoColor=white" }
    ],
    languages: [
      "English (Fluent)",
      "Hindi (Native)",
      "Kashmiri (Conversational)"
    ]
  },
  projects: [
    {
      name: "Marvin - Jiva offtake platform",
      company: "Jiva Agservices Pvt. Ltd.",
      description: "End-to-end backend and frontend suite for offtake management at Jiva, enabling tracking and management of harvests, farmers, micro-collectors, sales, payments, and cash advances.",
      technologies: ["Ruby on Rails", "GraphQL", "postgreSQL", "React Native", "GCP", "Retool", "Typescript", "kafka", "kubernetes", "Terraform"],
      highlights: [
        "Built end-to-end offtake management platform handling 100K+ farmers and 50K+ transactions monthly",
        "Integrated with payment gateways and financial systems to streamline payments",
        "Developed real-time dashboards for monitoring procurement and logistics",
        "Optimized backend services to handle peak loads during harvest seasons"
        ],
      icon: "https://play-lh.googleusercontent.com/c_sN7hrPzemXE7m0_RP9oNXL5HVSe6Il9van4IBIY2EncTvE9ZNq4q0i1IqS37NmPEM=w240-h480-rw"
    },
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
      technologies: ["Android", "Kotlin", "CI/CD", "Java"],
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
      company: "Best Buy India LLP",
      position: "Senior Engineering Manager",
      duration: "Dec 2025 - Present",
      description: "Best Buy is a leading multinational consumer electronics retailer. The India engineering center drives innovation across search, suggest, and core commerce platforms, building highly scalable systems that power the customer experience for millions of shoppers.",
      achievements: [
        "Lead multiple engineering teams across search and suggest platforms, aligning delivery with business priorities and customer experience outcomes.",
        "Drive technical strategy, architecture decisions, and execution planning for scalable, reliable services handling high-traffic workloads.",
        "Partner closely with product, analytics, and platform teams to deliver cross-functional initiatives with clear ownership and measurable impact.",
        "Strengthened engineering excellence by improving release governance, code quality standards, and incident response practices across teams.",
        "Mentor engineering managers and senior engineers, building leadership depth and fostering a high-accountability culture.",
        "Led modernization and performance initiatives to improve system resiliency, reduce operational risk, and increase delivery predictability."
      ],
      technologies: ["Java", "Spring Boot", "AWS", "Microservices", "Kafka", "Elasticsearch", "CI/CD", "Datadog"],
      url: "https://www.bestbuy.com/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Best_Buy_Logo.svg"
    },
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
        "Mentored junior engineers and conducted technical interviews; led cross-functional teams across geographies.",
        "Designed and optimized high-throughput allocation engine using streaming pipeline architecture.",
        "Implemented multi-tier web service patterns for on-demand logistics platforms.",
        "Established operational excellence: SLA monitoring, KPI tracking, and incident management.",
        "Delivered features cutting launch cycles from 14 to under 4 days — a 71% reduction.",
        "Optimized allocation engine (streaming pipeline) to improve SLA compliance by 30%."
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
        "Built and scaled engineering team from 0 to 8+ developers; established mentorship programs, code reviews, and technical design discussions.",
        "Architected multi-tenant microservices platform supporting 10M+ monthly active users with 99.9% uptime.",
        "Designed Type 2 greenfield architecture for content management and analytics systems.",
        "Led technical design for in-house SDK and App Engine powering 20+ media publisher applications.",
        "Reduced publisher app launch time from 30+ days to under 2 weeks.",
        "Optimized story editor, cutting load time by 65% (3.5s → 1.2s) and increasing engagement by 20%."
      ],
      technologies: ["Android", "Kotlin", "Clojure", "React", "Node.js", "Kubernetes", "Microservices"],
      url: "https://www.quintype.com/",
      icon: "https://res.cloudinary.com/apideck/image/upload/v1554827336/catalog/quintype/icon128x128.png"
    },
    {
      company: "Leftshift Technologies",
      position: "Software Development Engineer",
      duration: "Sep 2013 - Nov 2015",
      description: "LeftShift Technologies is a Pune-based mobile and web app development company specializing in iOS, Android, and Node.js. They help startups and enterprises build, improve, and scale digital products with a strong focus on design, user experience, and functionality, having delivered 200+ projects across industries since 2007." ,
      achievements: [
        "Developed and optimized applications for BookMyShow, Byju’s, and Faasos with 5M+ downloads.",
        "Designed features handling 100K+ concurrent users; maintained 4.5+ average store rating.",
        "Optimized application performance, reducing bundle size by 30%.",
        "Collaborated with product teams to gather requirements and deliver customer value."
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
    availability: "Open to collaborations, speaking engagements, and advisory roles"
  }
};

export const suggestedQuestions = [
  "Who is Akshay Koul?",
  "What skills do you have?",
  "What projects have you worked on?",
  "What companies have you worked with?",
  "What are your hobbies?",
  "How can I get in touch with you?",
  "Tell me a dad joke"
];