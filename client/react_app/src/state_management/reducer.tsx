import { Action, State } from './types';

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'start':
      return { status: 'start' };

    case 'image-sent':
      return { status: 'image-sent' };

    case 'image-sending-failure':
      return { status: 'image-sending-failure', error: action.error };

    case 'additive-data-received':
      return { status: 'additive-data-received', data: action.response };

    default:
      return state;
  }
}

export default reducer;
