import MainLayout from "./components/Layout/MainLayout";
import MenuLayout from "./components/Layout/MenuLayout";
import "./index.css";
function App() {
  return (
    <div className="h-screen">
      <MenuLayout />
      <MainLayout />
    </div>
  );
}

export default App;
