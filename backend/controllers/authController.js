"use strict";
//controllers/authController.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_1 = __importDefault(require("../utils/users"));
const SECRET = 'supersecretkey';
const login = (req, res) => {
    const { name, password } = req.body;
    const user = users_1.default.find(u => u.name === name);
    if (!user) {
        return res.status(401).json({ message: 'Not found' });
    }
    const isValid = bcrypt_1.default.compareSync(password, user === null || user === void 0 ? void 0 : user.password);
    if (!isValid) {
        return res.status(401).json({ message: "Invalid password" });
    }
    const token = jsonwebtoken_1.default.sign({
        id: user.id,
        role: user.role,
    }, SECRET, { expireIN: '1h' });
    res.status(200).json({ message: 'Login successful', token });
};
exports.login = login;
