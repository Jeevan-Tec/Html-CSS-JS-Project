# Search Bar

Short description
An interactive search bar demo showcasing live filtering, autocomplete suggestions, and keyboard accessible navigation.

Features
- Live filtering of a list as user types
- Optional autocomplete / suggestion dropdown
- Keyboard navigation (arrow keys to traverse suggestions, Enter to select)
- Highlight matching substring in results
- Debounced input handling to improve performance on large lists

Live demo
- (Add hosted link)

Screenshots
- Include screenshots of suggestion dropdown and highlighted matches.

Tech stack
- HTML (index.html)
- CSS (styles.css)
- JavaScript (script.js) — includes debouncing and accessibility behaviors

Files
- index.html — search field and example dataset
- styles.css — styling for input, results, and dropdown
- script.js — filtering logic, keyboard handling, and highlighting
- assets/ — optional icons
- README.md — this file

How to run
1. Open Projects/Search_bar/index.html in a browser.
2. If using an external data source, serve via a local server and update script to fetch the data.

Usage / Controls
- Type into the search field to filter results.
- Up/Down arrows to navigate suggestions; Enter to choose a suggestion.
- Esc to close suggestions or clear input.

Notes
- Provide ARIA attributes for the input and listbox to improve screen-reader support.
- Debounce user input (e.g., 200–300ms) to improve performance with larger datasets.

Known issues / TODO
- Add remote search example (fetch suggestions from an API)
- Add fuzzy matching option (e.g., fuzzy search library)
- Persist recent searches in localStorage

License
- MIT (or repository license)

Author / Maintainer
- Jeevan-Tec
