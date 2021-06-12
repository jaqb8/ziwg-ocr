export type State = {
  status:
    | 'start'
    | 'webcam-page'
    | 'offline'
    | 'loading'
    | 'error'
    | 'displaying-data'
  error?: string;
  data?: any;
};

export type Action =
  | { type: 'start' }
  | { type: 'open-webcam' }
  | { type: 'offline' }
  | { type: 'start-loading' }
  | { type: 'image-sending-failure'; errorMessage: string }
  | { type: 'additive-data-received'; response: [] };
