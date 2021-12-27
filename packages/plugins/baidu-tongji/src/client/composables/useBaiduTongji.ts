/* eslint-disable @typescript-eslint/naming-convention */

import { onMounted } from "vue";
import { useRouter } from "vue-router";

declare const _hmt: any[];

declare global {
  interface Window {
    _hmt?: typeof _hmt;
  }
}

export const useBaiduTongji = (id: string): void => {
  // insert ba `<script>` tag
  const baScript = document.createElement("script");
  baScript.src = `https://hm.baidu.com/hm.js?${id}`;
  baScript.async = true;

  // avoid duplicated import
  if (!document.head.contains(baScript)) document.head.appendChild(baScript);

  window._hmt = window._hmt || [];

  // record path after navigation
  onMounted(() => {
    const router = useRouter();
    router.afterEach((to) => {
      _hmt.push(["_trackPageview", to.fullPath]);
    });
  });
};
