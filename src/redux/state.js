let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hi', likesCount: 13},
            {id: 2, message: 'Hello', likesCount: 21}
        ]
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: 'Lexa'},
            {id: 2, name: 'Nastya'},
            {id: 3, name: 'Roma'}
        ],
        messages: [
            {id: 1, message: 'Hey'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'Yo'}
        ]
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push();
};

export default state