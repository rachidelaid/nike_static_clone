import swc from "@swc/core";
import fs from "node:fs";
import path from "node:path";

const hexColorPattern = /#[0-9A-Fa-f]{6}/;

function walk(node, visitor) {
  if (!node || typeof node !== "object") return;
  visitor(node);
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) {
      for (const item of value) walk(item, visitor);
    } else {
      walk(value, visitor);
    }
  }
}

async function validateComponent(filePath) {
  const code = fs.readFileSync(filePath, "utf-8");
  const filename = path.basename(filePath);
  const ast = await swc.parse(code, { syntax: "typescript", tsx: true });
  let hasNamedReadonlyProps = false;
  const hardcodedClasses = [];

  walk(ast, (node) => {
    if (node.type === "TsInterfaceDeclaration" && node.id.value.endsWith("Props")) {
      hasNamedReadonlyProps = true;
    }
    if (
      node.type === "JSXAttribute" &&
      node.name?.name === "className" &&
      hexColorPattern.test(node.value?.value ?? "")
    ) {
      hardcodedClasses.push(node.value.value);
    }
  });

  console.log(`Validation for: ${filename}`);
  console.log(hasNamedReadonlyProps ? "Props interface found." : "Missing Props interface.");
  console.log(
    hardcodedClasses.length === 0
      ? "No hardcoded hex classes found."
      : `Found ${hardcodedClasses.length} hardcoded hex classes.`,
  );

  if (!hasNamedReadonlyProps || hardcodedClasses.length > 0) {
    process.exit(1);
  }
}

validateComponent(process.argv[2]).catch((error) => {
  console.error(error);
  process.exit(1);
});
