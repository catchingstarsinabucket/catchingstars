// Local Development Configuration Example
//
// To set up local development:
// 1. Copy this file to config.local.js (in the same directory)
// 2. Replace the placeholder values with your actual EmailJS credentials
// 3. Get credentials from https://www.emailjs.com/
//
// IMPORTANT: config.local.js is gitignored and will NOT be committed
//
// For production deployment (Vercel/Netlify), you don't need this file.
// Instead, set environment variables in your hosting dashboard.

const localConfig = {
  serviceId: 'your_service_id_here',
  templateId: 'your_template_id_here',
  publicKey: 'your_public_key_here'
};

export default localConfig;
