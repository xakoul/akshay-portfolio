import ChatInterface from '@/components/ChatInterface';
import SEOEnhancements from '@/components/SEOEnhancements';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Akshay Koul - Software Development Manager | Interactive Portfolio",
  description: "Explore Akshay Koul's interactive portfolio. Software Development Manager with 12+ years experience in React, Node.js, AWS, and engineering leadership. Ask me anything about my skills and projects!",
  keywords: [
    "Akshay Koul portfolio",
    "Software Development Manager Bengaluru", 
    "React developer India",
    "Engineering leader portfolio",
    "Interactive portfolio",
    "Chat with developer"
  ],
  openGraph: {
    title: "Akshay Koul - Software Development Manager | Interactive Portfolio",
    description: "Chat with Akshay Koul about his 12+ years of software engineering experience, projects, and leadership journey.",
  }
};

export default function Home() {
  return (
    <>
      {/* SEO Enhancements */}
      <SEOEnhancements />
      
      {/* Hidden SEO content for search engines */}
      <div style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
        <h1>Akshay Koul - Software Development Manager Portfolio</h1>
        <h2>About Akshay Koul</h2>
        <p>
          Akshay Koul is an experienced Software Development Manager based in Bengaluru, India, 
          with over 12 years of experience in scaling engineering teams and systems to serve 
          millions of users. Specialized in React, Node.js, TypeScript, AWS, and engineering leadership.
        </p>
        
        <h2>Skills and Expertise</h2>
        <ul>
          <li>Software Engineering Leadership</li>
          <li>React and Next.js Development</li>
          <li>Node.js and TypeScript</li>
          <li>AWS Cloud Services</li>
          <li>System Architecture and Microservices</li>
          <li>DevOps and CI/CD</li>
          <li>Team Scaling and Performance Management</li>
        </ul>
        
        <h2>Contact Information</h2>
        <p>Connect with Akshay Koul on LinkedIn or GitHub for collaboration opportunities.</p>
      </div>
      
      {/* Main interactive interface */}
      <ChatInterface />
    </>
  );
}
