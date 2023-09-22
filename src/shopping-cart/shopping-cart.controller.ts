import { Controller, Param, UseGuards, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { AddToCartDto } from './dto/add-to-cart.dto';

@Controller('shopping-cart')
export class ShoppingCartController {
    constructor(private readonly shoppingCartService: ShoppingCartService){}

    @UseGuards(AuthenticatedGuard)
    @Get(':id')
    getAll(@Param('id') userId: string){
        return this.shoppingCartService.findAll(userId)
    }

    @UseGuards(AuthenticatedGuard)
    @Post('/add')
    addToCart(@Body() addToCartDto: AddToCartDto){
        return this.shoppingCartService.add(addToCartDto)
    }

    @UseGuards(AuthenticatedGuard)
    @Patch('/count/:id')
    updateCount(@Body() {count}: {count: number},
                @Param('id') partId: string){
        return this.shoppingCartService.updateCount(count, partId)
    }

    @UseGuards(AuthenticatedGuard)
    @Patch('/total-price/:id')
    updateTotalPrice(@Body() {total_price}: {total_price: number},
                @Param('id') partId: string){
        return this.shoppingCartService.updateTotalPrice(total_price, partId)
    }

    @UseGuards(AuthenticatedGuard)
    @Delete('/one/:id')
    removeOne(@Param('id') partId: string){
        return this.shoppingCartService.remove(partId)
    }

    @UseGuards(AuthenticatedGuard)
    @Delete('/all/:id')
    removeAll(@Param('id') userId: string){
        return this.shoppingCartService.removeAll(userId)
    }
}

