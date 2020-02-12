import React from 'react'
import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'
import Login from './Login';
import base, { firebaseApp} from '../base';
import firebase from 'firebase';

class Inventory extends React.Component{
state = {
    uid: null,
    owner: null
}

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                this.authHandler({user});
            }
        })
    }


    authHandler = async(authData) => {
        //1. Look up the current store in the firebase
        const store = await base.fetch(this.props.storeId, {context: this});
        //2. claim it if there is no owner
        if(!store.owner){
            //save store as the owner's
            await base.post(`${this.props.storeId}/owner`, {
                data: authData.user.uid
            })
        }
        console.log(store)
        //3. Set the state of the inventory component to reflect the current user
        this.setState({
            uid: authData.user.uid,
            owner: store.owner ||authData.user.uid
        })
        // console.log(authData);
    } 

    authenticate = provider => {
         const authProvider = new firebase.auth[`${provider}AuthProvider`]();
         firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    }

    logout = async () => {
        await firebase.auth().signOut();
        this.setState({uid:null});
    }
    render (){
        const logout = <button onClick={this.logout}>Log Out!</button>
        // check if user is logged in
        if(!this.state.uid){
            return <Login authenticate = {this.authenticate}/>
        }
        //check if they are the owner of the store
        if(this.state.uid !== this.state.owner){
            return <div><p>Sorry you are not the owner</p>
        {logout}</div>
        }

        //if there is objection, then they are the owner
return (
    <div className="inventory">
       <h2>Inventory</h2> 
       {logout}
       {Object.keys(this.props.fishes).map(key => <EditFishForm key={key} index={key} fishes = {this.props.fishes[key]} updateFish={this.props.updateFish} deleteFish={this.props.deleteFish}/>)}
       <AddFishForm addFish={this.props.addFish}/>
       <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
    </div>
    
)
    }
}

export default Inventory