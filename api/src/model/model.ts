export interface Type {
  id: string;
  nom: string;
  actif: boolean;
}

export interface Modele {
  id: string;
  type: Type;
  nom: string;
  actif: boolean;
}

export enum Etat {
  stock,
  installe,
  maintenance
}

export interface Appareil {
  id: string;
  modele: Modele;
  nom: string;
  mac: string;
  etat: Etat;
  actif: boolean;
}

export interface Connexion {
  id: string;
  appareilA: Appareil;
  appareilB: Appareil;
  debut: Date;
  fin: Date;
}