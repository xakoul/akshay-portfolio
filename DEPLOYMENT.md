# Akshay Koul - Interactive Portfolio

A ChatGPT-style interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Interactive Chat Interface**: Ask questions about my background, skills, and experience
- **Suggested Prompts**: Quick access to common questions
- **Responsive Design**: Works perfectly on desktop and mobile
- **Dark/Light Mode**: Automatic theme detection based on system preference
- **Fast & Optimized**: Built with Next.js for optimal performance

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📋 Suggested Questions

- Who is Akshay Koul?
- What skills do you have?
- What projects have you worked on?
- What companies have you worked with?
- What are your hobbies?
- How can I get in touch with you?

## 🌐 Deployment

This project is configured for static export and can be deployed to various platforms:

### Cloudflare Pages

1. **Via Git Repository**:
   - Connect your GitHub repository to Cloudflare Pages
   - Set build command: `npm run build`
   - Set output directory: `out`
   - Deploy!

2. **Via Direct Upload**:
   ```bash
   npm run build
   # Upload the 'out' folder to Cloudflare Pages
   ```

### Other Platforms

- **Vercel**: Connect repository and deploy automatically
- **Netlify**: Connect repository, set build command to `npm run build` and publish directory to `out`
- **GitHub Pages**: Use GitHub Actions to build and deploy

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Date Formatting**: date-fns
- **Deployment**: Static Export for universal compatibility

## 📁 Project Structure

```
src/
├── app/                 # Next.js app router
├── components/          # React components
│   ├── ChatInterface.tsx
│   ├── MessageBubble.tsx
│   ├── ChatInput.tsx
│   └── SuggestedPrompts.tsx
├── data/                # Resume data and content
├── types/               # TypeScript type definitions
└── utils/               # Chat logic and utilities
```

## 🎨 Customization

To customize the portfolio with your own information:

1. Update `src/data/resume.ts` with your personal information
2. Modify the suggested questions in the same file
3. Adjust the chat logic in `src/utils/chatLogic.ts` if needed
4. Customize styling in `src/app/globals.css` and component files

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Akshay Koul