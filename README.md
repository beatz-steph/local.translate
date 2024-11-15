# Multilingual Translation Tool

This is a high-performance multilingual translation tool built with Vite, leveraging a quantized machine learning model for efficient translation. The application supports multiple languages and delivers reliable, real-time translations directly in the browser, inspired by the [Xenova React Translator](https://huggingface.co/spaces/Xenova/react-translator).

## Features

- **ML-Powered Translations**: Uses a quantized machine learning model for swift translations with minimal resource usage.
- **Real-time Translations**: Offers fast, on-the-fly translations without needing server-side processing.
- **Theme Toggle**: Light and dark mode support.
- **Responsive Design**: Optimized for both desktop and mobile viewing.

## Project Structure

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:5173` to see the app in action.

### Usage

1. Select a source and target language from the dropdown menus.
2. Enter the text you wish to translate.
3. View the translated text output instantly within the app.

## Components Overview

- **ModeToggle**: Allows users to toggle between light and dark themes.
- **TranslationContext**: Manages application state for languages and translation text.
- **Query and Response**: Handles the user input (text to be translated) and displays the translated output.

## Technologies Used

- **Vite**: Bundler for fast build times.
- **React**: UI library for creating dynamic components.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Hugging Face Transformers**: Provides the core translation functionality using a quantized model.

## License

This project is open-source and available under the MIT License.

---

This draft README provides a comprehensive overview of your application based on the files provided. Let me know if you'd like any additional sections or details!
