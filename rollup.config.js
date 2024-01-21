import * as fs from "fs";
import { spawn } from "child_process";

import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

// optional: A Rollup plugin to generate a minified bundle with terser.
// 可选: 压缩代码
import terser from "@rollup/plugin-terser";

// optional: covert jsx file to jsxbin
// 可选: 可以转为二进制
import jsxbin2 from "rollup-plugin-jsxbin2";

const data = JSON.parse(fs.readFileSync("./tsx-link.json", { encoding: "utf8" }));

const config = {
    input: data.input,
    output: data.output,
    build: {
        jsxBin: true,
        compress: true,
    },
    extensions: [".ts", ".tsx"],
};

export default {
    input: config.input,
    output: [
        {
            file: config.output,
            format: "cjs",
        },
        {
            file: config.output.replace(".jsx", ".min.jsx"),
            format: "cjs",
            plugins: [terser()],
        },
        {
            file: config.output.replace(".jsx", ".jsxbin"),
            format: "cjs",
            plugins: [jsxbin2({ file: config.output })],
        },
    ],
    plugins: [
        typescript(),
        resolve(),
        commonjs(),
        {
            name: "clean-dist",
            buildStart() {
                if (fs.existsSync("dist")) {
                    fs.rmSync("dist", { recursive: true });
                }
            },
        },
    ],
};
