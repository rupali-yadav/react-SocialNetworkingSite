const jioFacebookReducerDefaultstate = {
    postList: [
       {
           "id": "a47895c3-af8e-4318-a5bb-54570dc10016",
           "description": "hello",
           "likesCount": 0,
           "commentsCount": 0,
           "comments": []
       }
    ],
    userDetails: {
        place: "",
        description: "",
        name: "Rupali",
        birthday:""
    },

};
const jioFacebookReducer = (state = jioFacebookReducerDefaultstate, action) => {
    switch (action.type) {
        case "SHOW_USER_DETAILS":
            return{
                ...state,
                showUserDetailsTab: action.showUserDetailsTab
            }
        case "CREATE_POST":
            return {
                ...state,
                postList: [
                    ...state.postList,
                    action.post
                ]
            };
        case "DELETE_POST":
            const postList = state.postList.filter((post) => {
                if (post.id !== action.id)
                    return true;
            });
            return {
                ...state,
                postList: [
                    ...postList
                ]
            };
        case "EDIT_PROFILE_INFO":
            return {
                ...state,
                userDetails: {
                    ...action.updates
                }
            };
        case "LIKE":
            var newPostList = state.postList.map((post) => {
                if (post.id === action.id) {
                    post.likesCount++;
                }
                return post;
            });
            return {
                ...state,
                postList: [
                    ...newPostList
                ]
            };
        case "COMMENT":
            var newPostList = state.postList.map((post) => {
                if (post.id === action.id) {
                    // post.comments.push(action.comment);
                    let comments = post.comments.slice();
                    comments.splice(comments.length + 1, 0, action.comment);
                    post.comments.splice(0, post.comments.length, ...comments);

                }
                return post;
            });
            return {
                ...state,
                postList: [
                    ...newPostList
                ]
            };
        default:
            return state;
    }
}
export default jioFacebookReducer;