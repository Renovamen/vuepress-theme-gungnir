import { onMounted } from "vue";

const codeBlockStyles = `
pre[class*="language-"] {
  scrollbar-color: var(--code-scroll-bar-color) rgba(0,0,0,0);
  scrollbar-width: .5rem;
}

pre[class*="language-"]::-webkit-scrollbar {
  height: .4rem;
}

pre[class*="language-"]::-webkit-scrollbar-thumb {
  background-color: var(--code-scroll-bar-color);
  border-radius: 3px;
}

pre[class*="language-"]::-webkit-scrollbar-thumb:hover {
  background: var(--c-brand);
}
`;

export const setupDynamicStyle = () => {
  onMounted(() => {
    if (navigator.userAgent) {
      const isMobile = navigator.userAgent.includes("Mobi");
      if (!isMobile) {
        const style = document.createElement("style");
        style.textContent = codeBlockStyles;
        document.head.append(style);
      }
    }
  });
};
