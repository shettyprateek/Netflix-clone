import { Provider } from "react-redux";
import Body from "./components/Body";
import "./index.css";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import MovieContainer from "./components/MovieContainer";
import Error from "./components/Error";
import MovieSearchResults from "./components/MovieSearchResults";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path: "/search/:searchQuery",
          element: <MovieSearchResults />,
        },
        {
          path: "/movie/:movieId",
          element: <MovieContainer />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
