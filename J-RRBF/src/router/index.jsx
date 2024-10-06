import {
  createBrowserRouter,
} from "react-router-dom";

import App from "../views/Home.jsx";
import Page01 from "../views/Page01.jsx";
import Page02 from "../views/Page02.jsx";
import Page03 from "../views/Page03.jsx";
import NoMatch from "../views/NoMatch.jsx";
import Root from "../App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NoMatch />,
    children: [
      { path: "/", element: <App/> },
      { path: "/page01", element: <Page01/> },
      { path: "/page02", element: <Page02/> },
      { path: "/page03/:param01", element: <Page03/> },
    ]},
]);

export default router;
