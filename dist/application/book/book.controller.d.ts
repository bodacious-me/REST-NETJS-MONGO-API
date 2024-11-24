import { BookService } from "./book.service";
import { BookDto } from "./dto/book.dto";
import { Book } from "./schema/book.schema";
export declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    getAllBooks(): Promise<Book[]>;
    createBook(dto: BookDto): Promise<Book>;
    updateBook(id: string, book: BookDto): Promise<Book | null>;
    getBookById(id: string): Promise<Book>;
    deleteById(id: string): Promise<Book | null>;
}
