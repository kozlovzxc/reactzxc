import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "d.ts", "tsx", "json", "node"],
};

export default config;
