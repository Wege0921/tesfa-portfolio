import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Layout component that will be used for all routes
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Header />
      
      <main className="flex-1 w-full bg-white dark:bg-gray-900">
        <div className="w-full h-full">
          <Outlet />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
