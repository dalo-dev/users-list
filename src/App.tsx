import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-w-[100vw] min-h-[100vh] grid grid-rows-[auto_1fr_auto]">
        <Header />
        <div>Main</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
