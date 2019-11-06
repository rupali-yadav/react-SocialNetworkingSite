import React from "react";
import {connect} from 'react-redux';
import { likeThePost,commentOnPost, deletePost} from "../actions/jioFacebook";
import {AiFillLike} from 'react-icons/ai';

class JioFacebookPostItem extends React.Component{
  handleShareClick = () => {
    console.log("share");
  }
   handleLikeClick = () => {
    console.log("like");
    this.props.dispatch(likeThePost(this.props.id))
  }
   handleCommentClick = () => {
    this.setState(() => ({
      showCommentInput: true
    }))
    // 
  }
   
   handleDeleteClick = ()=>{
  this.props.dispatch(deletePost(this.props.id))
  }
  commentInputHandler=(e)=>{
    const comment = e.target.value;
    this.setState(()=>({
      comment: comment
    }))
  }
  replyHandler= ()=>{
    this.props.dispatch(commentOnPost(this.props.id,this.state.comment));
     this.setState(() => ({
       comment: "",
       showCommentInput:false
     }))
  }
  handleMenuPopup = (e) =>{
    event.preventDefault();
    console.log(e.target);

  }
  state={
    comment:"",
    showCommentInput:false
  }
  render(){
    return(
          <div className="postContainer">
             <div className="postContainerWrapper">
                  <div className="userTitleContainer">
                      <div className="profilePicContainer">
                            <span></span>
                            <p>{this.props.name}</p>
                            <div className="crossbtn">
                              <button onClick={this.handleDeleteClick}>
                                 X
                              </button>    
                            </div>
                      </div>
                  </div>
                  <div className="postTopContainer">
                      <div className="description">
                        {this.props.description}
                      </div>
                  </div>
                  { this.state.showCommentInput &&
                    <div className="commentInput">
                      <input 
                      value={this.state.comment}
                      type="text"
                      placeholder="write a comment"
                      onChange={this.commentInputHandler}
                      />
                      <button onClick={this.replyHandler}>reply</button>
                    </div>
                  }
                    <div className="commentContainer">
                      {
                        this.props.comments.length>0 &&
                        this.props.comments.map((comment,i)=>{
                          return  <div key={i} className="comment">
                                  {comment}
                                  </div>
                        })     
                      }
                    </div>
                    <div className="postActionsConatiner">
                        <button onClick={this.handleLikeClick}> likes-{this.props.likesCount}</button>
                        <button onClick={this.handleCommentClick}> comment</button>
                    </div>
            </div>
          </div>
      )
  }
  
}


export default connect()(JioFacebookPostItem);