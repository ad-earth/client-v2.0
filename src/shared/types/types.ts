export type TMainResponse = {
  Best: IProduct[];
  New: IProduct[];
};

export interface IListResponse {
  cnt: number;
  products: IProduct[];
  userLike: number[];
}

export interface IAdResponse extends IListResponse {
  adProducts: IProduct[];
}

export interface IDetailResponse {
  k_No: number;
  userLike: boolean;
  product: IProductDetail;
}

export interface IReviewsResponse {
  p_review: number;
  reviews: TReviews;
}

export type TError = { errorMessage: string };

export interface IProduct {
  p_No: number;
  p_Category: string;
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Cost: number;
  p_Sale: boolean;
  p_Discount: number;
  p_Option: TOption[];
  p_Soldout: boolean;
  p_Best: boolean;
  p_New: boolean;
  p_Like?: number;
  p_Review?: number;
  p_Desc?: string;
}

export interface IProductDetail extends IProduct {
  p_Cnt: number;
  p_Content: string;
}

export type TOption = [string, string, string, number, number];
export type TUserOption = [string, string, string, number, number, number];

export interface IReview {
  createdAt: string;
  r_Content: string;
  r_No: number;
  r_Score: number;
  u_Id: string;
}
export type TReviews = IReview[];
