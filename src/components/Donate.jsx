import { useState } from "react";
import "../styles/Donate.css";
import { getImagePath } from "../utils/paths";

export default function Donate() {
  const [showMoneyModal, setShowMoneyModal] = useState(false);
  const [showFoodModal, setShowFoodModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("courier");

  const handleMoneySubmit = (e) => {
    e.preventDefault();
    console.log("Денежное пожертвование:", { amount, email });
    alert(`Спасибо за пожертвование ${amount} ₽! Ссылка на оплату отправлена на ${email}`);
    setShowMoneyModal(false);
    setAmount("");
    setEmail("");
  };

  const handleFoodSubmit = (e) => {
    e.preventDefault();
    console.log("Пожертвование корма:", { deliveryMethod, email });
    alert(`Спасибо за помощь! Мы свяжемся с вами по email: ${email} для уточнения деталей доставки`);
    setShowFoodModal(false);
    setEmail("");
    setDeliveryMethod("courier");
  };

  return (
    <>
      <section className="donate" id="donate">
        <h2>Помочь приюту</h2>
        <div className="donate-buttons">
          <div className="donate-button-wrapper">
            <img src={getImagePath("/images/paw.png")} alt="Лапа" className="donate-icon paw-icon" />
            <button className="money" onClick={() => setShowMoneyModal(true)}>
              Пожертвовать деньги
            </button>
          </div>
          <div className="donate-button-wrapper">
            <button className="food" onClick={() => setShowFoodModal(true)}>
              Отправить корм
            </button>
            <img src={getImagePath("/images/paw.png")} alt="Лапа" className="donate-icon feed-icon" />
          </div>
        </div>
      </section>

      {/* Модальное окно для денежного пожертвования */}
      {showMoneyModal && (
        <div className="modal-overlay" onClick={() => setShowMoneyModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Пожертвование денег</h3>
            <form onSubmit={handleMoneySubmit}>
              <div className="form-group">
                <label htmlFor="amount">Сумма пожертвования (₽):</label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Введите сумму"
                  required
                  min="50"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email-money">Email:</label>
                <input
                  type="email"
                  id="email-money"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email"
                  required
                />
              </div>
              
              <div className="modal-buttons">
                <button type="submit" className="submit-btn">Отправить</button>
                <button type="button" className="cancel-btn" onClick={() => setShowMoneyModal(false)}>
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Модальное окно для пожертвования корма */}
      {showFoodModal && (
        <div className="modal-overlay" onClick={() => setShowFoodModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Пожертвование корма</h3>
            <form onSubmit={handleFoodSubmit}>
              <div className="form-group">
                <label>Способ доставки:</label>
                <select value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value)}>
                  <option value="courier">Курьером (по Москве)</option>
                  <option value="pickup">Самовывоз (из приюта)</option>
                  <option value="post">Почтой России</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="email-food">Email:</label>
                <input
                  type="email"
                  id="email-food"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email"
                  required
                />
              </div>
              
              <div className="form-group">
                <p className="info-text">Мы свяжемся с вами для уточнения деталей доставки корма</p>
              </div>
              
              <div className="modal-buttons">
                <button type="submit" className="submit-btn">Отправить</button>
                <button type="button" className="cancel-btn" onClick={() => setShowFoodModal(false)}>
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}