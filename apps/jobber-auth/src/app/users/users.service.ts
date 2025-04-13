import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { type CreateUserInput } from './dto/create-user.dto';
import { hash } from 'bcryptjs';

@Injectable()
export class UsersService {
  public constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateUserInput) {
    return await this.prismaService.user.create({
      data: {
        ...data,
        password: await hash(data.password, 10),
      },
    });
  }

  async getAll() {
    return await this.prismaService.user.findMany();
  }
}
