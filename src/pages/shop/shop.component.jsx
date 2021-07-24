import React from 'react';
import { Route } from 'react-router-dom';
// import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
// import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

import CollectionContainer from '../../pages/collection/collection.container';

// import CollectionPage from '../collection/collection.component';

// import {
//   firestore,
//   convertCollectionSnapshotToMap,
// } from '../../firebase/firebase.utils';

// import { updateCollections } from '../../redux/shop/shop.actions';

// import WithSpinner from '../../components/with-spinner/with-spinner.component';

// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // state = {
  //   loading: true,
  // };

  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection('collections');
    //   fetch(
    //     'https://firestore.googleapis.com/v1/projects/crwn-db-a71c8/databases/(default)/documents/collections'
    //   )
    //     .then(response => response.json())
    //     .then(collections => console.log(collections));
    // this.unsubscribeFromSnapshot
    // =
    // collectionRef.get().then(snapshot => {
    //   const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    // .onSnapshot(async snapshot => {
    // const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
  }

  render() {
    const { match } = this.props;
    // const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  // updateCollections: collectionsMap =>
  //   dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
