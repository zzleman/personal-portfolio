# Personal Portfolio

A personal portfolio application built with Next.js and TypeScript.

## Project Structure

```
personal-portfolio/
├── src/              # Next.js application source code
├── public/           # Static assets
├── mockData.json     # Project data (replaces CMS)
└── package.json      # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- npm >= 6.0.0

### Installation

Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at http://localhost:3000

### Building

Build the application for production:

```bash
npm run build
```

### Production

Start the production server:

```bash
npm run start
```

## Project Data

Project data is stored in `mockData.json` at the root of the project. You can edit this file to update your projects without needing a CMS.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Resend API Key for contact form emails
RESEND_API_KEY=re_your_api_key_here

# Contact email address (optional, defaults to lemanzeynalli67@gmail.com)
CONTACT_EMAIL=lemanzeynalli67@gmail.com
```

**Note:** The `CONTACT_EMAIL` is optional - if not set, it defaults to `lemanzeynalli67@gmail.com`.

### Contact Form Email Setup

The contact form sends emails using [Resend](https://resend.com). To enable email functionality:

1. **Create a Resend account** at https://resend.com (free tier includes 3,000 emails/month)
2. **Get your API key** from https://resend.com/api-keys
3. **Add the API key** to your `.env.local` file as shown above
4. **Restart your development server** after adding the environment variables

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Resend Documentation](https://resend.com/docs) - learn about Resend email service

## Production Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

**Important for Production:** Don't forget to add all environment variables in your Vercel project settings (Settings → Environment Variables):

- `RESEND_API_KEY` - Required for contact form
- `CONTACT_EMAIL` - Optional, defaults to lemanzeynalli67@gmail.com
