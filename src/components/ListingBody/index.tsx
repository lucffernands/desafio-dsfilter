import { useEffect, useState } from "react";
import Cardfilter from "./CardFilter";
import CardListing from "./CardListing";
import { ProductDTO } from "../../models/product";
import * as productService from "../../models/product-service";
import { ContextListCount } from "../../utils/context-listing";
import Header from "../Header";

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

    const [contextListCount, setContextListCount] = useState<number>(0);

    useEffect(() => {
        const newFilter = productService.findByPrice(queryParams.valueMin, queryParams.valueMax);
        setProducts(newFilter);
        setContextListCount(newFilter.length);
    }, [queryParams]);

    function handleFilter(min: number, max: number) {
        const newMin = min;
        const newMax = max;
        setQueryParams({ valueMin: newMin || MIN_PRICE, valueMax: newMax || MAX_PRICE });
    }

    return (
        <>
            <ContextListCount.Provider value={{ contextListCount, setContextListCount }} >
                <Header />
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
            </ContextListCount.Provider>
        </>

    );
}