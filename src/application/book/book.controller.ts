import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookDto } from "./dto/book.dto";
import { Book } from "./schema/book.schema";

@Controller('books')
export class BookController{
    constructor(private bookService: BookService) {}

    @Get()
    async getAllBooks():Promise<Book[]>{
       return await this.bookService.getAllBooks();
    }

    @Post()
    async createBook(@Body() dto:BookDto):Promise<Book>{
        return await this.bookService.createBook(dto)
    }

    @Put(':id')
    async updateBook(@Param('id') id: string, @Body() book: BookDto):Promise<Book | null> {
      return await this.bookService.updateBook(id, book);
    }

    @Get(':id')
    async getBookById(@Param('id') id:string):Promise<Book>{
        return await this.bookService.getBookById(id);
    }

    @Delete(':id')
    async deleteById(@Param('id') id:string):Promise<Book | null>{
        return await this.bookService.deleteById(id);
    }
}