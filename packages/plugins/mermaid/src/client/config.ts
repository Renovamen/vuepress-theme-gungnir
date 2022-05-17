import { defineClientConfig } from "@vuepress/client";
import Mermaid from "./Mermaid";

export default defineClientConfig({
  enhance({ app }) {
    app.component("Mermaid", Mermaid);
  }
});
