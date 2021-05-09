export interface EAdditiveData {
  id: number;
  code: number;
  name: string;
  description: string;
  additive_type: AdditiveType;
  harmfulness: HarmfulnessLevel;
}

export type AdditiveType =
  | 'COLOURS'
  | 'PRESERVATIVES'
  | 'ANTIOXIDANTS'
  | 'THICKENERS'
  | 'ACIDITY_REGULATORS'
  | 'FLAVOUR_ENHANCERS'
  | 'SWEETENERS'
  | 'ADDITIONAL_CHEMICALS'
  | 'NO_TYPE';

export type HarmfulnessLevel =
  | 'SAFE'
  | 'POTENTIALLY_DANGEROUS'
  | 'DANGEROUS'
  | 'NO_INFO';
