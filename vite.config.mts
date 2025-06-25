import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// TODO: REMOVE when no longer using SPA mode
export default defineConfig({
  // base: "/urban-olive-and-vine/",
  plugins: [
    reactRouter(),
    // remix({
    //   future: {
    //     v3_fetcherPersist: true,
    //     v3_relativeSplatPath: true,
    //     v3_throwAbortReason: true,
    //     v3_lazyRouteDiscovery: true,
    //     v3_singleFetch: true,
    //   },
    //   basename: "/urban-olive-and-vine/",
    //   ssr: false,
    // }),
    tsconfigPaths(),
  ],
});
