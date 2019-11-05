import React from "react";
import {connect} from 'react-redux';

const LikesSection = (props) => (
    <div className="facebookSectionContainer">
        <h2>My wall Information</h2>
        <h3>total posts: {props.postsList.length}</h3> 
    {
        props.postsList &&
        props.postsList.map((post,index)=>{
            return <div className="itemContainer">
                        <div className="itemContainerContent" key={post.id}>
                            <h2>post-{index+1}</h2>
                            <h3>Likes: {post.likesCount}</h3>    
                            <h3>Comments: {post.comments.length}</h3>
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