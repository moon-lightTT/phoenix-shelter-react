import "../styles/Footer.css";
import { getImagePath } from "../utils/paths";

export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <h3 className="footer-title">Контакты приюта Феникс</h3>
      
      <div className="footer-content">
        <div className="footer-left">
          <h4>Для ваших вопросов и предложений</h4>
          <p>
            <img src={getImagePath("/icons/phone.svg")} alt="Телефон" className="icon" />
            Телефон: +7 (999) 123-45-67
          </p>
          <p>
            <img src={getImagePath("/icons/email.svg")} alt="Email" className="icon" />
            Email: info@phoenix-shelter.ru
          </p>
        </div>
        
        <div className="footer-right">
          <h4>Мы ждем твоего визита</h4>
          <p>
            <img src={getImagePath("/icons/location.svg")} alt="Адрес" className="icon" />
            Адрес: ул. Дружбы, 10, г. Москва
          </p>
          <p>
            <img src={getImagePath("/icons/social.svg")} alt="Соцсети" className="icon" />
            Мы в соцсетях: 
            <a href="#">VK</a> | <a href="#">Instagram</a>
          </p>
        </div>
      </div>
    </footer>
  );
}