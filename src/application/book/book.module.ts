import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";
import { MongooseModule } from "@nestjs/mongoose";
import { BookSchema } from "./schema/book.schema";

@Module({
    controllers:[BookController],
    providers:[BookService],
    imports:[MongooseModule.forFeature([{name:'Book', schema:BookSchema}])],
})
export class BookModule{
    
}