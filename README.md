# Hacker's Terminal Simulator 💻🟢

Welcome to my **Hacker's Terminal Simulator** mini project!  
This is a **fun JavaScript project** that simulates a hacker terminal with sequential messages and blinking dots. Totally safe — no real hacking involved 😈

---

## Features 🚀

- Terminal-style **green text** UI  
- Messages appear **one by one** in the correct order  
- **Blinking dots animation** for each line (`.`, `..`, `...`)  
- Random delay between lines to make it **realistic**  
- The **last line blinks forever**  
- Starts only when you click the **"Don't Click"** button  

---

## How it Works 🧠

1. HTML creates a **container** for terminal lines  
2. JavaScript dynamically creates **divs for each line**  
3. `async/await` + `Promises` ensure lines appear **sequentially**  
4. `setInterval` animates the dots for each line  
5. `clearInterval` stops blinking when a line finishes  
6. The last line keeps blinking infinitely  

---

## Tech Stack 🛠️

- **HTML** – structure  
- **CSS** – terminal styling  
- **JavaScript** – logic & animation  

No frameworks, just **vanilla JS**.

---

## 📁 Project Structure

```
Hacker-Terminal-Simulator/
├── index.html
├── style.css
├── script.js
└── README.md
```
---

## Preview 🎥

[Hacker Terminal Preview](https://github.com/user-attachments/assets/00a92fb5-5237-4ab1-a96a-5f4352fa158a)

---

## ⭐ Conclusion

This mini project was fun and helped me practice **async JavaScript, DOM manipulation, and animations**.  
If you like it, **give it a ⭐**!
