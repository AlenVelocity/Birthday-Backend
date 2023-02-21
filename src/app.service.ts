import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { Wish } from '@prisma/client'

@Injectable()
export class AppService {
    constructor(private prismaService: PrismaService) {}

    public async addwish(wishData: Wish): Promise<Wish> {
        return await this.prismaService.wish.create({
            data: wishData
        })
    }

    public getWishes(wishee: string): Promise<Wish[]> {
        return this.prismaService.wish.findMany({ where: { for: wishee } })
    }
}
