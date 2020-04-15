import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

function ProductCard(props) {
  const { id, title, image, description, price } = props;

  return (
    <div className="card">
        <Link to="#" className="cardLink">
          <div className="cardImgWrapper">
            <img src={image} alt={title} className="cardImg" />
          </div>
        </Link>
        <div className="cardInfo">
          <div className="cardTitleBox">
            <Link to="#" className="cardLink">
              <h3 className="cardTitle">{title}</h3>
            </Link>
          </div>
          <div>
            <h4 className="cardPrice">{price}</h4>
            <p className="cardDesc">{description}</p>
            <AddToCartButton id={id} />
          </div>
        </div>
      </div>
  );
}

export default ProductCard;