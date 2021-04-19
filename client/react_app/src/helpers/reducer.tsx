type State = {
    status: string,
    data: any,
  }

type Action =
 | { type: 'start', respone: []}
 | { type: 'image-sent', response: [] }
 | { type: 'image-sending-failure', error: string }
 | { type: 'additive-data-received', response: [] }

function reducer(state: State, action: Action) : State {

  switch(action.type){
    case 'start':
      return {status: 'start', data: null}

    case 'image-sent':
      return { status: 'image-sent', data: action.response }

    case 'image-sending-failure':
      return { status: 'image-sending-failure', data: action.error  }

    case 'additive-data-received':
      return { status: 'additive-data-received', data: action.response }

    default:
      return state;

  }
}

export default reducer;