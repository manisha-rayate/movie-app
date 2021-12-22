import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBarDrawer from "./components/appBar/appBar";
import routes from "./routes/routes";
import "../src/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <AppBarDrawer />
      <div className="main-content-container">
        <Routes>
          {routes.map((route) => (
            <Route
              exact
              path={route.path}
              key={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
