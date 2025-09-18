import { resumeData } from '@/data/resume';

export function generateResponse(question: string): string {
  const lowerQuestion = question.toLowerCase();

  // Who is Akshay Koul?
  if (lowerQuestion.includes('who is akshay') || lowerQuestion.includes('about akshay') || lowerQuestion.includes('tell me about')) {
    return `[icon:/avatar.jpg] **${resumeData.personal.name}**
**${resumeData.personal.title}** - ${resumeData.personal.location}

${resumeData.personal.bio}

I have experience working with companies like ${resumeData.experience.map(exp => exp.company).join(', ')}, and I'm passionate about building innovative software solutions that make a real impact.

You can find my work on [GitHub](${resumeData.personal.github}) and connect with me on [LinkedIn](${resumeData.personal.linkedin}).

Feel free to ask me about my skills, projects, or anything else you'd like to know!`;
  }

  // Skills
  if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology') || lowerQuestion.includes('tech stack')) {
    return `I have a diverse skill set spanning multiple areas of software development:

**Programming Languages:**
${resumeData.skills.technical.map(skill => `• ${skill}`).join('\n')}

**Frameworks & Libraries:**
${resumeData.skills.frameworks.map(framework => `• ${framework}`).join('\n')}

**Databases:**
${resumeData.skills.databases.map(db => `• ${db}`).join('\n')}

**Tools & Platforms:**
${resumeData.skills.tools.map(tool => `• ${tool}`).join('\n')}

I'm always learning new technologies and staying up-to-date with industry trends. Is there a specific technology you'd like to know more about?`;
  }

  // Handle "Tell me more about" requests for projects and companies
  if (lowerQuestion.includes('tell me more about')) {
    let entityName = '';
    
    // Check if it's asking about work at a company
    if (lowerQuestion.includes('your work at')) {
      entityName = lowerQuestion.replace('tell me more about your work at', '').trim();
      
      const specificCompany = resumeData.experience.find(exp => 
        exp.company.toLowerCase().includes(entityName.toLowerCase())
      );

      if (specificCompany) {
        return `[icon:${specificCompany.icon || ''}] **${specificCompany.company}**
${specificCompany.position} (${specificCompany.duration})

${specificCompany.description}

**Technologies Used:** ${specificCompany.technologies.join(', ')}

**Key Achievements:**
${specificCompany.achievements.map(achievement => `• ${achievement}`).join('\n')}

${specificCompany.url ? `🌐 **Visit Website:** [${specificCompany.company}](${specificCompany.url})` : ''}`;
      }
    } else {
      // Regular "Tell me more about" for projects
      entityName = lowerQuestion.replace('tell me more about', '').trim();
      
      const specificProject = resumeData.projects.find(project => 
        project.name.toLowerCase().includes(entityName.toLowerCase())
      );

      if (specificProject) {
        return `[icon:${specificProject.icon || ''}] **${specificProject.name}**
${specificProject.company ? `${specificProject.company}` : 'Independent Project'}

${specificProject.description}

**Technologies Used:** ${specificProject.technologies.join(', ')}

**Key Contributions:**
${specificProject.highlights.map(highlight => `• ${highlight}`).join('\n')}

${specificProject.url ? `🌐 **Visit Website:** [${specificProject.name}](${specificProject.url})` : ''}
${specificProject.github ? `🐙 **GitHub:** [View Code](${specificProject.github})` : ''}`;
      }
    }
  }

  // Companies/Experience - Check this BEFORE projects since both use 'worked'
  if (lowerQuestion.includes('company') || lowerQuestion.includes('companies') || lowerQuestion.includes('experience')) {
    return `I've had the privilege of working with some great companies throughout my career:

${resumeData.experience.map(exp => `
[icon:${exp.icon || ''}] **${exp.company}**
${exp.position} (${exp.duration})

${exp.description}

${exp.url ? `🌐 [Visit Website](${exp.url})` : ''} [📋 Highlights](company:${exp.company})
`).join('\n')}

Click on "Highlights" to learn more about the key achievements and technical details for each company!`;
  }

  // Projects
  if (lowerQuestion.includes('project') || lowerQuestion.includes('work') || lowerQuestion.includes('built') || lowerQuestion.includes('portfolio')) {
    // Show compact project list with icons
    return `I've worked on several exciting projects across different domains:

${resumeData.projects.map(project => `
[icon:${project.icon || ''}] **${project.name}**
${project.company ? `${project.company}` : 'Independent Project'}

${project.description}

${project.url ? `🌐 [Visit Website](${project.url})` : ''} [📋 Highlights](project:${project.name})
`).join('\n')}

Click on "Highlights" to learn more about the key contributions and technical details for each project!`;
  }

  // Hobbies
  if (lowerQuestion.includes('hobby') || lowerQuestion.includes('hobbies') || lowerQuestion.includes('interests') || lowerQuestion.includes('fun') || lowerQuestion.includes('free time')) {
    return `When I'm not coding, I enjoy a variety of activities that keep me balanced and inspired:

${resumeData.hobbies.map(hobby => `• ${hobby}`).join('\n')}

These hobbies help me stay creative, maintain work-life balance, and often inspire new approaches to problem-solving in my professional work. Many of my best coding insights come during runs or while playing music!

What hobbies do you enjoy?`;
  }

  // Contact
  if (lowerQuestion.includes('contact') || lowerQuestion.includes('reach') || lowerQuestion.includes('touch') || lowerQuestion.includes('email') || lowerQuestion.includes('connect')) {
    return `I'd love to connect with you! Here are the best ways to reach me:

📧 **Email:** [${resumeData.contact.email}](mailto:${resumeData.contact.email})
💼 **LinkedIn:** [${resumeData.contact.linkedin}](${resumeData.contact.linkedin})
🐙 **GitHub:** [${resumeData.contact.github}](${resumeData.contact.github})

**Preferred Method:** ${resumeData.contact.preferredMethod}

**Availability:** ${resumeData.contact.availability}

Whether you're interested in collaboration, have questions about my work, or just want to chat about technology, feel free to reach out. I typically respond within 24 hours and I'm always excited to meet new people in the tech community!`;
  }

  // Default response
  return `That's an interesting question! I'd be happy to help you learn more about me. Here are some things you might want to ask about:

• **Who is Akshay Koul?** - Learn about my background and journey
• **What skills do you have?** - Explore my technical expertise
• **What projects have you worked on?** - Discover my portfolio
• **What companies have you worked with?** - See my professional experience
• **What are your hobbies?** - Find out what I do for fun
• **How can I get in touch with you?** - Connect with me

Feel free to ask me anything else - I'm here to help!`;
}

export function getRandomSuggestion(): string {
  const suggestions = [
    "Tell me about your experience with React",
    "What's your favorite project you've worked on?",
    "How did you get started in software engineering?",
    "What technologies are you most excited about?",
    "What's your approach to problem-solving?",
    "Tell me about your leadership experience",
    "What motivates you as a developer?",
    "How do you stay updated with new technologies?"
  ];
  
  return suggestions[Math.floor(Math.random() * suggestions.length)];
}