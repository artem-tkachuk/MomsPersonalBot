"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token = process.env.token;
const router = express_1.Router();
//router.post(`/${token}`, handleRoutes);
router.get('/', (req, res) => {
    res.send('Hello from MomsPersonalBot!');
});
exports.default = router;
