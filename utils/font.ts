import { Inter, Lora, Roboto, Roboto_Flex, Roboto_Mono } from "@next/font/google"

const inter = Inter({
    variable: "--font-inter"
});
const roboto = Roboto_Flex({
    weight: "variable",
    variable: "--font-roboto",
    style: "normal",
})

const lora = Lora({
    subsets: ["latin"],
})


export const Fonts = { inter, roboto, lora }