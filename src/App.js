import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import ListingPage from './pages/ListingPage';
import Listings from './components/Listings';
import { connect } from 'react-redux';
import { listingsAction } from './store/actions/listingsAction';
import './App.css';

class App extends Component {

  componentDidMount() {
    console.log("App Mounted");
    this.props.listingsAction();
  }

  render() {

     const {listings, loading} = this.props;

     if (listings.error) return <h1>Something went wrong, please refresh the page!</h1>

     if (listings) {

     return (
       
       <BrowserRouter>
       <div className="App">
        <header className="App-header">

      <Switch>
      <Route exact path='/' component={Listings} />

      <Route exact path='/profile/:id' component={ProfilePage} />
      <Route exact path='/listings/:id' component={ListingPage} />

        </Switch>
        </header>
      </div>
      </BrowserRouter>
    );
  } else {
    if (loading) {
      return <h1>Please wait while we load your listings...</h1>
    } else {
      return <h1>Something went wrong, please refresh the page!</h1>
    }
  }
  }
}

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  listingsAction: () => dispatch(listingsAction())
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
