// Portfolio Data Configuration
const portfolioData = [
    {
        badge: "INTRO",
        title: "Let's celebrate what made 2025 creative",
        desc: "A showcase of my top development and design projects from the past year.",
        cta: "Start Tour",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80", // Laptop/Code image
        bg: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80" // Dark starry sky
    },
    {
        badge: "PROJECT 01",
        title: "E-Commerce Rebrand",
        desc: "A full-stack redesign for a major fashion retailer using React and Node.js. Increased sales by 40%.",
        cta: "View Case Study",
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80", // Payment/Shop image
        bg: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80" // Clothing store blurred
    },
    {
        badge: "PROJECT 02",
        title: "FinTech Dashboard",
        desc: "Real-time data visualization dashboard for banking clients. Built with D3.js and Python.",
        cta: "See Live Demo",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", // Graphs/Charts
        bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80" // Tech background
    },
    {
        badge: "PROJECT 03",
        title: "AI Chat Application",
        desc: "Integrated OpenAI API to create a customer support bot that handles 10,000+ queries daily.",
        cta: "Try The Bot",
        img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80", // AI/Robot
        bg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1920&q=80" // Abstract AI Art
    },
    {
        badge: "CONTACT",
        title: "Ready to build something great?",
        desc: "I am currently available for freelance projects and full-time opportunities.",
        cta: "Hire Me",
        img: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=800&q=80", // Handshake/Laptop
        bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" // Globe/Connection
    }
];

// DOM Elements
const contentArea = document.getElementById('content-area');
const bgContainer = document.getElementById('bg-container');
const slideBadge = document.getElementById('slide-badge');
const slideTitle = document.getElementById('slide-title');
const slideDesc = document.getElementById('slide-desc');
const slideCta = document.getElementById('slide-cta');
const imagePreview = document.getElementById('image-preview');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const nextText = document.getElementById('next-text');

let currentIndex = 0;

// Initialize
function init() {
    updateSlide(0);
}

// Function to update content with animation
function updateSlide(index) {
    // 1. Fade Out Content
    contentArea.classList.add('fade-out');
    imagePreview.style.transform = "rotate(-5deg) scale(0.9)";
    imagePreview.style.opacity = "0.5";

    setTimeout(() => {
        // 2. Update Data
        const data = portfolioData[index];
        
        slideBadge.textContent = data.badge;
        slideTitle.textContent = data.title;
        slideDesc.textContent = data.desc;
        slideCta.textContent = data.cta;
        
        // Update images
        bgContainer.style.backgroundImage = `url('${data.bg}')`;
        imagePreview.querySelector('img').src = data.img;

        // 3. Fade In Content
        contentArea.classList.remove('fade-out');
        imagePreview.style.transform = "rotate(2deg) scale(1)";
        imagePreview.style.opacity = "1";
        
        updateButtons();

    }, 400); // Matches CSS transition time
}

// Button Logic
function updateButtons() {
    // Disable Prev button if at start
    prevBtn.disabled = currentIndex === 0;

    // Change "Next" to "Finish" or "Reset" at the end
    if (currentIndex === portfolioData.length - 1) {
        nextText.textContent = "Restart";
    } else {
        nextText.textContent = "Next";
    }
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < portfolioData.length - 1) {
        currentIndex++;
        updateSlide(currentIndex);
    } else {
        // Optional: Loop back to start
        currentIndex = 0;
        updateSlide(currentIndex);
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlide(currentIndex);
    }
});

// Start
init();