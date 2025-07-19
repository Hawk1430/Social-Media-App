# Social Media App

## 🚀 Live Preview

[View the app live on Netlify](https://grand-gnome-300330.netlify.app/)

---

## Table of Contents

-   [Project Structure](#project-structure)
-   [App Flow](#app-flow)
-   [Component & File Documentation](#component--file-documentation)
    -   [Entry Point & App Initialization](#entry-point--app-initialization)
    -   [Routing](#routing)
    -   [State Management (Redux)](#state-management-redux)
    -   [Theme](#theme)
    -   [Components](#components)
        -   [Header](#header)
        -   [SearchBar](#searchbar)
        -   [MediaCard](#mediacard)
        -   [GradientButton](#gradientbutton)
    -   [Pages](#pages)
        -   [Home](#home)
        -   [Items (Post Details)](#items-post-details)
-   [Styling](#styling)
-   [Data Flow](#data-flow)
-   [How It Works](#how-it-works)
-   [Extending the App](#extending-the-app)

---

## Project Structure

```
src/
  App.jsx
  main.jsx
  index.css
  App.css
  theme/
    theme.js
  store/
    store.js
  features/
    posts/
      postsSlice.js
  components/
    Header.jsx
    MediaCard.jsx
    MediaCard.css
    GradientButton.jsx
    SearchBar.jsx
  pages/
    Home.jsx
    Home.css
    Items.jsx
    Items.css
  assets/
    react.svg
public/
  image.jpg
  vite.svg
```

---

## App Flow

1. **App Initialization**:

    - The app is bootstrapped in `main.jsx`, wrapped with Material-UI's `ThemeProvider` and Redux's `Provider`.
    - The main component is `App.jsx`.

2. **Routing**:

    - Uses `react-router-dom` for client-side routing.
    - Main routes:
        - `/` → Home page (list of posts)
        - `/item/:id` → Post details page

3. **State Management**:

    - Uses Redux Toolkit (`@reduxjs/toolkit`) for global state.
    - Posts are fetched from an API and stored in Redux.

4. **UI Components**:

    - Header with navigation and responsive drawer.
    - Search bar for filtering posts.
    - Media cards for displaying post previews.
    - Gradient buttons for actions.

5. **Pages**:
    - Home: Shows all posts, allows searching.
    - Items: Shows details for a single post, with tabs for details/user info and a list of other posts.

---

## Component & File Documentation

### Entry Point & App Initialization

#### `main.jsx`

-   Sets up the React app with:
    -   Material-UI theme (`ThemeProvider`)
    -   CSS baseline for consistent styling
    -   Redux store (`Provider`)
    -   Renders the `App` component

#### `App.jsx`

-   Sets up routing using `BrowserRouter` and `Routes`.
-   Renders the `Header` on all pages.
-   Defines two main routes:
    -   `/` → `Home`
    -   `/item/:id` → `Items`

---

### Routing

-   **`react-router-dom`** is used for navigation.
-   The `Header` uses `useLocation` to highlight the active route and `useNavigate` for programmatic navigation.

---

### State Management (Redux)

#### `store/store.js`

-   Configures the Redux store with a single reducer: `posts`.

#### `features/posts/postsSlice.js`

-   Defines a slice for posts:
    -   `fetchPosts` async thunk fetches posts from `jsonplaceholder.typicode.com/posts`.
    -   Handles loading, success, and error states.
    -   State shape: `{ data: [], loading: true, error: null }`

---

### Theme

#### `theme/theme.js`

-   Customizes Material-UI theme:
    -   Sets the font family to Montserrat.
    -   Sets the default background color for the body.

---

### Components

#### `Header.jsx`

-   Responsive app bar with navigation icons.
-   Uses Material-UI's `AppBar`, `Toolbar`, and `Drawer`.
-   Highlights the active route using `useLocation`.
-   On mobile, shows a hamburger menu; on desktop, shows icon buttons.
-   Navigation handled with `useNavigate`.
-   **Note:** The current `handleIconClick` only handles 'home' navigation. For full navigation, update it to handle all icons.

#### `SearchBar.jsx`

-   Controlled input for searching posts.
-   Uses Material-UI's `InputBase` and `Paper`.
-   Accepts `searchTerm` and `setSearchTerm` as props.

#### `MediaCard.jsx`

-   Displays a post preview with image, title, and truncated description.
-   "Read more" expands the description.
-   "Go to post" button navigates to the post details page.
-   Uses Material-UI and custom CSS.

#### `GradientButton.jsx`

-   Reusable button with gradient background.
-   Accepts `active` prop to toggle between active/inactive styles.
-   Uses Material-UI's `Button`.

---

### Pages

#### `Home.jsx`

-   Fetches posts on mount using `fetchPosts`.
-   Allows searching posts by title.
-   Displays posts using `MediaCard`.
-   Shows loading spinner or error message as needed.

#### `Items.jsx`

-   Displays details for a single post (based on `id` from URL).
-   Shows post image, title, and body.
-   Tabs for "Details" and "User Info".
-   "Back" button navigates to home.
-   Shows other posts (excluding the current one) at the bottom.

---

## Styling

-   Uses Material-UI for most components.
-   Custom CSS for layout and card styles (`Home.css`, `Items.css`, `MediaCard.css`).
-   Responsive design: Header adapts to mobile/desktop.

---

## Data Flow

1. **Fetching Posts**:

    - On Home mount, `fetchPosts` is dispatched.
    - Posts are stored in Redux and accessed via `useSelector`.

2. **Searching**:

    - `SearchBar` updates `searchTerm` state.
    - Posts are filtered in `Home` based on the search term.

3. **Navigation**:

    - Clicking a card or navigation icon uses `useNavigate` to change routes.
    - The `Header` updates the active icon based on the current route.

4. **Post Details**:
    - `Items` page gets the post ID from the URL.
    - Finds the post in Redux state and displays its details.
    - Shows other posts as recommendations.

---

## How It Works

-   **Home Page**:

    -   Displays all posts.
    -   User can search posts by title.
    -   Each post is shown as a card with a preview and "Read more" option.
    -   Clicking a card navigates to the post details.

-   **Header**:

    -   Always visible.
    -   Shows navigation icons for Home, Notifications, Bookmarks, and Profile.
    -   On mobile, icons are in a drawer.

-   **Post Details Page**:

    -   Shows the selected post's image, title, and body.
    -   Tabs for switching between post details and user info.
    -   "Back" button returns to Home.
    -   Shows other posts at the bottom.

-   **State Management**:

    -   All posts are managed in Redux.
    -   UI components subscribe to Redux state using `useSelector`.

-   **Styling**:
    -   Uses a custom Material-UI theme.
    -   Responsive and modern look.

---

## Extending the App

-   Add authentication for user-specific features.
-   Implement real notifications and bookmarks.
-   Add user profiles and post creation.
-   Improve search (e.g., by body, user).
-   Add pagination or infinite scroll.

---

## Getting Started

1. Install dependencies:
    ```
    npm install
    ```
2. Start the development server:
    ```
    npm run dev
    ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## License

MIT

---

If you need further breakdowns (e.g., prop types, function-by-function docs), let me know!
