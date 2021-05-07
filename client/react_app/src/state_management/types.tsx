export type State = {
  status: string
  error?: string,
  data?: any
};


export type Action =
  | { type: 'start' }
  | { type: 'image-sent' }
  | { type: 'image-sending-failure', error: string }
  | { type: 'additive-data-received', response: [] };
