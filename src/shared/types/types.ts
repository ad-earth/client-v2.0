export type MainResponseType = {
  Best: ProductType[];
  New: ProductType[];
};

export interface ListResponseType {
  cnt: number;
  products: ProductType[];
  userLike: number[];
}

export interface AdResponseType extends ListResponseType {
  adProducts: ProductType[];
}

export type ErrorType = { errorMessage: string };

export interface ProductType {
  p_No: number;
  p_Category: string;
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Cost: number;
  p_Sale: boolean;
  p_Discount: number;
  p_Option: [string, string, string, number, number][];
  p_Soldout: boolean;
  p_Best: boolean;
  p_New: boolean;
  p_Like?: number;
  p_Review?: number;
  p_Desc?: string;
}
