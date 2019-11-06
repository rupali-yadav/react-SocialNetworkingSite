import JioFacebookPostItem from "./JioFacebookPostItem"
import React from "react";
import { connect } from "react-redux";
const JioFacebookPostsList = (props) => (
    <div className="facebookSectionContainer">
        
         {props.postsList.length===0 && <h1>you have no posts yet</h1>}
        {
            props.postsList &&
            props.postsList.map((post)=>{
                return <JioFacebookPostItem key={post.id} name={props.userName} {...post}/>
            })
        }   
       
    </div>
);
const mapStateToProps= (state)=>{
   return {
       postsList: state.postList,
       userName: state.userDetails.name
   }
}
export default connect(mapStateToProps)(JioFacebookPostsList);