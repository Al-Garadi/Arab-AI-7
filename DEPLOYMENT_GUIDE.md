# Arab AI - Deployment Guide

## 🚀 Quick Deployment Options

Your Arab AI application is ready for deployment! Here are the easiest ways to get it online:

### Option 1: Deploy to Vercel (Recommended)

**Why Vercel?** Perfect for Next.js applications, free tier, automatic deployments, global CDN.

1. **Create a Vercel Account**
   - Go to [vercel.com/signup](https://vercel.com/signup)
   - Sign up with GitHub, GitLab, or email

2. **Deploy Your App**
   - Upload your project folder to GitHub (or download the zip file I've prepared)
   - In Vercel dashboard, click "New Project"
   - Import from GitHub or upload the project
   - Vercel will automatically detect it's a Next.js app
   - Click "Deploy"

3. **Set Environment Variables** (Optional but recommended)
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   CODE=your_access_password_here
   ```

### Option 2: Deploy to Netlify

1. **Create a Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up for free

2. **Deploy**
   - Drag and drop your project folder
   - Or connect your GitHub repository
   - Netlify will build and deploy automatically

### Option 3: Deploy to Railway

1. **Create a Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Deploy**
   - Click "Deploy from GitHub repo"
   - Select your Arab AI repository
   - Railway will handle the rest

### Option 4: Self-Hosting

If you have your own server:

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start the production server
npm start
```

The app will run on port 3000 by default.

## 🔧 Environment Variables

For full functionality, set these environment variables:

### Required
- `OPENAI_API_KEY` - Your OpenAI API key
- `CODE` - Access password (e.g., "mypassword123")

### Optional AI Providers
- `GOOGLE_API_KEY` - Google Gemini Pro
- `ANTHROPIC_API_KEY` - Claude
- `AZURE_URL` - Azure OpenAI endpoint
- `AZURE_API_KEY` - Azure API key

### Example .env.local file:
```
OPENAI_API_KEY=sk-your-key-here
CODE=arab-ai-2024
GOOGLE_API_KEY=your-google-key
ANTHROPIC_API_KEY=your-claude-key
```

## 🌐 Custom Domain (Optional)

After deployment, you can add a custom domain:

### Free Domain Options:
- **Freenom**: .tk, .ml, .ga, .cf domains
- **GitHub Pages**: username.github.io
- **Vercel**: yourapp.vercel.app (included)

### Paid Domain Options:
- **Namecheap**: $8-15/year
- **GoDaddy**: $10-20/year
- **Cloudflare**: $8-10/year

## 📱 Features Included

Your Arab AI application includes:

✅ **Multi-Provider AI Support**: OpenAI, Claude, Gemini, and more
✅ **Beautiful Arabic Design**: Mandala logo and cultural elements
✅ **Mobile Responsive**: Works on all devices
✅ **Dark/Light Mode**: User preference support
✅ **Multi-Language**: 14+ languages including Arabic
✅ **Privacy First**: Data stored locally in browser
✅ **Plugin System**: Extensible functionality
✅ **Real-time Chat**: Streaming responses
✅ **Export Features**: Share conversations as images/text

## 🔒 Security Notes

- Never commit API keys to public repositories
- Use environment variables for sensitive data
- Set strong access passwords
- Consider using API key rotation

## 📞 Support

If you need help with deployment:

1. **Check the logs** in your hosting platform
2. **Verify environment variables** are set correctly
3. **Ensure API keys** are valid and have sufficient credits
4. **Test locally first** with `npm run dev`

## 🎉 Next Steps

After deployment:

1. **Test the application** with different AI providers
2. **Customize the branding** further if needed
3. **Set up monitoring** (optional)
4. **Share with users** and gather feedback

Your Arab AI application is now ready to serve users worldwide! 🌍

