import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import OurSignature from "./components/OurSignature";
import BestSeller from "./components/BestSeller";

import "./style/landingPage.css";

function App() {
    return (
        <div>
            <div className="myBG">
                <NavigationBar />
                <Intro />
            </div>

            <div className="bestseller">
                <BestSeller />
            </div>

            <div className="oursignature">
                <OurSignature />
            </div>
        </div>
    );
}

export default App;
