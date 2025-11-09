# Catching Stars In A Bucket

A poetry book website featuring verses on love, life, rainy days and more by Shivani Kumawat.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up EmailJS for contact form**

   Copy the example config file:
   ```bash
   cp src/config.example.js src/config.js
   ```

   Then edit `src/config.js` and add your EmailJS credentials:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Replace the placeholder values in `config.js`

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails. To configure:

1. Create an account at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Set up an email service
3. Create an email template with these variables:
   - `{{first_name}}` - Sender's first name
   - `{{last_name}}` - Sender's last name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
4. Copy your Service ID, Template ID, and Public Key to `src/config.js`

**Important:** Never commit the `config.js` file! It's already in `.gitignore`.

## 🔒 Security

- All sensitive credentials are stored in `src/config.js` (not committed to git)
- The `src/config.example.js` file shows the required format
- `src/config.js` is in `.gitignore` to prevent accidental commits
- EmailJS Public Key is safe for client-side use
- All external image resources have been downloaded locally

## 📁 Project Structure

- `/src/Home.js` - Main homepage component
- `/src/Contact.js` - Contact form page
- `/src/App.js` - Router configuration
- `/public/images/` - All image assets

## 🛠️ Technologies

- React 18
- React Router DOM
- EmailJS for contact form
- CSS3 for styling

## 🚀 Deployment

### Option 1: GitHub Pages with Actions (Recommended)

**Step 1: Update package.json**
Edit `package.json` and replace `YOUR_GITHUB_USERNAME` with your actual GitHub username:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/catchingstars"
```

**Step 2: Add GitHub Secrets**
1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add secrets:

**Step 3: Enable GitHub Pages**
1. Go to **Settings** → **Pages**
2. Under "Source", select **GitHub Actions**

**Step 4: Deploy**
1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be live at: `https://YOUR_GITHUB_USERNAME.github.io/catchingstars`

**Step 5: Check Deployment**
- Go to **Actions** tab to see the deployment progress
- Once complete, visit your GitHub Pages URL

---

### Option 2: Vercel (Alternative)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/) and import your repository
3. Add environment variables in Vercel dashboard:
4. Deploy!


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
#test
#src
