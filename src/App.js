import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import { Footer, HomeNav } from "./components";
import { Home } from "./pages";
function App() {
  return (
    <div>
      <HomeNav />
      <div className="body">
        <Home></Home>
        <Footer />
      </div>
    </div>
  );
}

export default App;
