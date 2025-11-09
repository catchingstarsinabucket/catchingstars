// EmailJS Configuration
//
// This file is SAFE to commit to git (no secrets hardcoded)
//
// Production (GitHub Pages/Vercel/Netlify):
// - Reads from environment variables set in hosting dashboard
//
// Local Development:
// - Create config.local.js with your credentials (gitignored)
// - Or use .env file with REACT_APP_EMAILJS_* variables
//
// Priority:
// 1. config.local.js (if exists) - for local development
// 2. Environment variables - for production

let localConfig = {};

// Only try to load local config in development mode
// This prevents webpack errors in production builds
if (process.env.NODE_ENV === 'development') {
  try {
    // Dynamic import for development only
    // eslint-disable-next-line import/no-webpack-loader-syntax
    localConfig = require('./config.local.js').default || {};
    console.log('✓ Using local config from config.local.js');
  } catch (e) {
    // No local config found - will use environment variables
    console.log('ℹ No config.local.js found, using environment variables');
  }
}

const config = {
  emailjs: {
    serviceId: localConfig.serviceId || process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId: localConfig.templateId || process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    publicKey: localConfig.publicKey || process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  }
};

// Validate configuration
if (!config.emailjs.serviceId || !config.emailjs.templateId || !config.emailjs.publicKey) {
  console.error('❌ EmailJS configuration missing!');
  console.error('For local development: Create src/config.local.js');
  console.error('For production: Set environment variables in hosting dashboard');
}

export default config;
