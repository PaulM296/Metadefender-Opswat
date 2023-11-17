import * as crypto from "crypto";
import * as fs from "fs";

export function calculateSHA256(file_path: string): Promise<string> {
    return new Promise((resolve, reject) => {
       const hash = crypto.createHash("sha256");
       const stream = fs.createReadStream(file_path);

       stream.on("data", onData(hash));

       stream.on("end", onEnd(resolve, hash));

       stream.on("error", onError(reject));
    });
}

function onData(hash: crypto.Hash) {
    return (data: Buffer) => {
        hash.update(data);
    };
}

function onEnd(resolve: (value: string) => void, hash: crypto.Hash) {
    return () => {
        const file_hash = hash.digest("hex");
        resolve(file_hash);
    };
}

function onError(reject: (reason?: any) => void) {
    return (error: Error) => {
        reject(error);
    };
}