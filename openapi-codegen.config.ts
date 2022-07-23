import {
  generateFetchers,
  generateSchemaTypes,
  generateReactQueryComponents,
} from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";
export default defineConfig({
  ns: {
    from: {
      relativePath: "prisma/propertyRecordOpenApi.json",
      source: "file",
    },
    outputDir: "types",
    to: async (context) => {
      await generateSchemaTypes(context, {
        filenamePrefix: "ns",
      });
    },
  },
  ns: {
    from: {
      relativePath: "prisma/propertyRecordOpenApi.json",
      source: "file",
    },
    outputDir: "types/fetchers",
    to: async (context) => {
      const filenamePrefix = "ns";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateFetchers(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
  ns: {
    from: {
      relativePath: "prisma/propertyRecordOpenApi.json",
      source: "file",
    },
    outputDir: "types/querycomp",
    to: async (context) => {
      const filenamePrefix = "ns";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
