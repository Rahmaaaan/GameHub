# Game Hub

Game Hub is a comprehensive web application built using React and TypeScript, designed to provide gamers with an engaging platform to explore and discover various video games. This project incorporates essential aspects of modern web applications, including responsiveness, accessibility, and efficient state management. It consumes data from the RAWG API, one of the largest video game databases, to provide detailed information about games, including titles, thumbnails, screenshots, videos, and more.

## Technologies Used

- **React.js** : Frontend web library
- **TypeScript** : A superset of JavaScript adding static types and modern features
- **RAWG API** : API service providing game data
- **Chakra UI** : UI library for designing the interface
- **react-router-dom** : For routing and navigation in the app

## Features

- **Game Grid:** An organized display of video games in a grid layout for easy browsing. Each cell in the grid represents a game with its corresponding thumbnail.
- **Genre List:** Users can explore games based on their favorite genres, presented as a list of genres to choose from.
- **Platform Selector:** Filter games based on the gaming platform of choice using the Platform Selector.
- **Sort Selector:** Sort games based on various criteria such as popularity and release date using the Sort Selector.
- **Search Input:** A powerful search feature that allows users to find their favorite games directly.
- **Color Mode Switch:** Users can switch between dark mode and light mode based on their preference.
- **Responsive Design:** The application is built with a mobile-first approach and is responsive to different screen sizes.

## Getting Started

Follow these steps to get the project up and running on your local machine for development and testing:

### Prerequisites

Make sure you have the following requirements met:

- Latest version of npm and Node.js installed.
- Windows/Linux/Mac machine.

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/username/projectname.git
   ```

2. Move into the project directory

   ```bash
   cd projectname
   ```

3. Install the dependencies

   ```bash
   npm install
   ```

4. Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first.

5. Add the API key to **src/services/api-client.ts**

6. Run the below command to start the web server.

   ```bash
   npm run dev
   ```

   Open link that shows up in the terminal, with your browser to see the result.

## Demo

Want to see Game Hub in action? Check out our live demo [here](https://game-hub-ten-beta.vercel.app/).

## Screenshots

![Home Page](./pictures/Home%20page.PNG)

![Sort Page](./pictures/Sort%20page.PNG)

## Contributing

Contributions to Game Hub are welcome! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

```bash
git checkout -b feature/your-feature-name
```

3. Make changes and commit them:

```bash
git commit -m "Add your commit message here"
```

4. Push your changes to your branch:

```bash
git push origin feature/your-feature-name
```

5. Create a pull request on the main repository.

Please follow the project's coding guidelines and maintain a clean commit history.
