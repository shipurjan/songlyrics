import "./layout.css";
import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";

export const Layout = (props) => {
  return (
    <div className="App">
      <Header />
      <main>
      {props.children}
      </main>
      <Footer/>
    </div>
  );
}