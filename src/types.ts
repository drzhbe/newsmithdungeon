export type User = {
  id: string;
  name: string;
  email: string;
};

export type ServerError = {
  error: string;
  message: string;
  statusCode: number;
};

export type Character = {
  userId: User["id"];
  name: string;
  level: number;
  race: Race;
  class: Class;
};

export enum Race {
  Human = "human",
  Elf = "elf",
  Dwarf = "dwarf",
  Orc = "orc",
}

export enum Class {
  Warrior = "warrior",
  Mage = "mage",
  Rogue = "rogue",
  Cleric = "cleric",
  Bard = "bard",
  Paladin = "paladin",
}
