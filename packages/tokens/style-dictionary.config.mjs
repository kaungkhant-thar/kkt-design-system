import StyleDictionary from "style-dictionary";

const sd = new StyleDictionary({
  source: ["tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      prefix: "kkt",
      buildPath: "dist/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: {
            selector: ":root",
            outputReferences: true,
          },
        },
      ],
    },
    js: {
      transformGroup: "js",
      buildPath: "dist/",
      files: [
        {
          destination: "tokens.mjs",
          format: "javascript/esm",
        },
      ],
    },
    ts: {
      transformGroup: "js",
      buildPath: "dist/",
      files: [
        {
          destination: "tokens.d.ts",
          format: "typescript/es6-declarations",
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
