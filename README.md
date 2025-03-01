# sentimeter
 
# Sentiment Analysis Web App

A **Sentiment Analysis Web App** built with **React** and **Tailwind CSS**, using the **Sentiment.js** library with the **AFINN-165 wordlist** for analyzing the sentiment of English text. This app provides real-time sentiment analysis and returns whether the sentiment is **positive**, **negative**, or **neutral** based on the input text.

---

## Overview

The **Sentiment Analysis Web App** allows users to input any **English text** and analyzes the sentiment using the **AFINN-165 wordlist** from the **Sentiment.js** library. Based on the analysis, the app classifies the sentiment as **Positive**, **Negative**, or **Neutral** and displays a corresponding sentiment score. 

The front-end of the application is developed with **React** and styled using **Tailwind CSS** for a clean, responsive user interface.

---

## Features

- **Real-Time Sentiment Analysis**: Instant feedback on sentiment classification (positive, negative, neutral) as you type or submit text.
- **Clean & Modern UI**: Built with **Tailwind CSS**, ensuring a simple yet elegant design that adapts to any screen size.
- **Sentiment Score**: Each analysis includes a numerical sentiment score, showing the strength of the sentiment.
- **Instant Results**: Get immediate feedback as soon as text is entered, making the app perfect for quick sentiment checks.

---

## Tech Stack

- **Frontend**:
  - React.js
  - Tailwind CSS
- **Sentiment Analysis**:
  - Sentiment.js (utilizing the **AFINN-165** wordlist for sentiment scoring)
- **Development Tools**:
  - npm / Yarn (for package management)
  
---

## Installation

To get this app running locally, follow these simple steps:

### Prerequisites

- **Node.js** (v14.x or later)
- **npm** or **Yarn** (a package manager of your choice)

### Setup Instructions:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AlparslanAbdikoglu/sentimeter.git
   cd sentiment / project
   ```

2. **Install dependencies**:
   - Using **npm**:
     ```bash
     npm install
     ```
   - Or using **Yarn**:
     ```bash
     yarn install
     ```

3. **Start the development server**:
   - If you’re using **npm**:
     ```bash
     npm run dev
     ```
   - Or with **Yarn**:
     ```bash
     yarn run dev
     ```

4. **Access the app** in your browser at `http://localhost:3000`.

---

## Usage

Once the app is running, follow these steps to use it:

1. Open the app in your browser.
2. Type or paste any **English text** into the input field.
3. The app will instantly analyze the sentiment and display one of the following results:
   - **Positive**: The text has a positive sentiment.
   - **Negative**: The text has a negative sentiment.
   - **Neutral**: The text has no significant sentiment.
4. The sentiment score will be displayed alongside the label. A positive score indicates positive sentiment, a negative score indicates negative sentiment, and a score of 0 indicates neutral sentiment.

---

## Example

### Input:
```text
I absolutely love this product! It's amazing and works flawlessly.
```

### Output:
- **Sentiment**: **Positive**
- **Score**: **+4**

---
### Additional Notes:
- The **AFINN-165 wordlist** is used for the sentiment analysis. This wordlist is a pre-compiled list of words with sentiment scores, which allows for a straightforward analysis of English text sentiment.
- The app is designed to work exclusively with **English text for the time being **.

---
