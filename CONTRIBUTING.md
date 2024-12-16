# Contributing to SalatTrails 🕌🤝

Thank you for your interest in contributing to **SalatTrails**! 🙏 Your efforts help make this app better for the Muslim community worldwide. By participating, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Table of Contents 📚

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
  - [Reporting Issues 🐛](#reporting-issues)
  - [Suggesting Features 💡](#suggesting-features)
  - [Submitting Pull Requests 🤲](#submitting-pull-requests)
- [Development Setup 🛠️](#development-setup)
- [Coding Guidelines 📏](#coding-guidelines)
- [Testing 🧪](#testing)
- [Style Guides 🎨](#style-guides)
- [Acknowledgements 🙌](#acknowledgements)

## Code of Conduct 📜

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming and respectful environment for all contributors.

## How to Contribute

### Reporting Issues 🐛

If you find a bug or have a feature request, please open an issue:

1. Navigate to the [Issues](https://github.com/usmanisofficial/SalatTrails/issues) tab.
2. Click on **New Issue**.
3. Choose the appropriate template (Bug Report or Feature Request).
4. Provide a clear and descriptive title.
5. Fill out the template with as much detail as possible.
6. Submit the issue.

### Suggesting Features 💡

Have an idea to improve SalatTrails? We'd love to hear it!

1. Open a new issue in the [Issues](https://github.com/usmanisofficial/SalatTrails/issues) section.
2. Select the **Feature Request** template.
3. Describe your idea and its benefits.
4. Submit the issue for discussion.

### Submitting Pull Requests 🤲

Contributions are welcome! Follow these steps to submit a pull request:

1. **Fork the Repository:**

   - Click the **Fork** button at the top right of the repository page.

2. **Clone Your Fork:**

   ```bash
   git clone https://github.com/usmanisofficial/SalatTrails.git
   cd SalatTrails
   ```

3. **Create a New Branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes:**

   - Commit your changes with clear and descriptive messages.

   ```bash
   git commit -m "Add feature: your feature description"
   ```

5. **Push to Your Fork:**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request:**
   - Go to the original repository and click **New Pull Request**.
   - Select your branch from the forked repository.
   - Provide a detailed description of your changes.
   - Submit the pull request for review.

## Development Setup 🛠️

To set up the project locally, follow these steps:

### Prerequisites

- **Node.js** (v14 or later)
- **Expo CLI**
  ```bash
  npm install -g expo-cli
  ```
- **Git**

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/usmanisofficial/SalatTrails.git
   cd SalatTrails
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables:**

   - Create a `.env` file in the root directory.
   - Add necessary environment variables (refer to `.env.example` if available).

4. **Run the App:**
   ```bash
   expo start
   ```
   - Use the Expo app on your mobile device or an emulator to view the app.

## Coding Guidelines 📏

- **Language:** JavaScript/TypeScript
- **Framework:** React Native with Expo
- **Linting:** Follow the ESLint rules defined in `.eslintrc.js`.
- **Formatting:** Use Prettier for consistent code formatting.
- **Commit Messages:** Use [Conventional Commits](https://www.conventionalcommits.org/) for clear and structured commit messages.

### Example Commit Message

```
feat: add map integration with react-native-maps

- Implemented user location tracking
- Displayed nearby mosques on the map
- Added ability to add visited mosque markers
```

## Testing 🧪

Ensure your changes do not break the app by following these testing guidelines:

1. **Run Existing Tests:**

   ```bash
   npm test
   # or
   yarn test
   ```

2. **Add New Tests:**

   - Write tests for new features or bug fixes.
   - Place tests in the appropriate `__tests__` directory.

3. **Test on Multiple Devices:**
   - Use different screen sizes and platforms (iOS and Android) to ensure compatibility.

## Style Guides 🎨

- **Component Structure:** Keep components modular and reusable.
- **Naming Conventions:** Use clear and descriptive names for files, variables, and functions.
- **Documentation:** Document complex logic and components using comments and README sections.
- **UI/UX:** Follow best practices for mobile design to ensure a smooth user experience.

## Acknowledgements 🙌

- **Open Source Libraries:** Thanks to all the contributors of the libraries used in this project.
- **Community Support:** We appreciate the support and feedback from the SalatTrails community.

---

🙏 **Thank you for contributing to SalatTrails!** Your efforts help build a supportive and connected Muslim community worldwide. If you have any questions or need assistance, feel free to reach out via [usmanisofficial@outlook.com](mailto:usmanisofficial@outlook.com).

---

**Note:** Ensure that you also create a `CODE_OF_CONDUCT.md` file in your repository to maintain a respectful and inclusive environment for all contributors.
