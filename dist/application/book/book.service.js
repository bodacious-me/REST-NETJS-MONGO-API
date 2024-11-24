"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const book_schema_1 = require("./schema/book.schema");
let BookService = class BookService {
    constructor(booksModel) {
        this.booksModel = booksModel;
    }
    async getAllBooks() {
        return this.booksModel.find();
    }
    async createBook(dto) {
        return this.booksModel.create(dto);
    }
    async updateBook(id, book) {
        return this.booksModel.findByIdAndUpdate(id, book, {
            new: true,
            runValidators: true,
        });
    }
    async getBookById(id) {
        console.log(id);
        const book = await this.booksModel.findById(id);
        if (!book) {
            throw new common_1.NotFoundException('Book not found.');
        }
        return book;
    }
    async deleteById(id) {
        console.log(id);
        return await this.booksModel.findByIdAndDelete(id);
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(book_schema_1.Book.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model])
], BookService);
//# sourceMappingURL=book.service.js.map