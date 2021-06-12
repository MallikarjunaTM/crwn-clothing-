import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching,selectIsCollectionLoaded} from '../../redux/shop/shop.selector';
import {compose} from 'redux';
import withSpinner from '../with-spinner/with-spinner.component';
import collectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading:selectIsCollectionFetching
})

const CollectionOverviewContainer=compose(connect(mapStateToProps),withSpinner)(collectionOverview);

export default CollectionOverviewContainer;