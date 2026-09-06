// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: 'https://neels.page',
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Orbitron",
            cssVariable: "--font-orbitron",    
            styles: ["normal"],
            weights: ["300 700"],
        },
        {
            provider: fontProviders.fontsource(),
            name: "Cascadia Code",
            cssVariable: "--font-cascadia-code",
            styles: ["normal"],
            weights: ["400 700"],
        }
    ],
});