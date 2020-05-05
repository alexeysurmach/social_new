let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi', likesCount: 13},
                {id: 2, message: 'Hello', likesCount: 21}
            ],
            newPostText: ''
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

    },
    getState(){
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText)  {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (obsever) {
        this._callSubscriber = obsever;
    }
}


export default store;
window.store = store;