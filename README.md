# Penalty Management System

A modern, responsive web application for managing military unit penalty and reward records. Built with Next.js, React, and Tailwind CSS, featuring a clean blue-white themed interface with role-based access control.

![Penalty Management System](https://img.shields.io/badge/Status-Active-green) ![Next.js](https://img.shields.io/badge/Next.js-13+-black) ![React](https://img.shields.io/badge/React-18+-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)

## 🎯 Purpose

To reduce manual errors, improve accountability, and enhance transparency in disciplinary and reward management across military organizations by digitizing the workflow and providing real-time tracking capabilities.

## ✨ Features

### 🔐 Authentication System
- **Role-based Login**: Support for Admin, Officer, and Approver roles
- **Secure Access**: Protected routes and user session management
- **Password Recovery**: Forgot password functionality

### 📊 Dashboard
- **Real-time Overview**: View all penalty and reward records
- **Advanced Search**: Filter by rank, date, status, and keywords
- **Data Export**: Export records to PDF/Excel formats
- **Status Tracking**: Visual status indicators (Pending, Approved, Rejected)

### 📝 Record Management
- **New Entry Form**: Comprehensive form for adding penalties/rewards
- **Data Validation**: Client-side and server-side validation
- **Bulk Operations**: Support for multiple record operations
- **Audit Trail**: Track all changes and approvals

### 🔔 Notification System
- **Email Alerts**: Automated notifications for pending approvals
- **SMS Integration**: Real-time SMS notifications
- **Reminder System**: Daily reminders for pending actions
- **Status Updates**: Automatic notifications on status changes

### 📱 Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Clean UI**: Minimalist blue-white theme
- **Accessibility**: WCAG 2.1 compliant design
- **Fast Loading**: Optimized performance

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Form Handling**: React Hook Form (ready for integration)
- **Database**: SQLite (local) / PostgreSQL (production ready)
- **Authentication**: NextAuth.js (ready for integration)
- **Notifications**: Email/SMS APIs (ready for integration)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/penalty-management-system.git
   cd penalty-management-system
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Add your environment variables:
   \`\`\`env
   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=http://localhost:3000
   DATABASE_URL=your-database-url
   EMAIL_API_KEY=your-email-api-key
   SMS_API_KEY=your-sms-api-key
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
penalty-management-system/
├── app/                          # Next.js app directory
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── dashboard.tsx            # Dashboard component
│   ├── login-page.tsx           # Login component
│   └── new-penalty-entry.tsx    # Entry form component
├── lib/                         # Utility functions
│   └── utils.ts                 # Helper functions
├── public/                      # Static assets
├── styles/                      # Additional styles
├── types/                       # TypeScript type definitions
├── .env.example                 # Environment variables template
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
└── README.md                    # Project documentation
\`\`\`

## 🎮 Usage Guide

### Login Process
1. Navigate to the login page
2. Enter your credentials (email and password)
3. Click "Sign in" to access the dashboard

### Dashboard Navigation
- **View Records**: Browse all penalty and reward entries
- **Search & Filter**: Use the search bar and filters to find specific records
- **Export Data**: Click the export button to download records
- **Add New Entry**: Click "New Entry" to create a new record

### Adding New Records
1. Click "New Entry" from the dashboard
2. Fill in all required fields:
   - Date of incident/event
   - Personnel rank and name
   - Event description
   - Penalty details (if applicable)
   - Approving authorities
3. Select appropriate status
4. Submit the form

### Record Management
- **Status Updates**: Records can be marked as Pending, Approved, or Rejected
- **Notifications**: Automatic alerts sent to relevant personnel
- **Audit Trail**: All changes are logged for accountability

## 🔧 Configuration

### Database Setup
The system supports both SQLite (development) and PostgreSQL (production):

\`\`\`javascript
// For SQLite (development)
DATABASE_URL="file:./dev.db"

// For PostgreSQL (production)
DATABASE_URL="postgresql://username:password@localhost:5432/penalty_db"
\`\`\`

### Email Configuration
Configure email notifications:

\`\`\`javascript
EMAIL_PROVIDER="smtp" // or "sendgrid", "mailgun"
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"
\`\`\`

### SMS Configuration
Set up SMS notifications:

\`\`\`javascript
SMS_PROVIDER="twilio" // or "aws-sns"
TWILIO_ACCOUNT_SID="your-account-sid"
TWILIO_AUTH_TOKEN="your-auth-token"
TWILIO_PHONE_NUMBER="your-twilio-number"
\`\`\`

## 📊 Data Format

### Penalty Record Structure
\`\`\`json
{
  "id": "unique-identifier",
  "date": "2025-06-12",
  "rank": "Havildar",
  "name": "Rajesh Kumar",
  "event": "Republic Day Parade",
  "penalty": "5 days pay cut",
  "rewardedBy": "CO 12 Raj Rifles",
  "approvedBy": "Commandant 9 Inf Div",
  "status": "approved",
  "createdAt": "2025-06-12T10:30:00Z",
  "updatedAt": "2025-06-12T15:45:00Z"
}
\`\`\`

### Supported Ranks
- Sepoy
- Naik
- Havildar
- Subedar
- Lieutenant
- Captain
- Major
- Colonel

## 🚀 Deployment

### Vercel Deployment (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on push

### Docker Deployment
\`\`\`bash
# Build the Docker image
docker build -t penalty-management-system .

# Run the container
docker run -p 3000:3000 penalty-management-system
\`\`\`

### Manual Deployment
\`\`\`bash
# Build the application
npm run build

# Start the production server
npm start
\`\`\`

## 🔮 Future Enhancements

### Planned Features
- [ ] **Advanced Analytics**: Dashboard with charts and statistics
- [ ] **Document Upload**: Attach supporting documents to records
- [ ] **Workflow Automation**: Automated approval workflows
- [ ] **Mobile App**: Native mobile application
- [ ] **API Integration**: RESTful API for third-party integrations
- [ ] **Multi-language Support**: Internationalization (i18n)
- [ ] **Advanced Reporting**: Custom report generation
- [ ] **Backup & Recovery**: Automated data backup system

### Technical Improvements
- [ ] **Performance Optimization**: Implement caching strategies
- [ ] **Security Enhancements**: Add 2FA and advanced security features
- [ ] **Testing Suite**: Comprehensive unit and integration tests
- [ ] **CI/CD Pipeline**: Automated testing and deployment
- [ ] **Monitoring**: Application performance monitoring
- [ ] **Documentation**: API documentation with Swagger

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   \`\`\`bash
   git checkout -b feature/amazing-feature
   \`\`\`
3. **Make your changes**
4. **Commit your changes**
   \`\`\`bash
   git commit -m 'Add some amazing feature'
   \`\`\`
5. **Push to the branch**
   \`\`\`bash
   git push origin feature/amazing-feature
   \`\`\`
6. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style

## 🐛 Bug Reports

If you find a bug, please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Project Lead**: [Your Name]
- **Frontend Developer**: [Developer Name]
- **Backend Developer**: [Developer Name]
- **UI/UX Designer**: [Designer Name]

## 📞 Support

For support and questions:
- **Email**: support@penalty-management.com
- **Documentation**: [Wiki](https://github.com/your-username/penalty-management-system/wiki)
- **Issues**: [GitHub Issues](https://github.com/your-username/penalty-management-system/issues)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Lucide](https://lucide.dev/) for the icon set
- Military personnel who provided requirements and feedback

---

**Made with ❤️ for military organizations worldwide**

*Last updated: June 2025*
