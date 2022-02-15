<h1 align="center">
  Reign Front End Developer Challenge
</h1>

The web application request and shows data from the Hackers News public API.
[**Demo Website**](https://frontend-challenge-smaldo.netlify.app/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Functionalities

- Responsive website: Achieved with css using @emotion/styled.
- Design: Achieved with css using @emotion/styled and react-icons.
- Hack News API Calls: Achieved with axios and redux thunk.
- State management: Achieved with redux toolkit.
- Persistent state: Achieved with redux-persist.
- Deployment: Achieved using netlify with git workflow.

## Software design

### API data
```
export interface INewsItem {
    objectID: string;
    author: string;
    story_title: string | null;
    story_url: string | null;
    created_at: string;
}
```
### Redux Store
```
export interface INewsState {
    news: { [key: string]: INewsItem };               //News shown after API Call
    favs: {                                           //Favorites News by category.
        'Reactjs': { [key: string]: INewsItem };
        'Angular': { [key: string]: INewsItem };
        'Vuejs': { [key: string]: INewsItem };
    };
    show: 'all' | 'favs';                             //What is currently being shown
    query: 'Reactjs' | 'Angular' | 'Vuejs';           //Current category of news that is being retrieved from the API
    page: number;                                     //Current page that is being retrieved from the API
}
```
### Component Structure
```
App
└── HomePage
    ├── Navbar
    ├── Favs
    ├── SelectQuery 
    ├── News
    │   └── NewsItem
    ├── Favs  
    └── Pagination 
```
## Known bugs

- Local storage allows a maximum of 10MB, too much news in favorites can cause problems, if it happens you need to clear the data from the browser.
