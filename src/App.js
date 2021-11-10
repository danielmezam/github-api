import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//PAGES
import Home from "./pages/Home/Home";
import Followers from "./pages/Followers/Followers";
import UserRepos from "./pages/UserRepos/UserRepos";
import NotFound from "./pages/NotFound/NotFound";
//LAYOUTS
import MainLayout from "./layout/MainLayout";

//CONTEXT
import { DarkModeProvider } from "./context/DarkModeContext";

const App = () => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <MainLayout>
              <Route path="/" exact>
                <Home />
              </Route>
            </MainLayout>
          </Route>

          <Route path="/:path/:path" exact>
            <MainLayout>
              <Route path="/followers/:name" exact>
                <Followers />
              </Route>

              <Route path="/repos/:name" exact>
                <UserRepos />
              </Route>
            </MainLayout>
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </DarkModeProvider>
  );
};

export default App;
