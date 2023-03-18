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

export interface DetailResponseType {
  k_No: number;
  userLike: boolean;
  product: ProductDetailType;
}

export interface ReviewsResponseType {
  p_review: number;
  reviews: ReviewsType;
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
  p_Option: OptionType[];
  p_Soldout: boolean;
  p_Best: boolean;
  p_New: boolean;
  p_Like?: number;
  p_Review?: number;
  p_Desc?: string;
}

export interface ProductDetailType extends ProductType {
  p_Cnt: number;
  p_Content: string;
}

export type OptionType = [string, string, string, number, number];
export interface ReviewType {
  createdAt: string;
  r_Content: string;
  r_No: number;
  r_Score: number;
  u_Id: string;
}
export type ReviewsType = ReviewType[];

export type TOptionSet = [string, string, string, number, number, number];
export interface ICartList {
  p_No: number;
  p_Category: string;
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Cost: number;
  p_Sale: boolean;
  p_Discount: number;
  p_Option: TOptionSet[];
  k_No: number;
  p_Price: number;
  p_Cnt: number;
}
export interface ICartResponse {
  cartList: ICartList[];
  o_Price: number;
}
