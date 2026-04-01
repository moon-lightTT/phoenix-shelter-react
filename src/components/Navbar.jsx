import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/icons/avatar.svg" alt="Логотип приюта" className="navbar-icon" />
        <span>Приют Феникс</span>
      </div>
      <div className="navbar-links">
        <a href="#hero">Главная</a>
        <a href="#dogs">Собаки</a>
        <a href="#donate">Помочь</a>
        <a href="#contacts">Контакты</a>
      </div>
    </nav>
  );
}