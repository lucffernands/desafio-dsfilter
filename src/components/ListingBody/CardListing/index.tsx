import { ProductDTO } from '../../../models/product';
import './styles.css';

type Props = {
    product: ProductDTO;
}


export default function CardListing({ product }: Props) {

    return (
        <section id="dsf-card-listing" className="dsf-card-container">
            <div className="dsf-product-details">
                <p>{product.name}</p>
                <h3>R$ {product.price.toFixed(2)}</h3>
            </div>
        </section>
    );
}