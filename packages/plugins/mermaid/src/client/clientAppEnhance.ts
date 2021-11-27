import { defineClientAppEnhance } from "@vuepress/client";
import Mermaid from "./Mermaid";

export default defineClientAppEnhance(({ app }) => {
  app.component("Mermaid", Mermaid);
});
