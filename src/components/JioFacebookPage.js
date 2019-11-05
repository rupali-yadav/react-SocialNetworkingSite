import React from 'react';
import {
    connect
} from 'react-redux';
import JioFacebookPostsList from './JioFacebookPostsList';
import LikesSection from "./LikesSection";
import { createPost, showUserDetails } from "../actions/jioFacebook";
class JioFacebookPage extends React.Component{
    handleCreatePost = ()=>{
        this.props.dispatch(createPost(this.state.NewPostDescription));
         this.setState(() => ({
             NewPostDescription: ""
         }));
    }
    handleCreatePostInput=(e)=>{
        const desc= e.target.value;
        this.setState(()=>({
            NewPostDescription: desc
        }));
    }
   
    state={
        NewPostDescription:"",
    };
    render(){
        return(
                <div className="jioFacebookPageContentWrapper">
                    <div className="leftContentContainer">
                        <div className="createPostContainer">
                            <span>Create Post</span>
                            <div className="creatPostInput">
                                <input 
                                    type = "text"
                                    placeholder = "Write something here..."
                                    onChange={this.handleCreatePostInput} 
                                    value={this.state.NewPostDescription} 
                                />
                            <button onClick={this.handleCreatePost}>post</button>
                            </div>
                        </div>
                        <div className="allSectionsContainer">
                            <JioFacebookPostsList />
                        </div>
                    </div>
                    <div className="rightContentContainer">
                            <LikesSection />
                    </div>
                </div>
                
        )
    }
}

const mapStateToProps=(state)=>{
 return {
    userDetails: state.userDetails,
 }
}
// when you want to access dispatch() you connect 
// to the store and the store makes it available for the components in the props
export default connect(mapStateToProps)(JioFacebookPage);