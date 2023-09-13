import { ApiProperty } from "@nestjs/swagger";

export class CreateListingsDto {
    @ApiProperty({
        type: String,
        example:"I am the description of the listings"
    })
    description: string;   
}