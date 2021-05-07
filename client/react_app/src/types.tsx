export interface EAdditiveData {
  id: number;
  code: number;
  name: string;
  description: string;
  additive_type: AdditiveType;
  harmfulness: HarmfulnessLevel;
}

export enum AdditiveType {
  Colours = 'COLOURS',
  Preservatives = 'PRESERVATIVES',
  Antioxidants = 'ANTIOXIDANTS',
  Thickeners = 'THICKENERS',
  AcidityRegulators = 'ACIDITY_REGULATORS',
  FlavourEnhancers = 'FLAVOUR_ENHANCERS',
  Sweeteners = 'SWEETENERS',
  AdditinalChemicals = 'ADDITIONAL_CHEMICALS',
  NoType = 'NO_TYPE',
}

export enum HarmfulnessLevel {
  Safe = 'SAFE',
  PotentiallyDangerous = 'POTENTIALLY_DANGEROUS',
  Dangerous = 'DANGEROUS',
  NoInfo = 'NO_INFO',
}
