import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function ChiefCard({ chefs }) {
  return (
    <div className="chefs-card">
      <img src={chefs.img} alt="" />
      <div className="chefs-card-info">
        <h3 className="chefs-card-name">{chefs.name}</h3>
        <p className="chefs-recipe-count">
          Recipes: <b>{chefs.recipesCount}</b>
        </p>
        <p className="chefs-kitchen">
        Kitchen: <b>{chefs.kitchen}</b>
        </p>
        <p className="chefs-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </div>
    </div>
  );
}
