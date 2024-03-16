import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer/>
      },
      {
        path: "/watch",
        element: <WatchPage/>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={appStore}>
      <div>
          <Header/>
          <RouterProvider router={appRouter} />
      </div>
    </Provider>
    
  );
}

export default App;
