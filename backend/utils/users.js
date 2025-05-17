"use strict";
//users.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const users = [
    {
        id: "oiu3f",
        name: 'admin',
        password: bcrypt_1.default.hashSync('admin123', 10),
        role: 'admin'
    }, {
        id: "oiu33434f",
        name: 'user',
        password: bcrypt_1.default.hashSync('user123', 10),
        role: 'user'
    }
];
exports.default = users;
