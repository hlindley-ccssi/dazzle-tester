var React = require('react');
// var AuthContainer = require('../auth/containers/AuthContainer');
// var Nav = require('../nav/Nav');
// import { Header, Loader } from 'semantic-ui-react'
// import * as firebase from 'firebase';

var container;

var PageContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  // getInitialState: function() {
  //     return {
  //         loggedIn: (null !== firebase.auth().currentUser),
  //         isLoading: true
  //     }
  // },
  componentWillMount: function() {

    // firebase.auth().onAuthStateChanged(firebaseUser => {
    //     if (firebaseUser) {
    //         console.log("Logged IN", firebaseUser);
    //         this.setState({
    //             loggedIn: (null !== firebaseUser),
    //             isLoading: false
    //         })
    //         this.context.router.replace('/app')
    //     } else {
    //       console.log('Not logged in');
    //       this.setState({
    //           isLoading: false
    //       })
    //     }
    // });
  },
  render: function() {
    return (
      <div>
          
      </div>
    )
  }
});

module.exports = PageContainer;
