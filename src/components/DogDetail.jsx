import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { dogs } from "../data/dogs";
import Layout from "./Layout";
import "../styles/DogDetail.css";

export default function DogDetail() {
  const { id } = useParams();
  const dog = dogs.find(d => d.id === parseInt(id));
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  if (!dog) {
    return (
      <Layout>
        <div className="dog-detail-container">
          <div className="dog-detail">Собака не найдена</div>
        </div>
      </Layout>
    );
  }

  const getAgeText = (age) => {
    const ageNum = parseFloat(age);
    const years = Math.floor(ageNum);
    const months = Math.round((ageNum % 1) * 12);
    
    let ageString = '';
    if (years > 0) {
      if (years === 1) ageString += `${years} год`;
      else if (years < 5) ageString += `${years} года`;
      else ageString += `${years} лет`;
    }
    if (months > 0) {
      if (years > 0) ageString += ' ';
      if (months === 1) ageString += `${months} месяц`;
      else if (months < 5) ageString += `${months} месяца`;
      else ageString += `${months} месяцев`;
    }
    
    return ageString || 'менее месяца';
  };

  const genderText = dog.gender === 'female' ? 'Девочка' : 'Мальчик';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Заявка на знакомство:", {
      dog: dog.name,
      ...formData
    });
    alert(`Спасибо, ${formData.name}! Мы свяжемся с вами для знакомства с ${dog.name}`);
    setShowForm(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return (
    <Layout>
      <div className="dog-detail-container">
        <div className="dog-detail">
          <Link to="/" className="back-button">← Назад к списку собак</Link>
          
          <div className="dog-detail-content">
            <div className="dog-detail-image">
              <img src={dog.image} alt={dog.name} />
            </div>
            
            <div className="dog-detail-info">
              <h2>{dog.name}</h2>
              <p className="dog-breed">Порода: {dog.breed}</p>
              <p className="dog-age">Пол: {genderText}</p>
              <p className="dog-age">Возраст: {getAgeText(dog.age)}</p>
              <p className="dog-description">{dog.description}</p>
              
              <div className="dog-story">
                <h3>История {dog.name}</h3>
                <p>{dog.story}</p>
                <p className="arrival-date">Поступил{dog.gender === 'female' ? 'а' : ''} в приют в {dog.arrivalDate}</p>
              </div>
              
              <button className="adopt-button" onClick={() => setShowForm(true)}>
                Познакомиться
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {showForm && (
        <div className="dog-detail-modal-overlay" onClick={() => setShowForm(false)}>
          <div className="dog-detail-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Заявка на знакомство</h3>
            <form onSubmit={handleSubmit}>
              <div className="dog-detail-form-group">
                <label>Ваше имя *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Введите ваше имя"
                  required
                />
              </div>
              
              <div className="dog-detail-form-group">
                <label>Телефон *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+7 (999) 123-45-67"
                  required
                />
              </div>
              
              <div className="dog-detail-form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="dog-detail-form-group">
                <label>Сообщение</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Расскажите немного о себе"
                  rows="3"
                />
              </div>
              
              <div className="dog-detail-modal-buttons">
                <button type="submit" className="dog-detail-submit-btn">Отправить</button>
                <button type="button" className="dog-detail-cancel-btn" onClick={() => setShowForm(false)}>
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}