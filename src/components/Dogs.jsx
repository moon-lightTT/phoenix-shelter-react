import Layout from "../components/Layout";
import { dogs } from "../data/dogs";
import { Link } from "react-router-dom";
import "../styles/Dogs.css";

export default function Dogs() {
  return (
    <Layout>
      <h1>Наши собаки 🐾</h1>
      <div className="dogs-grid">
        {dogs.map(dog => (
          <div key={dog.id} className="dog-card">
            <img src={dog.image} alt={dog.name} />
            <h2>{dog.name}</h2>
            <p>Возраст: {dog.age} лет</p>
            <p>Порода: {dog.breed}</p>
            <Link to={`/dogs/${dog.id}`}>Подробнее</Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}