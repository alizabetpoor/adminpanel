import "./App.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import NotFound from "./pages/NotFound";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App flex items-stretch">
      <Layout>
        <section className="main-container bg-white w-full mt-14 lg:mt-0 pr-2 lg:w-11/12 xl:w-10/12 z-10 pb-16 lg:pb-4 h-full fixed top-0 left-0 overflow-y-scroll">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/orders" component={OrderPage} />
            <Route path="" component={NotFound} />
          </Switch>
        </section>
      </Layout>
    </div>
  );
}

export default App;
