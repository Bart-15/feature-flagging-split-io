# 🏦 React Loan Application with Feature Flag (Split.io)

This is a small React project demonstrating how to use [Split.io](https://www.split.io/) feature flags to conditionally render a **"Loan Now"** button in a loan application form.

## ✨ Features

- Feature flag controlled button using Split.io (`loan_now_button`)
- Anonymous user tracking using `uuid` + `localStorage`
- Simple styling with Tailwind CSS
- Ready for future A/B testing or percentage rollout

---

## 📦 Technologies Used

- Vite
- Split.io React SDK
- uuid (for anonymous unique user key)
- Tailwind CSS (optional)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Bart-15/feature-flagging-split-io.git
cd react-loan-feature-flag
```

### 2. Install dependencies

```bash
npm install
```

### 2. Create Environment File

Create a .env file in the root directory:

```bash
VITE_SPLIT_AUTH_KEY="your_split_client_side_sdk_key_here"
```

📝 Make sure you're using the client-side SDK key, not the server-side or admin key.

### 3. Start the App

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.
