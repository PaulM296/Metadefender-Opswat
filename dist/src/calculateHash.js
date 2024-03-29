"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSHA256 = void 0;
const crypto = __importStar(require("crypto"));
const fs = __importStar(require("fs"));
function calculateSHA256(file_path) {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash("sha256");
        const stream = fs.createReadStream(file_path);
        stream.on("data", onData(hash));
        stream.on("end", onEnd(resolve, hash));
        stream.on("error", onError(reject));
    });
}
exports.calculateSHA256 = calculateSHA256;
function onData(hash) {
    return (data) => {
        hash.update(data);
    };
}
function onEnd(resolve, hash) {
    return () => {
        const file_hash = hash.digest("hex");
        resolve(file_hash);
    };
}
function onError(reject) {
    return (error) => {
        reject(error);
    };
}
