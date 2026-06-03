<div align="center">
url="https://macbook-three-kappa.vercel.app/"

<br />

# 🖥️ MacBook Pro — Immersive 3D Website

### An Apple-style interactive 3D product showcase built with cutting-edge web technologies

<br />

![React](https://img.shields.io/badge/-React_19-58C4DC?style=for-the-badge&logo=React&logoColor=white)
![Three.js](https://img.shields.io/badge/-Three.js-27136A?style=for-the-badge&logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/-GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Zustand](https://img.shields.io/badge/-Zustand-FF6C37?style=for-the-badge&logo=npm&logoColor=white)

<br />

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-macbook--three--kappa.vercel.app-black?style=for-the-badge)](https://macbook-three-kappa.vercel.app)

<br />

</div>

---

## 📋 Table of Contents

1. [Introduction](#-introduction)
2. [Live Demo](#-live-demo)
3. [Tech Stack](#%EF%B8%8F-tech-stack)
4. [Features](#-features)
5. [Project Structure](#-project-structure)
6. [Quick Start](#-quick-start)
7. [Scripts](#-scripts)


---

## ✨ Introduction

A stunning Apple-inspired **3D MacBook Pro product website** that brings hardware to life in the browser. Built with React, Three.js, GSAP, and Tailwind CSS, this project demonstrates how modern web technologies can create cinematic, scroll-driven product experiences — rivaling native app aesthetics on the open web.

Featuring lifelike 3D scenes, scroll-triggered model animations, pinned sections, image masking, and seamless timeline transitions — this is the benchmark for interactive product storytelling on the web.

---

## 🌐 Live Demo

> 👉 **[https://macbook-three-kappa.vercel.app](https://macbook-three-kappa.vercel.app)**

Experience the full interactive 3D showcase live. Best viewed on desktop with a mouse/trackpad for full scroll and animation fidelity.

---

## ⚙️ Tech Stack

| Technology | Role |
|---|---|
| **React 19** | Component architecture, state-driven UI, reusable animation hooks |
| **Three.js** | WebGL rendering, 3D model loading, lighting, materials, scene graph |
| **GSAP + ScrollTrigger** | Scroll-driven timelines, SplitText reveals, pinned sections, parallax |
| **Tailwind CSS** | Utility-first styling, responsive layout, design tokens |
| **Vite** | Lightning-fast dev server, HMR, optimized production builds |
| **Zustand** | Lightweight global state management for reactive UI updates |
| **CodeRabbit** | AI-powered code review integrated with GitHub for PR quality checks |

### Why This Stack?

- **Three.js** handles all WebGL complexity — model import, lights, cameras, materials — with a clean scene graph API.
- **GSAP ScrollTrigger** is the gold standard for scroll-linked animation; it enables frame-perfect sync between scroll position and 3D/CSS animation state.
- **React** provides a modular component shell that keeps animation logic decoupled from layout and rendering.
- **Zustand** avoids prop-drilling for shared animation and UI state without Redux's boilerplate overhead.
- **Vite** ensures the animation-heavy bundle stays performant in development with instant HMR.

---

## 🔋 Features

### 🧊 3D Product Scene with Realistic Lighting
Render the MacBook Pro in a lifelike WebGL environment with physically accurate lighting — ambient, directional, and point lights create depth and material realism.

### 🎡 Scroll-Animated 3D Model
The 3D model rotates, translates, and scales in response to the user's scroll position. Every frame is precisely choreographed to GSAP's ScrollTrigger timeline.

### 📌 Pinned Sections
Certain sections lock in the viewport while internal content animates — a technique widely used in Apple's own product pages for maximum storytelling impact.

### 🎭 Image Masking Effects
Scroll-triggered masks reveal or conceal images with fluid, cinematic transitions that respond directly to scroll momentum.

### 🕐 Seamless Multi-Section Timelines
GSAP timelines are chained across sections, creating one cohesive animation arc that spans the entire page — no jarring cuts or disconnected transitions.

### ✂️ SplitText Headline Animations
Bold typographic reveals are powered by GSAP's SplitText plugin, splitting headlines into characters or words for staggered entrance animations.

### 🎥 Scroll-Synced Video Playback
Video elements play forward or backward based on scroll direction and speed — a deeply immersive storytelling mechanic.

### 🎠 Custom Animated Carousel
A bespoke carousel component built with GSAP — smooth, interactive, and entirely free of third-party carousel libraries.

### 📐 Fully Responsive Design
All GSAP animations and Three.js scenes adapt to screen size, ensuring a consistent, polished experience across desktop, tablet, and mobile.

---

## 📁 Project Structure

```
macbook-website/
├── public/
│   ├── models/          # GLTF/GLB 3D model files
│   ├── videos/          # Scroll-synced video assets
│   └── images/          # Static image assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── canvas/      # Three.js scene components
│   │   ├── sections/    # Page section components
│   │   └── ui/          # UI elements (carousel, nav, etc.)
│   ├── store/           # Zustand state stores
│   ├── hooks/           # Custom React hooks (scroll, animation)
│   ├── utils/           # GSAP animation helpers and utilities
│   ├── App.jsx          # Root component and layout
│   └── main.jsx         # Entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🤸 Quick Start

### Prerequisites

Ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** — v18.0 or later
- **[npm](https://www.npmjs.com/)** — v9.0 or later (or pnpm / yarn)
- **Git**

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/your-username/macbook-website.git
cd macbook-website
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

**4. Open in browser**

Navigate to [http://localhost:5173](http://localhost:5173) to view the project.

> 💡 **Tip:** For the best development experience, use a modern Chromium-based browser with hardware acceleration enabled.

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Build the optimised production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---


## 🚀 Deployment

This project is deployed on **[Vercel](https://vercel.com)** for zero-config, production-grade hosting.

To deploy your own instance:

```bash
npm run build
```

Then connect your repository to Vercel — it auto-detects Vite and configures the build pipeline.

Alternatively, deploy with the Vercel CLI:

```bash
npx vercel --prod
```

---

## 📚 Key Concepts & Learning Outcomes

Working through this project teaches:

- Setting up and managing a **Three.js scene** inside a React component lifecycle
- Using **GSAP ScrollTrigger** to link timeline progress to scroll position
- Implementing **scroll-synced video** playback with requestAnimationFrame
- Creating **pinned scroll sections** for storytelling-style page flows
- Building a **custom animated carousel** without third-party dependencies
- Managing **global animation state** with Zustand across components
- Optimising **3D assets** and animations for web performance

---


---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ using React, Three.js & GSAP

⭐ Star this repo if you found it helpful!

</div>
