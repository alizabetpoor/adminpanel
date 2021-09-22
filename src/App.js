import "./App.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App text-center">
      <Layout>
        <Switch>
          <Route path="/panel" component={HomePage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
