import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product , onClk}) => {
    const { ProductName, Price, Images } = product;
    const firstImage = Images[0];
    const handleClick = () => {
        onClk(product);
        
    }
    return (
      
            <div className="product-card" onClick={handleClick}>
                <img
                    src={`data:image/jpg;base64,${firstImage}`} // Assuming the images are PNG format
                    alt="images"
                    className="product-card-image"
                />
                <div className="product-card-details">
                    <h3 className="product-card-name">{ProductName}</h3>
                    <div className="product-card-price">
                        <span className="product-card-new-price">${Price}/mo</span>
                        <span className="product-card-old-price">$199</span>
                    </div>
                </div>
            </div>
       
    );
};

export default ProductCard;
