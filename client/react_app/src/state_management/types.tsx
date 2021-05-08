export type State = {
  status:
    | 'start'
    | 'loading'
    | 'error'
    | 'displaying-data';
  error?: string;
  data?: any;
};

export type Action =
  | { type: 'start' }
  | { type: 'start-loading' }
  | { type: 'image-sending-failure'; error: string }
  | { type: 'additive-data-received'; response: [] };
