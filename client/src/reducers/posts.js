export default (posts = [], action) => {
    switch (action.type) {
        case 'UPDATE':
            return posts.map((post) => post.id === action.payload._id ? action.payload: post );
            
        case 'FETCH_ALL':
            console.log("ACTION",action)
            console.log("POSTS",posts)
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    };
};