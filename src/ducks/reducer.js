const initialState = {
  user_id: {},
  username: {},
  user_img: {}
};

const GET_USER = 'GET_USER'

export function getUser(data){
    return{
        type: GET_USER,
        action: data
    }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
        return Object.assign({}, state, action.payload)

    default:
      return state;
  }
}
