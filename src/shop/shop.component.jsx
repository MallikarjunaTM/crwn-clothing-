import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionOverview from '../components/collection-overview/collection-overview.component';
import { firestore,convertCollectionSnapshotToMap } from '../firebase/firebase.utils';
import CollectionPage from '../pages/collection/collection.component';
import {updateCollections} from '../redux/shop/shop.actions';
import WithSpinner from '../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner =WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component{ 
    state = {
        isLoading:true
    }

    unsubscribeFromAuth=null 
    

    componentDidMount(){
        const {updateCollections}=this.props;
        const collectionRef= firestore.collection('collectionsItems');
        collectionRef.get().then(snapshot=>{
            const collectionsMap=convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({isLoading:false});
        })
    }
    render(){
    const {match} = this.props
    return <div className='shop-page'>
        <Route exact path={`${match.path}`} 
        render={(props)=><CollectionOverviewWithSpinner isLoading={this.state.isLoading} {...props}/>} />
        <Route path={`${match.path}/:collectionId`} 
        render={(props)=><CollectionPageWithSpinner isLoading={this.state.isLoading} {...props}/>}/>
    </div>
    }
}

const mapDispatchToPropos=dispatch=>({
    updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToPropos)(ShopPage);