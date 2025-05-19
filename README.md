# 🔤 Word The Scrambler Up

An interactive, modern **word unscramble puzzle game** built with **React**, **TypeScript**, and **Vite**. This game challenges players to unscramble shuffled words, strategically use hints, and earn points — all within a clean, responsive, and gamified UI.

## 🌐 Live Demo

👉 [Play the Game on Netlify](https://wordthescramblerup.netlify.app/)

## 📂 GitHub Repository

🔗 [https://github.com/NikzRN01/wordthescramblerup](https://github.com/NikzRN01/wordthescramblerup)

---

## 🎮 Game Features

- 🧠 Unscramble shuffled words to score points
- 💡 Hint button reveals clues (costs points)
- 🏆 Scoring system:
  - +10 for each correct answer
  - -5 for each hint used
- 🎯 Real-time feedback:
  - Animated success/failure indicators
  - Transitions to the next word
- 🔄 Restart option to reset score and game state
- 📱 Fully responsive design for mobile and desktop
- 🎨 Doodle-style animated background and smooth UI animations

---

## 🚀 Tech Stack

- **React** – Component-based UI
- **TypeScript** – Type safety
- **Vite** – Fast frontend tooling
- **Framer Motion** – UI animations
- **Tailwind CSS** (or CSS Modules) – Styling and layout
- **Netlify** – Hosting and deployment

---

## 🧩 Word Data Example

```ts
export const words = [
  { word: "planet", hint: "Orbits the sun" },
  { word: "bridge", hint: "Connects two places" },
  { word: "guitar", hint: "A musical instrument with strings" },
];
```

```
# Clone the repo
git clone https://github.com/NikzRN01/wordthescramblerup.git
cd wordthescramblerup

# Install dependencies
npm install

# Run the app
npm run dev
```
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

