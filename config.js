// Portfolio Configuration File
// Update this file to easily modify your portfolio content

const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Bhavesh Negi",
        title: "AI Engineer & Data Science Professional",
        location: "Vadodara, Gujarat, India",
        phone: "+91 9313198316",
        email: "bhaveshnegi98@gmail.com",
        description: "Passionate about leveraging AI to solve complex problems and creating scalable, production-ready systems. I design and build AI models, end-to-end pipelines, and backend APIs."
    },

    // Social Media Links
    social: {
        linkedin: "https://www.linkedin.com/in/bhavesh-negi-59314224a/",
        github: "https://github.com/bhaveshnegi",
        portfolio: "#" // Add your portfolio URL if different
    },

    // Education
    education: [
        {
            degree: "BTech in Computer Science Engineering",
            institution: "ITM(SLS)Baroda University",
            period: "Sept 2021 - May 2025",
            grade: "CGPA: 8.43"
        },
        {
            degree: "HSC",
            institution: "Baroda High School, Gujarat board",
            period: "May 2021",
            grade: "Grade: 70.6%"
        },
        {
            degree: "SSC",
            institution: "Navyug English Medium School, Gujarat board",
            period: "March 2019",
            grade: "Grade: 68%"
        }
    ],

    // Work Experience
    experience: [
        {
            title: "Analytics Intern",
            company: "Adani Power Limited",
            period: "Jan 2025 - May 2025",
            achievements: [
                "Developed an Automated OCR-Based Data Extraction & Logging System using Python, PaddleOCR, OpenCV, PIL, NumPy, Pandas, and Regex, enhancing data processing efficiency.",
                "Developed a Machine Learning-Based Clinker Prediction Model with an Interactive Dashboard, optimizing coal quality analysis for proactive clinker prevention.",
                "Built a GUI-based Elogbook Automation Data Extraction and Correction System that enables seamless manual verification and correction of OCR results by displaying Excel-like tables alongside corresponding image segments."
            ]
        },
        {
            title: "Data Science Intern",
            company: "UniCoverge Technologies",
            period: "Apr 2024 - Jun 2024",
            achievements: [
                "Developed a predictive maintenance system for turbofan engines using machine learning, improving failure prediction accuracy."
            ]
        }
    ],

    // Projects
    projects: [
        {
            name: "Netflix Data Analysis",
            description: "Comprehensive analysis of Netflix content data to identify trends and patterns in viewership and content preferences.",
            icon: "fas fa-chart-line",
            link: "#" // Add project link if available
        },
        {
            name: "SMS Spam Classification",
            description: "Machine learning model to classify SMS messages as spam or legitimate using natural language processing techniques.",
            icon: "fas fa-shield-alt",
            link: "#"
        },
        {
            name: "Sign Language Recognition",
            description: "Computer vision system for real-time sign language recognition using deep learning and image processing.",
            icon: "fas fa-eye",
            link: "#"
        },
        {
            name: "Customer Churn Prediction",
            description: "Predictive analytics system to identify customers at risk of churning using machine learning algorithms.",
            icon: "fas fa-users",
            link: "#"
        },
        {
            name: "Ecommerce Application",
            description: "Full-stack ecommerce platform with modern UI/UX, payment integration, and inventory management.",
            icon: "fas fa-shopping-cart",
            link: "#"
        }
    ],

    // Skills by Category
    skills: {
        "Programming": ["Python", "SQL", "JavaScript", "HTML/CSS"],
        "Databases": ["MySQL", "MongoDB"],
        "Data Analysis & Visualization": ["Excel", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"],
        "Machine Learning & Deep Learning": ["Classification", "Linear/Logistic Regression", "Decision Trees", "Random Forest", "Neural Networks", "CNN", "RNN", "Hyperparameter Tuning"],
        "Statistics & Probability": ["Descriptive Stats", "Probability Distributions", "Hypothesis Testing"],
        "Frameworks & Tools": ["React", "Node.js", "Flask", "Express.js", "Git/GitHub", "VS Code", "Jupyter Notebook", "Postman", "Figma"]
    },

    // Certificates
    certificates: [
        {
            name: "Edunet Training",
            issuer: "Edunet Foundation",
            year: "2024",
            icon: "fas fa-certificate"
        },
        {
            name: "Open Source Contribution",
            issuer: "GirlScript Summer of Code",
            year: "2024",
            icon: "fas fa-award"
        }
    ],

    // Soft Skills
    softSkills: [
        "Adaptability & Quick Learning",
        "Communication & Presentation Skills",
        "Team Collaboration"
    ],

    // Hobbies
    hobbies: ["Gaming"],

    // Contact Form Settings
    contactForm: {
        enabled: true,
        emailService: "formspree", // Options: "formspree", "netlify", "custom"
        formspreeEndpoint: "", // Add your Formspree endpoint
        netlifyForm: false, // Set to true if using Netlify forms
        successMessage: "Thank you for your message! I will get back to you soon.",
        errorMessage: "There was an error sending your message. Please try again."
    },

    // Theme Settings
    theme: {
        primaryColor: "#2563eb",
        accentColor: "#fbbf24",
        backgroundColor: "#f8fafc",
        textColor: "#1f2937",
        secondaryTextColor: "#6b7280"
    },

    // Animation Settings
    animations: {
        enabled: true,
        scrollAnimations: true,
        hoverEffects: true,
        typingEffect: true,
        scrollProgress: true
    },

    // SEO Settings
    seo: {
        title: "Bhavesh Negi - AI Engineer & Data Science Professional",
        description: "Portfolio of Bhavesh Negi, an AI Engineer and Data Science professional with experience in machine learning, deep learning, and backend development.",
        keywords: "AI engineer, data science, machine learning, deep learning, python, flask, react, node.js, portfolio, bhavesh negi",
        author: "Bhavesh Negi",
        ogImage: "", // Add your Open Graph image URL
        twitterHandle: "" // Add your Twitter handle
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
} else {
    // For browser use
    window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}

// Helper function to update portfolio content dynamically
function updatePortfolioContent() {
    // Update personal information
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    
    if (heroTitle) {
        heroTitle.innerHTML = `Hi, I'm <span class="highlight">${PORTFOLIO_CONFIG.personal.name}</span>`;
    }
    if (heroSubtitle) {
        heroSubtitle.textContent = PORTFOLIO_CONFIG.personal.title;
    }
    if (heroDescription) {
        heroDescription.textContent = PORTFOLIO_CONFIG.personal.description;
    }
    
    // Update contact information
    const phoneElement = document.querySelector('.contact-item:nth-child(2) p');
    const emailElement = document.querySelector('.contact-item:nth-child(3) p');
    
    if (phoneElement) {
        phoneElement.textContent = PORTFOLIO_CONFIG.personal.phone;
    }
    if (emailElement) {
        emailElement.textContent = PORTFOLIO_CONFIG.personal.email;
    }
    
    // Update social links - more robust approach
    const socialLinks = document.querySelectorAll('.social-link');
    
    if (socialLinks.length >= 1 && PORTFOLIO_CONFIG.social.linkedin !== "#") {
        // First social link is LinkedIn
        socialLinks[0].href = PORTFOLIO_CONFIG.social.linkedin;
        socialLinks[0].target = "_blank"; // Open in new tab
    }
    
    if (socialLinks.length >= 2 && PORTFOLIO_CONFIG.social.github !== "#") {
        // Second social link is GitHub
        socialLinks[1].href = PORTFOLIO_CONFIG.social.github;
        socialLinks[1].target = "_blank"; // Open in new tab
    }
    
    console.log('Portfolio content updated successfully!');
    console.log('LinkedIn URL:', PORTFOLIO_CONFIG.social.linkedin);
}

// Auto-update content when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Small delay to ensure all elements are rendered
        setTimeout(updatePortfolioContent, 100);
    });
} else {
    // Small delay to ensure all elements are rendered
    setTimeout(updatePortfolioContent, 100);
}
