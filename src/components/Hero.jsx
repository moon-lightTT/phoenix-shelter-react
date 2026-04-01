import { useState } from "react";
import "../styles/Hero.css";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert("Пожалуйста, заполните все поля");
      return;
    }
    
    console.log("Сообщение отправлено:", formData);
    alert(`Спасибо, ${formData.name}! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.`);
    
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <h1>Он ждет тебя!</h1>
        <p>Приходи в приют Феникс и найди нового лучшего друга!</p>
      </div>
      <div className="hero-form">
        <h3>Связаться с нами</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Сообщение"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </section>
  );
}