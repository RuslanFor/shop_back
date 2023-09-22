import { ForbiddenException, Injectable } from '@nestjs/common';
import { MakePaymentDto } from './dto/make-payment.dto';
import axios from 'axios';

@Injectable()
export class PaymentService {
    async makePayment(makePaymenDto: MakePaymentDto){
        try {
            const { data } = await axios({
                method: 'POST',
                url: 'https://api.yookassa.ru/v3/payments',
                headers: {
                    "Content-Type": "application/json",
                    "Idempotence-Key": Date.now(),
                },
                auth: {
                    username:"255448",
                    password:'test_s6bTl1fX8QC0_XdxfrtK-s-ZOycNY-UbbtAfr5WXvl4'
                },
                data:{
                    amount: {
                        value: makePaymenDto.amount,
                        currency: "RUB"
                      },
                      capture: true,
                      confirmation:{
                        type:'redirect',
                        return_url: 'http://localhost:3001/order'
                      },
                      description: 'Заказ 1'
                }
            });
            return data
        } catch (error) {
            throw new ForbiddenException(error)
        }
    }
}
