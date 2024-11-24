import mongoose from "mongoose";
import { Book } from "./schema/book.schema";
export declare class BookService {
    private booksModel;
    constructor(booksModel: mongoose.Model<Book>);
    getAllBooks(): Promise<Book[]>;
    createBook(dto: Book): Promise<Book>;
    updateBook(id: string, book: Book): Promise<Book | null>;
    getBookById(id: string): Promise<Book>;
    deleteById(id: string): Promise<Book | null>;
}
