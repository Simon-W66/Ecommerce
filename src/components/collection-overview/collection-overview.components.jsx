import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCollectionForPreview} from "../../redux/shop/shop.selector"
import "./collection-overview.styles.scss"
import PreviewColection from "../../components/preview-collection/preview-collection.component"
const CollectionOverview = ({collections}) => {
    return ( 
        <div className="collections-overview">
            {
                   collections.map(({id, ...otherCollectionProps}) => (
                       <PreviewColection key={id} {...otherCollectionProps}/>
                   )) 
                }
        </div>
     );
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})
 
export default connect(mapStateToProps)(CollectionOverview)
