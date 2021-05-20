export type State = {
  status:
    | 'start'
    | 'offline'
    | 'loading'
    | 'error'
    | 'displaying-data'
  error?: string;
  data?: any;
};

export type Action =
  | { type: 'start' }
  | { type: 'offline' }
  | { type: 'start-loading' }
  | { type: 'image-sending-failure'; error: string }
  | { type: 'additive-data-received'; response: [] };
