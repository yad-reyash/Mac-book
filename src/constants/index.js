export const navLinks = [
    { label: 'Mac' },
    { label: 'iPhone' },
    { label: 'Watch' },
    { label: 'AirPods' },
    { label: 'Vision' },
]
export const footerLinks = [
    { id: 'privacy', title: 'Privacy Policy', url: '/privacy' },
    { id: 'terms', title: 'Terms of Use', url: '/terms' },
    { id: 'sales', title: 'Sales Policy', url: '/sales' },
    { id: 'legal', title: 'Legal', url: '/legal' },
    { id: 'site-map', title: 'Site Map', url: '/sitemap' },
];

// Parts of the Macbook model that should not change color
export const noChangeParts = [
    'Object_22', // Apple logo
    'Object_16', // Screen border
    'Object_10', // Keyboard
    'Object_20', // Trackpad
];

// Performance section images
export const performanceImages = [
    { id: 'p1', src: '/performance1.png', alt: 'Performance Image 1' },
    { id: 'p2', src: '/performance2.png', alt: 'Performance Image 2' },
    { id: 'p3', src: '/performance3.png', alt: 'Performance Image 3' },
    { id: 'p4', src: '/performance4.png', alt: 'Performance Image 4' },
    { id: 'p5', src: '/performance5.jpg', alt: 'Performance Image 5' },
    { id: 'p6', src: '/performance6.png', alt: 'Performance Image 6' },
    { id: 'p7', src: '/performance7.png', alt: 'Performance Image 7' },
];

// Performance image positioning for animations
export const performanceImgPositions = [
    { id: 'p1', left: 5, bottom: 10 },
    { id: 'p2', right: 8, bottom: 15 },
    { id: 'p3', left: 10, bottom: 25 },
    { id: 'p4', right: 12, bottom: 30 },
    { id: 'p5' }, // Skipped in animation (see Performance.jsx line 50)
    { id: 'p6', left: 15, bottom: 35 },
    { id: 'p7', right: 10, bottom: 40 },
];
