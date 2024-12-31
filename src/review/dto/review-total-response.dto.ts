import { Review } from "@prisma/client";
export class ReviewTotalResponse {
  data: Review[];
  total: number;
}
