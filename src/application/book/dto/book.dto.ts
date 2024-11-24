import { Category } from "../../domain/enums/category.enums";

export class BookDto{

    readonly title:string;
    readonly description:string;
    readonly price:number;
    readonly author:string;
    readonly categoy: Category
}