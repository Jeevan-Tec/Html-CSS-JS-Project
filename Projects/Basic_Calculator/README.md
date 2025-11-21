# Basic Calculator

Short description
A small, dependency-free calculator app that supports basic arithmetic (addition, subtraction, multiplication, division), clear/backspace, and keyboard input.

Features
- Clickable buttons for digits 0–9 and decimal point
- Basic operations: +, −, ×, ÷
- Clear (C) and backspace (⌫)
- Equals (=) to evaluate expressions
- Keyboard support for numbers, operators, Enter (=), Backspace, and Escape (clear)
- Input validation to avoid malformed expressions (e.g., consecutive operators)

Live demo
- (Add GitHub Pages or hosted demo URL here)

Screenshots
- Add a screenshot showing the calculator in light and/or dark mode.

Tech stack
- HTML (index.html)
- CSS (styles.css)
- JavaScript (script.js) — vanilla, no frameworks

Files
- index.html — entry point with calculator markup
- styles.css — styling and responsive layout
- script.js — UI behavior, keyboard handling, and evaluation logic
- assets/ — optional (icons, favicon)
- README.md — this file

How to run
1. Clone the repository or download the project.
2. Open Projects/Basic_Calculator/index.html in any modern browser.
3. (Optional) If you prefer a local server: python -m http.server 8000 from the project root, then open http://localhost:8000/Projects/Basic_Calculator/

Usage / Controls
- Click or press: 0–9 and . for numbers
- Operators: +, -, *, /
- Enter or = to evaluate
- Backspace to delete last character
- Escape or C to clear

Notes
- Expression evaluation should use a safe parsing approach. Avoid directly using eval() on untrusted input; if eval() is used for brevity, document it and consider replacing with a small parser for production.
- Ensure decimal precision handling for operations (consider rounding display to reasonable digits).

Known issues / TODO
- Add parentheses support
- Add memory functions (M+, M-, MR)
- Improve precision/math edge cases
- Add configurable themes (light/dark)

License
- Inherit repository license (MIT). If different, state here.

Author / Maintainer
- Jeevan-Tec
