# 🚀 Hamman Muraya - Portfolio ✨

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-green?style=for-the-badge&logo=google-chrome)](https://hamanporfolio.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-MurayaSoftTouch-blue?style=for-the-badge&logo=github)](https://github.com/MurayaSoftTouch)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Hamman%20Muraya-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/hamman-muraya-8b3744397)
[![Python](https://img.shields.io/badge/Python-3.12-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)

</div>

A cutting-edge portfolio website showcasing the skills and projects of **Hamman Muraya**, Senior Software Engineer & DevOps Specialist. 🧠

## 🌟 Key Features

### 🎨 Frontend Excellence
- 📱 **Responsive Design** - Works flawlessly on all devices
- 🌙 **Dark/Light Mode Toggle** - Eye-friendly themes
- 🎯 **Project Showcase** - Detailed descriptions with category filtering
- 📊 **Skills Visualization** - Interactive progress bars
- 📅 **Work Experience Timeline** - Chronological career journey
- 🏆 **Professional Certifications Display** - Industry credentials
- 💬 **Testimonials Section** - Client feedback and reviews
- 📝 **Articles & Publications** - Knowledge sharing platform
- 📧 **Newsletter Subscription** - Stay updated feature
- 📄 **CV Redirect** - Redirect to online CV at https://rxresu.me/vrugundu001/hamman-muraya-2
- 🔗 **Social Media Integration** - Seamless connectivity

### 🔐 Admin Dashboard
- 👤 **Authentication System** - Secure login functionality
- 🛡️ **Protected Routes** - Role-based access control
- 📋 **Content Management** - Update portfolio content easily
- 📩 **Contact Messages** - Manage inquiries efficiently
- 📈 **Subscriber Management** - Newsletter subscriber tracking
- 📁 **Project Management** - Add/edit/delete projects
- 🎓 **Education Updates** - Manage academic credentials
- 🏆 **Certification Management** - Update professional credentials
- 💬 **Testimonial Management** - Curate client feedback
- 📰 **Article Publishing** - Content creation interface

### 🛠️ Technical Features
- 🔄 **Real-time Updates** - Live content synchronization
- 📦 **Modular Architecture** - Clean, maintainable code
- 🔍 **SEO Optimized** - Search engine friendly
- ⚡ **Performance Optimized** - Fast loading times
- 🔒 **Security Implemented** - Safe and secure operations
- 📊 **Analytics Ready** - Track visitor engagement

## 🛠️ Tech Stack

### 🐍 Backend Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| [Python](https://www.python.org/) | 3.12 | Core programming language |
| [Flask](https://flask.palletsprojects.com/) | 2.3.3 | Web framework |
| [Flask-RESTful](https://flask-restful.readthedocs.io/) | 0.3.10 | API development |
| [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/) | 3.1.1 | ORM for database operations |
| [Flask-Migrate](https://flask-migrate.readthedocs.io/) | 4.1.0 | Database migration tool |
| [Flask-CORS](https://flask-cors.readthedocs.io/) | 4.0.0 | Cross-origin resource sharing |
| [PostgreSQL](https://www.postgresql.org/) | 15 | Production database |
| [Gunicorn](https://gunicorn.org/) | 21.2.0 | WSGI HTTP Server |

### ⚛️ Frontend Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| [React.js](https://reactjs.org/) | 18.2.0 | Component-based UI library |
| [React Router](https://reactrouter.com/) | 6.15.0 | Navigation and routing |
| [Bootstrap](https://getbootstrap.com/) | 5.3.8 | Responsive CSS framework |
| [Reactstrap](https://reactstrap.github.io/) | 9.2.3 | Bootstrap components for React |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.19 | Utility-first CSS framework |
| [Font Awesome](https://fontawesome.com/) | 6.7.2 | Icon library |

## 🚀 Quick Start

### 📋 Prerequisites
- [Python 3.12+](https://www.python.org/downloads/)
- [Node.js 18+](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/download/)

### 🏗️ Development Setup

#### 🐍 Backend Setup
```bash
# Navigate to backend directory
cd portfolio/backend

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set environment variables
export DATABASE_URL=postgresql://user:password@localhost/portfolio_db
export SECRET_KEY=your-secret-key-change-in-production

# Initialize database
python init_db.py

# Run the backend server
python run.py
```
> The backend will be available at http://localhost:5000 🌐

#### ⚛️ Frontend Setup
```bash
# Navigate to frontend directory
cd portfolio/frontend

# Install dependencies
npm install

# Create .env file with the following content:
cat << EOF > .env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_CONTACT_EMAIL=hamanmuraya009@gmail.com
REACT_APP_CONTACT_PHONE=+1 (253) 378-4293
REACT_APP_CONTACT_LOCATION=32115 105th PL SE Auburn WA
REACT_APP_LINKEDIN_URL=https://linkedin.com/in/hamman-muraya-8b3744397
REACT_APP_GITHUB_URL=https://github.com/MurayaSoftTouch
REACT_APP_TWITTER_URL=https://twitter.com/hamanmuraya
REACT_APP_PORTFOLIO_URL=https://hamanporfolio.vercel.app/
EOF

# Start the development server
npm start
```
> The frontend will be available at http://localhost:3000 🌐

### 🖥️ Running Both Servers Simultaneously

#### Method 1: Separate Terminals
1. **Terminal 1 (Backend):**
   ```bash
   cd portfolio/backend
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   python run.py
   ```

2. **Terminal 2 (Frontend):**
   ```bash
   cd portfolio/frontend
   npm start
   ```

#### Method 2: Using Concurrently (if installed globally)
```bash
# Install concurrently globally (if not already installed)
npm install -g concurrently

# From the portfolio root directory
cd portfolio
concurrently "cd backend && source venv/bin/activate && python run.py" "cd frontend && npm start"
```

#### Method 3: Using Background Processes
```bash
# Navigate to portfolio directory
cd portfolio

# Start backend in background
cd backend
source venv/bin/activate  # On Windows: venv\Scripts\activate
python run.py &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend
cd ../frontend
npm start

# To stop backend later, use: kill $BACKEND_PID
```

#### Method 4: Using Docker Compose (Alternative)
```bash
# Navigate to portfolio directory
cd portfolio

# Build and run both services
docker-compose up --build
```

### 🛠️ Troubleshooting Common Issues

#### Backend Issues
- **Port already in use**: Change PORT environment variable or kill the process using the port
- **Database connection errors**: Ensure PostgreSQL is running and credentials are correct
- **Missing dependencies**: Run `pip install -r requirements.txt` again
- **Ubuntu-specific**: If you encounter issues with Python dependencies, ensure you have the required system packages:
  ```bash
  sudo apt update
  sudo apt install python3-dev python3-pip python3-venv build-essential libssl-dev libffi-dev
  ```

#### Frontend Issues
- **Port already in use**: Change PORT environment variable in .env file
- **API connection errors**: Ensure backend is running and REACT_APP_API_URL is correct
- **Module not found**: Run `npm install` to reinstall dependencies
- **Ubuntu-specific**: If you encounter permission issues with npm, consider using a Node version manager:
  ```bash
  # Install n (Node version manager)
  sudo npm install -g n
  sudo n latest
  ```

#### Environment Setup
Make sure your environment variables are properly set:
- Backend: `DATABASE_URL`, `SECRET_KEY`, `FLASK_ENV`
- Frontend: `REACT_APP_API_URL`, and other contact variables

#### Ubuntu-Specific Setup
For Ubuntu users, ensure you have the required packages installed:

1. **Install Python and Node.js**:
   ```bash
   # Update package list
   sudo apt update

   # Install Python 3 and pip
   sudo apt install python3 python3-pip python3-venv

   # Install Node.js and npm
   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
   sudo apt install -y nodejs
   ```

2. **Install PostgreSQL** (if running locally):
   ```bash
   sudo apt install postgresql postgresql-contrib
   sudo systemctl start postgresql
   sudo systemctl enable postgresql

   # Create a database user (optional)
   sudo -u postgres createuser --interactive --p
   ```

3. **Ubuntu Firewall** (if enabled):
   ```bash
   # Allow traffic on development ports (if needed)
   sudo ufw allow 3000
   sudo ufw allow 5000
   ```

4. **Set up the project**:
   ```bash
   # Navigate to backend directory
   cd portfolio/backend

   # Create virtual environment
   python3 -m venv venv

   # Activate virtual environment
   source venv/bin/activate

   # Install dependencies
   pip install -r requirements.txt
   ```

5. **Running on Ubuntu**:
   - The application will be available at `http://localhost:3000` (frontend) and `http://localhost:5000` (backend)
   - Ubuntu typically uses `python3` and `pip3` commands instead of `python` and `pip`

#### ⚛️ Frontend Setup
```bash
# Navigate to frontend directory
cd portfolio/frontend

# Install dependencies
npm install

# Create .env file with the following content:
cat << EOF > .env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_CONTACT_EMAIL=muraya.h@yahoo.com
REACT_APP_CONTACT_PHONE=+44-747-123-4567
REACT_APP_CONTACT_LOCATION=Lincoln, Lincolnshire, England
REACT_APP_LINKEDIN_URL=https://linkedin.com/in/hamman-muraya-8b3744397
REACT_APP_GITHUB_URL=https://github.com/MurayaSoftTouch
REACT_APP_TWITTER_URL=https://twitter.com/hammanmuraya
EOF

# Start the development server
npm start
```
> The frontend will be available at http://localhost:3000 🌐


# Start frontend
cd ../frontend
npm start

# To stop backend later, use: kill $BACKEND_PID
```

#### Method 4: Using Docker Compose (Alternative)
```bash
# Navigate to portfolio directory
cd portfolio

# Build and run both services
docker-compose up --build
```

### 🛠️ Troubleshooting Common Issues

#### Backend Issues
- **Port already in use**: Change PORT environment variable or kill the process using the port
- **Database connection errors**: Ensure PostgreSQL is running and credentials are correct
- **Missing dependencies**: Run `pip install -r requirements.txt` again

#### Frontend Issues
- **Port already in use**: Change PORT environment variable in .env file
- **API connection errors**: Ensure backend is running and REACT_APP_API_URL is correct
- **Module not found**: Run `npm install` to reinstall dependencies

#### Environment Setup
Make sure your environment variables are properly set:
- Backend: `DATABASE_URL`, `SECRET_KEY`, `FLASK_ENV`
- Frontend: `REACT_APP_API_URL`, and other contact variables

## 📡 API Endpoints

### 📋 Portfolio Endpoints
- `GET /api/portfolio` - Retrieve portfolio information 📄
- `GET /api/projects` - Fetch all projects 📁
- `POST /api/projects` - Add a new project (admin only) ➕
- `PUT /api/projects/<id>` - Update a project (admin only) ✏️
- `DELETE /api/projects/<id>` - Delete a project (admin only) ❌

### 📞 Contact Endpoints
- `GET /api/contact` - Get contact information 📧
- `POST /api/contact` - Submit contact form 📨
- `GET /api/messages` - Get all contact messages (admin only) 📬

### 👨‍💼 Experience & Skills Endpoints
- `GET /api/experience` - Get work experience 📅
- `GET /api/certifications` - Get certifications 🏆
- `GET /api/skills` - Get technical skills 🛠️

### 💬 Content Endpoints
- `GET /api/testimonials` - Get testimonials 💬
- `GET /api/articles` - Get articles & publications 📝
- `GET /api/newsletter` - Get newsletter information 📧
- `POST /api/newsletter` - Subscribe to newsletter 📥

### 🔐 Authentication Endpoints
- `POST /api/login` - User authentication 🔐
- `GET /api/logout` - User logout 🚪

## 🌍 Environment Variables

### 🐍 Backend Environment Variables
Create a `.env` file in the backend directory:

```bash
# Secret key for Flask app
SECRET_KEY=your-secret-key-change-in-production

# Database configuration
DATABASE_URL=postgresql://user:password@localhost/portfolio_db

# Debug mode (set to False in production)
FLASK_DEBUG=False

# Port configuration
PORT=5000
```

### ⚛️ Frontend Environment Variables
Set the following in your frontend `.env` file:

```bash
# Backend API URL
REACT_APP_API_URL=http://localhost:5000/api

# Contact information
REACT_APP_CONTACT_EMAIL=hamanmuraya009@gmail.com
REACT_APP_CONTACT_PHONE=+1 (253) 378-4293
REACT_APP_CONTACT_LOCATION=32115 105th PL SE Auburn WA

# Social media links
REACT_APP_LINKEDIN_URL=https://linkedin.com/in/hamman-muraya-8b3744397
REACT_APP_GITHUB_URL=https://github.com/MurayaSoftTouch
REACT_APP_TWITTER_URL=https://twitter.com/hammanmuraya
REACT_APP_PORTFOLIO_URL=https://hamanporfolio.vercel.app/
```

## 🚀 Deployment Options

### 🐳 Docker Deployment
Deploy the entire application using Docker Compose:

```bash
# Navigate to portfolio directory
cd portfolio

# Build and run containers
docker-compose up -d

# View logs
docker-compose logs -f
```

> The application will be available at http://localhost 🌐

### 🏗️ Production Build
Build the frontend for production:

```bash
# Navigate to frontend directory
cd portfolio/frontend

# Create production build
npm run build
```

### ☁️ Cloud Deployment
The application is ready for deployment on:
- [Vercel](https://vercel.com/) 🌐
- [Netlify](https://www.netlify.com/) 🌐
- [Heroku](https://www.heroku.com/) ☁️
- [AWS](https://aws.amazon.com/) ☁️
- [Google Cloud](https://cloud.google.com/) ☁️
- [Azure](https://azure.microsoft.com/) ☁️

### 🌐 Vercel Deployment

#### Prerequisites
- Sign up for a [Vercel account](https://vercel.com/signup)
- Install the [Vercel CLI](https://vercel.com/cli) (optional): `npm i -g vercel`

#### Deployment Steps
1. **Prepare your frontend for Vercel deployment:**
   - Navigate to the frontend directory: `cd portfolio/frontend`
   - Ensure your `package.json` has the correct build script
   - Create/update your `.env.production` file with production environment variables:
     ```
     REACT_APP_API_URL=https://your-backend-url.com/api
     REACT_APP_CONTACT_EMAIL=your-email@example.com
     REACT_APP_CONTACT_PHONE=+1-234-567-8900
     REACT_APP_CONTACT_LOCATION=City, Country
     REACT_APP_LINKEDIN_URL=https://linkedin.com/in/your-profile
     REACT_APP_GITHUB_URL=https://github.com/your-profile
     REACT_APP_TWITTER_URL=https://twitter.com/your-profile
     ```

2. **Deploy to Vercel:**
   - Option 1 (Recommended): Link your GitHub repository to Vercel
     - Go to [Vercel Dashboard](https://vercel.com/dashboard)
     - Click "New Project" → "Import Git Repository"
     - Select your portfolio repository
     - Configure the project settings:
       - Framework Preset: `Create React App`
       - Build Command: `npm run build`
       - Output Directory: `build`
       - Root Directory: `portfolio/frontend`
     - Add your environment variables in the "Environment Variables" section
     - Click "Deploy"

   - Option 2 (Using Vercel CLI):
     ```bash
     cd portfolio/frontend
     vercel --prod
     ```
     Follow the prompts to configure your project and add environment variables.

3. **Configure Custom Domain (Optional):**
   - In your Vercel dashboard, go to your project settings
   - Navigate to "Domains" and add your custom domain
   - Update DNS settings as instructed

4. **Post-Deployment:**
   - Your application will be accessible at `https://your-project-name.vercel.app`
   - Monitor deployments in your Vercel dashboard
   - Set up automatic deployments from your Git repository

### 🌐 Netlify Deployment

#### Prerequisites
- Sign up for a [Netlify account](https://app.netlify.com/signup)

#### Deployment Steps
1. **Prepare your frontend for Netlify deployment:**
   - Navigate to the frontend directory: `cd portfolio/frontend`
   - Ensure your `package.json` has the correct build script
   - Create/update your `.env.production` file with production environment variables:
     ```
     REACT_APP_API_URL=https://your-backend-url.com/api
     REACT_APP_CONTACT_EMAIL=your-email@example.com
     REACT_APP_CONTACT_PHONE=+1-234-567-8900
     REACT_APP_CONTACT_LOCATION=City, Country
     REACT_APP_LINKEDIN_URL=https://linkedin.com/in/your-profile
     REACT_APP_GITHUB_URL=https://github.com/your-profile
     REACT_APP_TWITTER_URL=https://twitter.com/your-profile
     ```

2. **Deploy to Netlify:**
   - Option 1 (Recommended): Link your GitHub repository to Netlify
     - Go to [Netlify Dashboard](https://app.netlify.com/)
     - Click "Add new site" → "Import an existing project"
     - Choose your Git provider and select your portfolio repository
     - Configure build settings:
       - Build Command: `npm run build`
       - Publish Directory: `build`
       - Additional Configuration (optional):
         - Base directory: `portfolio/frontend`
     - Add your environment variables in the "Advanced" section → "New Variable"
     - Click "Deploy Site"

   - Option 2 (Drag and Drop):
     ```bash
     cd portfolio/frontend
     npm run build
     ```
     - Go to [Netlify Drop](https://app.netlify.com/drop)
     - Drag and drop the `build` folder to deploy

   - Option 3 (Netlify CLI):
     ```bash
     # Install Netlify CLI
     npm install -g netlify-cli

     # Navigate to frontend directory
     cd portfolio/frontend

     # Build the project
     npm run build

     # Deploy using Netlify CLI
     netlify deploy --prod
     ```

3. **Configure Custom Domain (Optional):**
   - In your Netlify dashboard, go to your site settings
   - Navigate to "Domain Management" and add your custom domain
   - Update DNS settings as instructed

4. **Post-Deployment:**
   - Your application will be accessible at `https://your-site-name.netlify.app`
   - Monitor deployments in your Netlify dashboard
   - Set up continuous deployment from your Git repository
   - Configure redirects and headers in `_redirects` file if needed

### 🔄 Backend API Deployment

For the frontend to work properly on Vercel or Netlify, you'll need to deploy the backend API separately:

1. **Deploy Backend to Heroku, AWS, Google Cloud, or similar platform**
2. **Update Frontend Environment Variables** to point to your deployed backend API URL
3. **Configure CORS** in your backend to allow requests from your frontend domain

Example for deployed backend:
```
REACT_APP_API_URL=https://your-deployed-backend.herokuapp.com/api
```

## 🔄 CI/CD Pipelines

### 🚀 GitHub Actions
- 📍 Located in `.github/workflows/ci-cd.yml`
- 🧪 Runs tests for both backend and frontend
- 🧹 Performs linting and code quality checks
- 📦 Builds Docker images
- 🚀 Deploys to staging and production environments
- 🔒 Security scanning integrated

### 🏗️ Jenkins
- 📍 Located in `Jenkinsfile`
- 🧪 Complete pipeline with testing, linting, building, and deployment stages
- 📦 Supports Docker image building and registry pushing
- ✅ Includes manual approval for production deployment
- 📊 Comprehensive monitoring and reporting

### 🚦 GitLab CI
- 📍 Located in `.gitlab-ci.yml`
- 🔄 Multi-stage pipeline with test, lint, build, and deploy stages
- 📦 Includes Docker image building
- 🌍 Supports environment-based deployments
- 🔒 Built-in security scanning

## 📊 Project Structure

```
portfolio/
├── 📁 backend/                 # Flask backend application
│   ├── 📁 app/                 # Application modules
│   │   ├── 📁 api/             # API endpoints
│   │   ├── 📁 models/          # Database models
│   │   ├── 📁 utils/           # Utility functions
│   │   ├── __init__.py         # Application factory
│   │   └── models.py           # Database models
│   ├── 📁 data/                # Data files
│   ├── 📁 migrations/          # Database migrations
│   ├── 📁 uploads/             # File uploads
│   ├── 📄 requirements.txt     # Python dependencies
│   ├── 📄 run.py               # Application entry point
│   ├── 📄 Dockerfile           # Backend Docker configuration
│   └── ...
├── 📁 frontend/                # React frontend application
│   ├── 📁 public/              # Static assets
│   ├── 📁 src/                 # Source code
│   │   ├── 📁 components/      # Reusable components
│   │   ├── 📁 contexts/        # React context providers
│   │   ├── 📁 pages/           # Page components
│   │   ├── 📁 styles/          # CSS/SCSS files
│   │   ├── 📁 utils/           # Utility functions
│   │   ├── App.jsx             # Main application component
│   │   └── index.js            # Entry point
│   ├── 📄 package.json         # Node.js dependencies
│   ├── 📄 Dockerfile           # Frontend Docker configuration
│   └── ...
├── 📄 docker-compose.yml       # Multi-container orchestration
└── 📄 README.md                # This file
```

## 🧪 Testing

### 🐍 Backend Testing
```bash
# Run backend tests
cd portfolio/backend
python -m pytest tests/
```

### ⚛️ Frontend Testing
```bash
# Run frontend tests
cd portfolio/frontend
npm test
```

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🔄 Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. © 2026 Hamman Muraya

## 👨‍💻 About Hamman Muraya

<div align="center">

**Hamman Muraya** is a **Software & DevOps Engineer** with over 8 years of experience designing, building, and deploying secure, scalable cloud-native systems for fintech and SaaS organizations. 🧠

He holds a **PhD in Software Engineering** and has expertise in multiple programming languages, cloud platforms, and DevOps practices. 🎓

[![Contact](https://img.shields.io/badge/Contact-Hamman%20Muraya-blue?style=for-the-badge)](mailto:hamanmuraya009@gmail.com)

</div>

### 💼 Professional Expertise
- 🌐 **Full-Stack Development** - Modern web applications
- ☁️ **Cloud Architecture** - AWS, Azure, Google Cloud
- 🔧 **DevOps Practices** - CI/CD, Infrastructure as Code
- 🛡️ **Security** - Secure coding practices
- 📊 **Data Engineering** - Analytics and processing
- 🤖 **AI/ML Integration** - Intelligent systems

### 🏆 Certifications & Achievements
- 🎓 PhD in Software Engineering
- ☁️ Cloud Platform Certifications
- 🏅 Industry Recognition Awards
- 📜 Professional Certifications

---

<div align="center">

⭐ **Star this repo if you find it helpful!** ⭐

Made with ❤️ by [Hamman Muraya](https://github.com/MurayaSoftTouch)

</div>

