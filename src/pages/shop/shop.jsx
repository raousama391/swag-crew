import React from "react";
import ShopData from "./shop-data";
import CollectionPreview from "../../components/preview-collection/collection-preview";
import { useState } from "react";

function ShopPage() {
  const [state] = useState({ collections: ShopData });

  return (
    <div className="shop-preview">
      {state.collections
        .map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
  );
}

export default ShopPage;
