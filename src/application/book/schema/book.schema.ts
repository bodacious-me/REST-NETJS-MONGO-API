import { IsNotEmpty } from "@nestjs/class-validator";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Category } from "../../domain/enums/category.enums";

@Schema({ timestamps: true })
export class Book {
    @IsNotEmpty()
    @Prop()
    title: string;

    @Prop()
    @IsNotEmpty()
    description: string;

    @Prop()
    @IsNotEmpty()
    price: number;

    @Prop()
    author: string;

    @Prop()
    categoy: Category
}
export const BookSchema = SchemaFactory.createForClass(Book);