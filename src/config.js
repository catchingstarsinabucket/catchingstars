// EmailJS Configuration
//
// This file is SAFE to commit to git (no secrets hardcoded)
//
// Production (Vercel/Netlify):
// - Reads from environment variables set in hosting dashboard
//
// Local Development:
// - Option 1: Use .env file with REACT_APP_EMAILJS_* variables
// - Option 2: Create config.local.js with your credentials (gitignored)
//
// Priority:
// 1. config.local.js (if exists) - for local development
// 2. Environment variables - for production
// 3. Throws error if neither exists

let localConfig = {};

// Try to import local config if it exists (for development)
try {
  // This will fail in production (file doesn't exist), which is fine
  localConfig = require('./config.local.js').default;
  console.log('✓ Using local config from config.local.js');
} catch (e) {
  // No local config, will use environment variables
  console.log('ℹ Using environment variables for EmailJS config');
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
