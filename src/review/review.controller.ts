import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ReviewService } from "./review.service";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";

@Controller("review")
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.createReview(createReviewDto);
  }

  @Get(":page/:limit")
  findAll(@Param("page") page: number, @Param("limit") limit: number) {
    return this.reviewService.getReivews(page, limit);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.reviewService.getReview(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewService.updateReview(id, updateReviewDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.reviewService.removeReview(id);
  }
}
