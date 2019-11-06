import React from "react";
import {connect} from 'react-redux';
import { editProfileInfo, showUserDetails } from "../actions/jioFacebook";
class UserProfileDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            enableInput:true,
            name: this.props.userInfo.name,
            place: this.props.userInfo.place,
            description: this.props.userInfo.description,
        };
    }


    onNameChange= (e)=>{
       const name= e.target.value;
      this.setState(() => ({
          name: name
      }))
    };
    onPlaceChange = (e) => {
        const place = e.target.value;
          this.setState(() => ({
              place: place
        }))
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>({
            description: description
        }))
    } 
    handleEditClick = ()=>{
        this.setState((state,props)=>({
             enableInput: !state.enableInput
        }));
        this.props.dispatch(editProfileInfo({
            name: this.state.name,
            place: this.state.place,
            description: this.state.description
        }))
    }
  
   render(){
       return(
            <div className="userDetailsContainer">
                <div className="userDetailsContentWrapper">
                    <div className="userDetailsHeader">
                        <h1>My details</h1>
                        <button onClick={this.handleEditClick}>{this.state.enableInput?"edit": "done"}</button>
                    </div>
                    <input 
                    type="text"
                    placeholder="name"
                    onChange={this.onNameChange}
                    value={this.state.name} 
                    disabled={this.state.enableInput}
                    />

                    <input 
                    type="text"
                    placeholder="place"
                    onChange={this.onPlaceChange}
                    value={this.state.place} 
                    disabled={this.state.enableInput}
                    />

                    <input 
                    type="text"
                    placeholder="tell us about you"
                    onChange={this.onDescriptionChange}
                    value={this.state.description} 
                    disabled={this.state.enableInput} 
                    />
                    
                </div>
            </div>
       )
       
   }
   
}
const mapStateToComponentProps = (state)=>{
    return {
        userInfo: state.userDetails
    }
}
export default connect(mapStateToComponentProps)(UserProfileDetails);
 