import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { Wish } from '@prisma/client'
import { AppService } from './app.service'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('/')
    home(): string {
        return 'Well well well'
    }

    @Get('/wishes')
    async getWishes(@Query('for') wishee: string) {
        return this.appService.getWishes(wishee)
    }

    @Post('/add-wish')
    postwish(@Body() wish: Wish) {
        return this.appService.addwish(wish)
    }
}
