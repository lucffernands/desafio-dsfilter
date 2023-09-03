import { useEffect, useState } from "react";
import Cardfilter from "./CardFilter";
import CardListing from "./CardListing";
import { ProductDTO } from "../../models/product";
import * as productService from "../../models/product-service";

type QueryParams = {
    valueMin: number;
    valueMax: number;
};

export default function ListingBody() {

    const MIN_PRICE = 0;
    const MAX_PRICE = Number.MAX_VALUE;

    const [queryParams, setQueryParams] = useState<QueryParams>({
        valueMin: MIN_PRICE,
        valueMax: MAX_PRICE
    });

    const [products, setProducts] = useState<ProductDTO[]>([]);
    const [contextListCount, setcontextListCount] = useState<number>(0);

    useEffect(() => {
        const newFilter = productService.findByPrice(queryParams.valueMin, queryParams.valueMax);
        setProducts(newFilter);
        setcontextListCount(newFilter.length);
    }, [queryParams]);

    function handleFilter(min: number, max: number) {
        const newMin = min;
        const newMax = max;
        setQueryParams({ valueMin: newMin || MIN_PRICE, valueMax: newMax || MAX_PRICE });
    }

    return (
        <main>
            <div className="dsf-container">
                <Cardfilter onFilter={handleFilter} />
            </div>
            <div className="dsf-container">
                {
                    products.map(product => <CardListing key={product.id} product={product} />)
                }
            </div>
        </main>
    );
}