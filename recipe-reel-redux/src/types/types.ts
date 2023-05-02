export interface TotalItem {
  label: string;
  quantity: number;
  unit: string;
}

export interface TotalDaily {
  CA: TotalItem;
  CHOCDF: TotalItem;
  CHOLE: TotalItem;
  ENERC_KCAL: TotalItem;
  FASAT: TotalItem;
  FAT: TotalItem;
  FE: TotalItem;
  FIBTG: TotalItem;
  FOLDFE: TotalItem;
  K: TotalItem;
  MG: TotalItem;
  NA: TotalItem;
  NIA: TotalItem;
  P: TotalItem;
  PROCNT: TotalItem;
  RIBF: TotalItem;
  THIA: TotalItem;
  TOCPHA: TotalItem;
  VITA_RAE: TotalItem;
  VITB6A: TotalItem;
  VITC: TotalItem;
  VITD: TotalItem;
  VITK1: TotalItem;
  ZN: TotalItem;
}

export interface TotalNutrients {
  CA: TotalItem;
  CHOCDF: TotalItem;
  CHOLE: TotalItem;
  ENERC_KCAL: TotalItem;
  FAMS: TotalItem;
  FAPU: TotalItem;
  FASAT: TotalItem;
  FAT: TotalItem;
  FATRN: TotalItem;
  FE: TotalItem;
  FIBTG: TotalItem;
  FOLDFE: TotalItem;
  FOLFD: TotalItem;
  K: TotalItem;
  MG: TotalItem;
  NA: TotalItem;
  NIA: TotalItem;
  P: TotalItem;
  PROCNT: TotalItem;
  RIBF: TotalItem;
  SUGAR: TotalItem;
  THIA: TotalItem;
  TOCPHA: TotalItem;
  VITA_RAE: TotalItem;
  VITB6A: TotalItem;
  VITB12: TotalItem;
  VITC: TotalItem;
  VITD: TotalItem;
  VITK1: TotalItem;
  WATER: TotalItem;
  ZN: TotalItem;
}

export interface Ingredient {
  food?: string;
  foodCategory?: string;
  foodId: string;
  image?: string;
  measure?: string;
  quantity?: number;
  text: string;
  weight?: number;
}

export interface Recipe {
  label: string;
  uri: string;
  image: string | undefined;
  source: string | undefined;
  url: string | undefined;
  calories: number | undefined;
  totalTime: number | undefined;
  cautions: string[];
  cuisineType: string[];
  dietLabels: string[];
  healthLabels: string[];
  mealType: string[];
  ingredients: Ingredient[];
  totalNutrients: TotalNutrients;
}

export interface Response {
  count: number;
  from: number;
  hits: Hit[];
  to: number;
  _links: {
    next: {
      href: string;
      title: string;
    };
  };
}

interface Hit {
  recipe: Recipe;
}
