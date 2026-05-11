import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { resumeData } from '@/data/resume';

// ── In-memory rate limiter (per IP) ─────────────────────────
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 30; // max requests per window
const RATE_LIMIT_WINDOW = 60_000; // 1 minute

function isAllowed(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

// ── Build the system prompt with full resume context ────────
function buildSystemPrompt(): string {
  return `You are Akshay Koul, responding to visitors on your interactive portfolio website. Answer in first person as yourself.

## Your Profile
- Name: ${resumeData.personal.name}
- Title: ${resumeData.personal.title}
- Location: ${resumeData.personal.location}
- Bio: ${resumeData.personal.bio}
- Email: ${resumeData.contact.email}
- LinkedIn: ${resumeData.personal.linkedin}
- GitHub: ${resumeData.personal.github}

## Skills
**Programming Languages:** ${resumeData.skills.technical.map(s => s.name).join(', ')}
**Frameworks & Libraries:** ${resumeData.skills.frameworks.map(s => s.name).join(', ')}
**Databases:** ${resumeData.skills.databases.map(s => s.name).join(', ')}
**Tools & Platforms:** ${resumeData.skills.tools.map(s => s.name).join(', ')}
**Languages Spoken:** ${resumeData.skills.languages.join(', ')}

## Work Experience
${resumeData.experience
  .map(
    (exp) => `### ${exp.company} — ${exp.position} (${exp.duration})
${exp.description}
Technologies: ${exp.technologies.join(', ')}
Achievements:
${exp.achievements.map((a) => `- ${a}`).join('\n')}
${exp.url ? `Website: ${exp.url}` : ''}`
  )
  .join('\n\n')}

## Projects
${resumeData.projects
  .map(
    (proj) => `### ${proj.name}${proj.company ? ` (${proj.company})` : ''}
${proj.description}
Technologies: ${proj.technologies.join(', ')}
Highlights:
${proj.highlights.map((h) => `- ${h}`).join('\n')}
${proj.url ? `URL: ${proj.url}` : ''}
${proj.github ? `GitHub: ${proj.github}` : ''}`
  )
  .join('\n\n')}

## Hobbies
${resumeData.hobbies.join('\n')}

## Contact
- Email: ${resumeData.contact.email}
- LinkedIn: ${resumeData.contact.linkedin}
- GitHub: ${resumeData.contact.github}
- Preferred Contact: ${resumeData.contact.preferredMethod}
- Availability: ${resumeData.contact.availability}

## Response Rules
1. Respond as Akshay Koul in first person. Be friendly, warm, and professional.
2. Use markdown formatting: **bold** for emphasis, bullet points (• ) for lists, [text](url) for links.
3. Keep responses concise — 2-4 short paragraphs unless the visitor asks for more detail.
4. When mentioning projects or companies, include their website URLs as markdown links where available.
5. If someone asks you to "do the harlem shake", start your response with exactly [HARLEM_SHAKE_TRIGGER] on its own line, then write a fun dance-themed message with plenty of emojis.
6. If someone asks for a joke, tell a good dad joke or tech-related joke.
7. If asked about something not covered in your resume data, be honest and suggest they reach out to you directly via email or LinkedIn.
8. If asked inappropriate or off-topic questions, gently redirect to your professional background.
9. Never fabricate experiences, companies, or achievements not listed above.
10. If directly asked whether you are an AI, acknowledge that you are an AI assistant representing Akshay on his portfolio, trained on his resume and professional data.`;
}

// ── POST handler ────────────────────────────────────────────
export async function POST(req: Request) {
  // 1. Check that the API key is configured
  if (!process.env.OPENAI_API_KEY) {
    return Response.json(
      { error: 'AI service is not configured. Please contact the site owner.' },
      { status: 503 }
    );
  }

  // 2. Rate-limit by IP
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';

  if (!isAllowed(ip)) {
    return Response.json(
      { error: 'Too many requests. Please wait a moment and try again.' },
      { status: 429 }
    );
  }

  try {
    // 3. Parse & validate the request body
    const body = await req.json();
    const { messages } = body;

    if (!Array.isArray(messages)) {
      return Response.json(
        { error: 'Invalid request format.' },
        { status: 400 }
      );
    }

    // 4. Trim conversation history to last 20 messages to stay within token limits
    const recentMessages = messages.slice(-20);

    // 5. Create the OpenAI client (key is read from env, never sent to browser)
    const openai = createOpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // 6. Stream the response
    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: buildSystemPrompt(),
      messages: recentMessages,
      maxOutputTokens: 1000,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API error:', error);
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
