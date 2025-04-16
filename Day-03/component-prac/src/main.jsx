import { createRoot } from 'react-dom/client';
import './index.css';
import { Header } from "./header.jsx";
import MAIN from "./maincontent.jsx";
import Footer from "./foot.jsx";

createRoot(document.getElementById('root')).render(
    <>
      <Header />
      <MAIN />
      <Footer />
    </>
)