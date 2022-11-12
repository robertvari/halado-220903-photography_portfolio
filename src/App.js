import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <div>
        <Header/>

        <LandingPage/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
