import { Injectable } from "@nestjs/common";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
import { ReviewTotalResponse } from "./dto/review-total-response.dto";
import { Review } from "@prisma/client";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ReviewService {
  constructor(private prismaService: PrismaService) {}

  /**
   * 리뷰 생성
   * @param createReviewDto
   * @returns
   */
  async createReview(createReviewDto: CreateReviewDto): Promise<Review> {
    return await this.prismaService.review.create({
      data: {
        ...createReviewDto,
        roadName: "서울특별시 종로구 종로 1", // 이후 로직 붙여야 함
        createdAt: new Date(),
        modifiedAt: new Date(),
      },
    });
  }

  /**
   * 리뷰 전체 조회
   * @returns
   */
  async getReivews(page: number, limit: number): Promise<ReviewTotalResponse> {
    const skip = (page - 1) * limit;
    const take = limit;

    const data = await this.prismaService.review.findMany({
      skip,
      take,
      orderBy: { createdAt: "desc" },
    });
    const total = await this.prismaService.review.count();

    return {
      data,
      total,
    };
  }

  /**
   * 리뷰 상세 조회
   * @param id
   * @returns
   */
  async getReview(id: string): Promise<Review> {
    return await this.prismaService.review.findUnique({
      where: { id },
    });
  }

  /**
   * 리뷰 수정
   * @param id
   * @param updateReviewDto
   * @returns
   */
  async updateReview(
    id: string,
    updateReviewDto: UpdateReviewDto,
  ): Promise<Review> {
    return await this.prismaService.review.update({
      where: { id },
      data: updateReviewDto,
    });
  }

  /**
   * 리뷰 삭제
   * @param id
   * @returns
   */
  async removeReview(id: string) {
    return await this.prismaService.review.delete({
      where: { id },
    });
  }
}
