
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/bodyComponents/Home.jsx";
import "./App.css";
import About from "./components/bodyComponents/About.jsx";
import Contact from "./components/bodyComponents/Contact.jsx";
import Project from "./components/bodyComponents/Project.jsx";
import Docs from "./components/bodyComponents/Docs.jsx";

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-950 via-sky-950 to-slate-900 text-white">
            <Header />
            <main className="flex-grow">
                <Home />
                <Project/>
                <About/>
                <Docs/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
