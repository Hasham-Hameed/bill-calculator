# 🧾 Bill Calculator

A small project that calculates the final price of a purchase after a
percentage discount — built two ways:

- bill_calculator.py — the original command-line version
- index.html — a receipt-styled web front end for the same logic

Live demo:  https://hasham-hameed.github.io/bill-calculator/

---

## ✨ Features

- Enter a price, quantity, and discount percentage
- Instantly see the subtotal, discount amount, and total due
- No build step, no dependencies — plain HTML/CSS/JS
- CLI version for running the same calculation in a terminal

## 📸 Preview

Open `index.html` in a browser and you'll see a receipt-shaped card that
updates live as you type — subtotal, discount, and total, styled like a
printed till receipt.

## 🚀 Getting started

### Run the web version
Just open `index.html` in any browser, or serve it locally:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

### Run the CLI version

```bash
python bill_calculator.py
```

## 🗂️ Project structure

```
bill-calculator/
├── index.html          # front end (HTML/CSS/JS)
├── bill_calculator.py  # command-line version
├── README.md
├── LICENSE
└── .gitignore
```

## 🛠️ Built with

- Python (CLI logic)
- HTML / CSS / vanilla JavaScript (front end)

## 📄 License

MIT — see [LICENSE](LICENSE).

## Regards

Hasham Hameed
