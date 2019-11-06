import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Link,
    NavLink
} from 'react-router-dom';
import LikesSection from "../components/LikesSection";
import UserProfileDetails from "../components/UserProfileDetails";
import Birthdays from "../components/Birthdays";
import JioFacebookPage from "../components/JioFacebookPage";
import Header from "../components/Header";
const AppRouter = () => (
    <BrowserRouter>
        <div className="jioFacebookPageContainer">
            <Header />
            <Switch>
                <Route path="/" component={JioFacebookPage} exact={true}></Route>
                <Route path="/home" component={JioFacebookPage}></Route>
                <Route path="/likeSection" component={LikesSection}></Route>
                <Route path="/profile" component={UserProfileDetails}></Route>
                <Route path="/birthdays" component={Birthdays}></Route>
                <Route path="/userprofile" component={UserProfileDetails}></Route>
            </Switch>
        </div>
    </BrowserRouter>
)
export default AppRouter;