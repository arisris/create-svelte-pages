import { addIconSelectors } from "@iconify/tailwind";
import plugin from "tailwindcss/plugin";

const iconify = addIconSelectors(["ri"]);
module.exports = plugin(iconify.handler, iconify.config);
