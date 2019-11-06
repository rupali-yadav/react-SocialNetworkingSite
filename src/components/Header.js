import React from 'react';
import { MdCake} from 'react-icons/md';
import { FaHome } from "react-icons/fa";
import { IoIosPaper} from 'react-icons/io';
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux';
class Header extends React.Component{
     onMenuToggle = () => {
         this.setState((prevState) => ({
             showMenu: !prevState.showMenu
         }));
     }
    
     state={
        showMenu: false
     }
    render(){
        return(
                <div className="pageHeader">
                    <h3>Welcome to ABC</h3>
                    <div className="headerActionsContainer">
                        <div className="headerActions">
                            <div className="profilePicContainer">
                                <span></span>
                                <p>{this.props.userDetails.name}</p>
                            </div>
                            <div className="home">home</div>               
                        </div>
                    </div>
                    
                    <div className="menuToggle" onClick={this.onMenuToggle}>
                        <span></span>
                    </div>
                    { this.state.showMenu && 
                        <div className="sideMenuContainer">
                            <div className="sideMenuWrapper">
                                <div className="headerActions">
                                    <NavLink onClick={this.onMenuToggle}  to="/userprofile" className="profilePicContainer">
                                        <span></span>
                                        <p>{this.props.userDetails.name}</p>
                                    </NavLink>
                                    <div id="home" className="optionContainer">
                                        <span className="optionImage">
                                            <FaHome />
                                        </span>
                                        <NavLink onClick={this.onMenuToggle} to="/home">home</NavLink> 
                                    </div>
                                    <div id="postListInfo" className="optionContainer">
                                        <span className="optionImage">
                                            <IoIosPaper />
                                        </span>
                                        <NavLink onClick={this.onMenuToggle} to="/likeSection">view all your post info</NavLink>
                                    </div>
                                    <div id="birthdays" className="optionContainer">
                                        <span className="optionImage">
                                            <MdCake />
                                        </span>
                                        <NavLink onClick={this.onMenuToggle}  to="/birthdays">birthdays</NavLink>        
                                    </div>     
                                </div>
                            </div>
                        </div>
                    }
                </div>
        )
    }
}

      
const mapStateToProps=(state)=>{
    return{
        userDetails: state.userDetails
    }
}

export default connect(mapStateToProps)(Header);

