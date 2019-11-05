import uuid from 'uuid';
// CREATEPOST
export const createPost = (description) => ({
    type: "CREATE_POST",
    post: {
        id: uuid(),
        description: description,
        likesCount:0,
        commentsCount:0,
        comments:[]

    }
});
export const showUserDetails = (showUserDetailsTab) => ({
    type:"SHOW_USER_DETAILS",
    showUserDetailsTab

})
export const deletePost = (id) => ({
    type: "DELETE_POST",
    id
});
export const editProfileInfo = (updates) => ({
    type: "EDIT_PROFILE_INFO",
    updates
});
export const likeThePost = (id) => ({
    type: "LIKE",
    id
});
export const commentOnPost = (id, comment) => ({
    type: "COMMENT",
    id,
    comment
});