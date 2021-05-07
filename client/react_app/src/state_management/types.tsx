export type State = {
  status:
    | 'start'
    | 'webcam-page'
    | 'loading'
    | 'error'
    | 'displaying-data';
  error?: string;
  data?: any;
};

export type Action =
  | { type: 'start' }
  | { type: 'open-webcam' }
  | { type: 'start-loading' }
  | { type: 'image-sending-failure'; error: string }
  | { type: 'additive-data-received'; response: [] };
