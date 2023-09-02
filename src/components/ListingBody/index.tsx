import Cardfilter from "./CardFilter";
import CardListing from "./CardListing";

export default function ListingBody() {

    return (
        <main>
            <div className="dsf-container">
                <Cardfilter />
            </div>
            <div className="dsf-container">
                <CardListing />
            </div>
        </main>
    );
}