"use strict";
//middlewares/authMiddleware.ts (save routing)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeAdmin = exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//secret
const SECRET = 'supersecretkey';
//authenticateToken
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        res.sendStatus(401);
        return;
    }
    jsonwebtoken_1.default.verify(token, SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
};
exports.authenticateToken = authenticateToken;
//authorizeAdmin
const authorizeAdmin = (req, res, next) => {
    const user = req.user;
    if (user.role !== 'admin') {
        res.status(403).json({ message: "Admins only!" });
        return;
    }
    next();
};
exports.authorizeAdmin = authorizeAdmin;
