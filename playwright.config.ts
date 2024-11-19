import type { PlaywrightTestConfig } from "@playwright/test";


const config : PlaywrightTestConfig = {

testMatch: ["Launch.spec.ts"],

use : { headless:false}

};
console.log('Test');
export default config;