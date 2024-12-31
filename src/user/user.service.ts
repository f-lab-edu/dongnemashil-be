import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { Role } from "@prisma/client";

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.prismaService.user.create({
      data: {
        ...createUserDto,
        role: Role.USER,
      },
    });
  }

  async findUser(id: string): Promise<User> {
    return await this.prismaService.user.findUnique({
      where: { id },
    });
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async removeUser(id: string) {
    return await this.prismaService.user.delete({
      where: { id },
    });
  }
}
