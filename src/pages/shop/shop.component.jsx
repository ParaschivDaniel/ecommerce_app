import CollectionOverview from "../../components/collections-overview/collections-overview.component";

import { Route } from "react-router-dom"

import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
    return (
        <div className="shop-page">
            <Route component={CollectionOverview} exact path={`${match.path}`} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>

    )
}



export default ShopPage;