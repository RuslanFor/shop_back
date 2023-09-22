import { ApiProperty } from '@nestjs/swagger';
import { faker } from '@faker-js/faker'
import { Op } from 'sequelize';


export class boilerParts{
    @ApiProperty({example: 1})
    id: number
    
    @ApiProperty({example: faker.lorem.sentence(2)})
    boiler_manufacturer: string
    
    @ApiProperty({example: 1233})
    price: string

    @ApiProperty({example: faker.lorem.sentence(2)})
    parts_manufacturer: string

    @ApiProperty({example: faker.internet.password()})
    vendor_code: string

    @ApiProperty({example: 'Vinko'})
    name: string

    @ApiProperty({example: faker.lorem.sentence(30)})
    description: string

    @ApiProperty({example: 'https://loremflickr.com/640/480?lock=1917251332603904?random=15'})
    images: string

    @ApiProperty({example: faker.number.int(1)})
    in_stock: string

    @ApiProperty({example: faker.datatype.boolean()})
    bestsellers: boolean

    @ApiProperty({example: faker.datatype.boolean()})
    new: boolean

    @ApiProperty({example: faker.number.int(3),})
    popularity: number

    @ApiProperty({example: faker.lorem.sentence(2)})
    compalibility: string

    @ApiProperty({example: '2023-09-15T12:42:52.000Z'})
    createdAt: string

    @ApiProperty({example: '2023-09-15T12:42:52.000Z'})
    updatedAt: string
}
export class PaginateAndFilterResponse {
    @ApiProperty({example: '10'})
    count: number

    @ApiProperty({type: boilerParts, isArray: true})
    rows: boilerParts
}

export class Bestsellers extends boilerParts {
    @ApiProperty({example: true})
    bestsellers: boolean
}


export class GetBestsellersResponse extends PaginateAndFilterResponse{
    @ApiProperty({example: '10'})
    count: number;

    @ApiProperty({type: boilerParts, isArray: true})
    rows: Bestsellers;
}

export class NewParts extends boilerParts{
    @ApiProperty({example: true})
    new: boolean
}

export class GetNewResponse extends PaginateAndFilterResponse{
    @ApiProperty({example: '10'})
    count: number;

    @ApiProperty({type: boilerParts, isArray: true})
    rows: NewParts;
}
export class SearchByLetterResponse extends boilerParts{
    @ApiProperty({example: 'Vinko'})
    name: string
}

export class SearchResponse extends PaginateAndFilterResponse{
    @ApiProperty({type: SearchByLetterResponse, isArray: true})
    rows: SearchByLetterResponse;
}

export class SearchRequest{
    @ApiProperty({example: 'o'})
    search: string
}

export class GetByNameResponse extends boilerParts{
    @ApiProperty({example: 'Vinko'})
    name: string
}

export class GetByNameRequest{
    @ApiProperty({example: 'Vinko'})
    name: string
}

export class FindOneResponse extends boilerParts{}


export interface IBoilerPartsQuery{
    limit: string
    offset: string
    boiler: string | undefined
    parts: string | undefined
    priceFrom: string | undefined
    priceTo: string | undefined
}

export interface IBoilerPartsFilter{
    boiler_manufacturer: string | undefined
    parts_manufacturer: string | undefined
    price: {[Op.between]: number[]}
}