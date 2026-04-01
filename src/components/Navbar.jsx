import "../styles/Navbar.css";
import { getImagePath } from "../utils/paths";

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={getImagePath("/icons/avatar.svg")} alt="Логотип приюта" className="navbar-icon" />
        <span>Приют Феникс</span>
      </div>
      <div className="navbar-links">
        <button onClick={() => scrollToSection("hero")} className="nav-link">Главная</button>
        <button onClick={() => scrollToSection("dogs")} className="nav-link">Собаки</button>
        <button onClick={() => scrollToSection("donate")} className="nav-link">Помочь</button>
        <button onClick={() => scrollToSection("contacts")} className="nav-link">Контакты</button>
      </div>
    </nav>
  );
}