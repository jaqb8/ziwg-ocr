export type State = {
  status:
    | 'start'
    | 'image-sent'
    | 'image-sending-failure'
    | 'additive-data-received';
  error?: string;
  data?: any;
};

export type Action =
  | { type: 'start' }
  | { type: 'image-sent' }
  | { type: 'image-sending-failure'; error: string }
  | { type: 'additive-data-received'; response: [] };
