# NexusAI — AI-Powered Product Recommendation System

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
![React](https://img.shields.io/badge/React-18-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-teal.svg)
![AI Models](https://img.shields.io/badge/AI_Engines-OpenAI_%7C_Gemini_%7C_Groq_%7C_Smart_NLP-emerald.svg)

An AI-driven product recommendation web application built for the **AI Engineer Assessment**. The system accepts free-form natural language user preferences (such as *"I want a phone under $500 with great camera and battery"* or *"Best lightweight laptop for coding"*), analyzes user intent, extracts budget caps and desired features, and dynamically recommends and ranks matching items from a product catalog with tailored AI reasoning.

---

## 🌟 Key Features

### 1. Dual AI Recommendation Architecture
- **External AI LLM Integration**:
  - **OpenAI GPT-4o-mini**: Structured JSON mode extracting intent, scoring products (50-99%), and outputting tailored rationale for why each item fits the user's budget and criteria.
  - **Google Gemini 1.5 Flash**: High-speed reasoning with structured schema response.
  - **Groq (LLaMA 3.3 70B)**: Ultra-low latency open weights inference.
- **Built-in Smart Heuristic & NLP Fallback Engine**:
  - Automatically activates when no API key is configured or during quota limitations.
  - Parses budget thresholds (e.g. `under $500`, `below $1200`), detects product categories, analyzes intent keywords, calculates relevance scores, and generates human-like recommendation explanations.
  - **Ensures the app works out-of-the-box on Vercel without requiring the reviewer to set up environment keys immediately.**

### 2. Conversational Intent & Criteria Extraction
When the user submits a preference, the AI displays:
- **Conversational Summary**: A direct response addressing the user's request.
- **Extracted Criteria Badges**:
  - 🏷️ **Detected Category** (e.g., *Smartphones*, *Laptops*, *Audio*)
  - 💰 **Budget Constraint** (e.g., *≤ $500*)
  - 🎯 **Target Features** (e.g., *Camera*, *Battery*, *ANC*, *Gaming*)
- **Per-Product AI Reasoning**: Each recommended card features a **"Why AI Recommended This"** card explaining how it matches the user's exact criteria.
- **Match Score**: Visual match percentage badge (e.g., *96% Match*) and *Top AI Pick* badge for the best recommendation.

### 3. Interactive E-Commerce Experience
- **Realistic Catalog**: Diverse categories including Smartphones, Laptops, Audio, Wearables, Gaming, Cameras, and Productivity Accessories.
- **Dual Browsing**: When recommendations are active, the app prioritizes AI matches while allowing users to explore remaining items.
- **Category & Sorting Controls**: Traditional filters working hand-in-hand with AI results (sort by AI Match, Price, Rating).
- **Product Details Modal**: Full specifications sheet, warranty, and features breakdown.
- **Cart & Toast Feedback**: Interactive shopping cart with animated feedback.
- **Quick Preset Chips**: 1-click test prompts for rapid evaluation.

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: React 18, TypeScript, Tailwind CSS v4, Lucide Icons, Canvas-Confetti
- **Build Tool**: Vite (blazing fast HMR and sub-second builds)
- **AI Integrations**: OpenAI API, Google Gemini API, Groq API, and Rule-based NLP Engine
- **Hosting**: Optimized for Vercel (static edge deployment with client-side rewrites)

### Directory Structure

```
ai-product-recommender/
├── src/
│   ├── components/
│   │   ├── AiInsightsBanner.tsx      # Renders AI summary & parsed criteria
│   │   ├── ApiKeyModal.tsx           # Model & API key configuration modal
│   │   ├── CatalogControls.tsx       # Category pills & sort dropdowns
│   │   ├── HeroSearchBar.tsx         # Natural language search input & preset chips
│   │   ├── LoadingSkeleton.tsx       # Animated loading skeletons
│   │   ├── Navbar.tsx                # Brand header, engine status & cart badge
│   │   ├── ProductCard.tsx           # Product card with AI reasoning callouts
│   │   └── ProductDetailsModal.tsx   # Detailed specs sheet modal
│   ├── data/
│   │   └── products.ts               # Realistic product catalog & sample queries
│   ├── services/
│   │   └── aiRecommendationService.ts # OpenAI / Gemini / Groq / Fallback dispatcher
│   ├── types/
│   │   └── index.ts                  # TypeScript models & schemas
│   ├── App.tsx                       # State coordination & layout
│   ├── index.css                     # Tailwind CSS v4 styling
│   └── main.tsx                      # App entry point
├── vercel.json                       # Routing configuration for Vercel
├── vite.config.ts                    # Vite config with @tailwindcss/vite
└── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ (tested on Node v22)
- npm or pnpm

### Installation
```bash
# Clone or navigate to the project directory
cd ai-product-recommender

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🔑 AI Configuration (Optional)

You can run the app immediately in **Demo Mode (Smart Heuristic Engine)** without any API keys.

To test with live external LLMs:
1. Click the **"AI Settings"** button in the top navigation bar.
2. Select **OpenAI GPT-4o-mini**, **Google Gemini**, or **Groq**.
3. Paste your API key (it is stored securely only in your browser's `localStorage` and sent strictly to the official provider endpoints).
4. Alternatively, specify in `.env`:
   ```env
   VITE_OPENAI_API_KEY=your_key_here
   VITE_GEMINI_API_KEY=your_key_here
   ```

---

## 🚢 Deploying to Vercel

### Method 1: Vercel CLI
```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Deploy
vercel --prod
```

### Method 2: GitHub + Vercel Dashboard (Recommended)
1. Push this directory to your GitHub account:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/ai-product-recommender.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your repository and click **Deploy**.
4. (Optional) Under Environment Variables, add `VITE_OPENAI_API_KEY` or `VITE_GEMINI_API_KEY` if you want a global default key.

---

## 📝 Evaluation Criteria Checklist

- [x] **React Frontend**: Modern, responsive, accessible UI built with TypeScript and Tailwind CSS.
- [x] **AI API Integration**: Supports OpenAI GPT-4o-mini, Gemini, and Groq with structured outputs.
- [x] **User Preferences & Filtering**: Natural language parsing for budget caps, feature matching, and real-time catalog filtering.
- [x] **Clear AI Reasoning**: Explains *why* each product was selected for the user's specific request.
- [x] **Clean & Maintainable Code**: Modular components, typed interfaces, and separated service layer.
- [x] **Production Ready for Vercel**: Includes `vercel.json` and production build verification.
