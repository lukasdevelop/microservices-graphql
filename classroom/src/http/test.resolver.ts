import { Controller, Get, UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';

//@Controller('test')
@Resolver()
export class TestResolver {
  constructor(private prisma: PrismaService) {}
  //@Get()
  @Query(() => String)
  @UseGuards(AuthorizationGuard)
  hello() {
    return 'Hello world';
  }
}
