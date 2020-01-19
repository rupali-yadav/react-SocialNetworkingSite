import React from "react";
import {connect} from 'react-redux';

const LikesSection = (props) => (
    <div className="facebookSectionContainer">
        <h2>My wall Information</h2>
        <h3>total posts: {props.postsList.length}</h3> 
    {
        props.postsList &&
        props.postsList.map((post,index)=>{
            return <div className="itemContainer"  key={post.id}>
                        <div className="itemContainerContent">
                            <h2>post-{index+1}</h2>
                            <p className="likes">{post.likesCount} <span>Likes</span> </p>    
                            <p className="comments">{post.comments.length} <span>Comment</span></p>
                        </div> 
                    </div>
        })
    }
        
    </div>
);
const mapStateToProps=(state)=>{
    return{
        totalPosts: state.postsCount,
        postsList:state.postList
    }
}
export default connect(mapStateToProps)(LikesSection);