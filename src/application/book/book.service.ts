import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel, Schema } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Book } from "./schema/book.schema";

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private booksModel: mongoose.Model<Book>,
    ) { }

   async  getAllBooks() :Promise<Book[]>{
        return this.booksModel.find();
    }
    async createBook(dto: Book): Promise<Book> {
        return this.booksModel.create(dto);
    }

    async updateBook(id: string, book: Book): Promise<Book | null> {

        return this.booksModel.findByIdAndUpdate(id, book, {
            new: true,
            runValidators: true,
        });
    }

    async getBookById(id: string): Promise<Book> {
        console.log(id);
        const book = await this.booksModel.findById(id);

        if (!book) {
            throw new NotFoundException('Book not found.');
        }
        return book;
    }

    async deleteById(id: string): Promise<Book | null> {
        console.log(id);
        return await this.booksModel.findByIdAndDelete(id);
    }

}