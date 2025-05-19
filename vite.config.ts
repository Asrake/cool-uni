import {defineConfig} from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { cool } from "@cool-vue/vite-plugin";
import { proxy } from "./src/config/proxy";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [uni(),
        cool({
            type: "app",
            proxy,
        }),
    ],
    server: {
        port: 9900,
        proxy,
        hmr: {
            overlay: true,
        },
    },
});
