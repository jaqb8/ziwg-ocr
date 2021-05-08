import { Action, State } from './types';

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'start':
      return { status: 'start' };

    case 'start-loading':
      return { status: 'loading' };

    case 'image-sending-failure':
      return { status: 'error', error: action.error };

    case 'additive-data-received':
      return { status: 'displaying-data', data: action.response };

    default:
      return state;
  }
}

export default reducer;
