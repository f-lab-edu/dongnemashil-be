export class CreateReviewDto {
  userId: string;
  address: string;
  content?: string;
  mainImgUrl: string;
  subImgUrl?: string;
  title: string;
  videoUrl?: string;
  middleSubImgUrl: string;
  smallSubImgUrl: string;
  middleMainImgUrl?: string;
  smallMainImgUrl?: string;
  latitude: number;
  longitude: number;
}
