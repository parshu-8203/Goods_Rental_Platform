import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductCard from '../../Components/ProductCard';
import "./Admin.css";
import { MainBar } from '../navbar/Navbar';
const AdminPage = () => {
    const [dataFetched, setDataFetched] = useState(false);
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({
        _id: '',
        ProductName: '',
        Description: '',
        Category: '',
        Location: '',
        Price: '',
        Images: [],
    });
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);
    
    const toggleWidget = () => {
        setIsWidgetOpen(!isWidgetOpen);
        if (isWidgetOpen === true) {
            setProduct({
                id: '',
                ProductName: '',
                Description: '',
                Category: '',
                Location: '',
                Price: '',
                Images: [],
            })
        }
    };

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then((response) => {
                setProducts(response.data);
                setDataFetched(true);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, [dataFetched]);

    const handleClick = (product) => {
        setProduct(product);
        toggleWidget();
    }
    const CombineClick = () => {
        toggleWidget();
        setDataFetched(false);
    }

    return (
        <div>
            {/* <ProductForm /> */}
            <MainBar/>
            <div className="product-cards">
                {products.map((product) => (
                    <ProductCard key={product.id} onClk={handleClick} product={product} />
                ))}
            </div>

            <div className="plus-button-widget-container">
                <button className="plus-button" onClick={toggleWidget}>
                    +
                </button>
                {isWidgetOpen && (
                    <div className="widget">
                        <button className="close-button" onClick={CombineClick}>
                            X
                        </button>
                        {/* Your widget content */}
                        <ProductForm pro={product} />
                    </div>
                )}
            </div>
        </div>
    )
}



export default AdminPage;