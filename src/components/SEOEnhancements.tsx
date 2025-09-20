'use client';

import { useEffect } from 'react';

export default function SEOEnhancements() {
  useEffect(() => {
    // Add breadcrumb structured data
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://xakoul.com"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Portfolio",
          "item": "https://xakoul.com/"
        }
      ]
    };

    // Add FAQ structured data for common questions
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Akshay Koul's experience?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Akshay Koul is a Software Development Manager with 12+ years of experience in scaling teams and systems to serve 10M+ users. He specializes in engineering leadership, React, Node.js, and AWS."
          }
        },
        {
          "@type": "Question", 
          "name": "What technologies does Akshay Koul work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Akshay Koul works with React, Node.js, TypeScript, AWS, Next.js, microservices architecture, DevOps, and various modern web technologies."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Akshay Koul located?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "Akshay Koul is based in Bengaluru, India and works with global teams and clients."
          }
        }
      ]
    };

    // Add Organization structured data
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Akshay Koul Software Development Services",
      "description": "Professional software development and engineering leadership services",
      "provider": {
        "@type": "Person",
        "name": "Akshay Koul"
      },
      "areaServed": "Worldwide",
      "serviceType": "Software Development"
    };

    // Inject structured data
    const scripts = [breadcrumbData, faqData, organizationData];
    
    scripts.forEach((data, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(data);
      script.id = `structured-data-${index}`;
      
      // Remove existing script if it exists
      const existing = document.getElementById(`structured-data-${index}`);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      scripts.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
}