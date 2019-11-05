import JioFacebookPostItem from "./JioFacebookPostItem"
import React from "react";
import { connect } from "react-redux";
const JioFacebookPostsList = (props) => (
    <div className="facebookSectionContainer">
        
         {props.postsList.length===0 && <h1>you have no posts yet</h1>}
        {
            props.postsList &&
            props.postsList.map((post)=>{
                return <JioFacebookPostItem key={post.id} {...post}/>
            })
        }   
       
    </div>
);
const mapStateToProps= (state)=>{
   return {
       postsList: state.postList
   }
}
export default connect(mapStateToProps)(JioFacebookPostsList);