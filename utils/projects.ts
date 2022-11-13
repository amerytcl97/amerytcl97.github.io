import { Project } from "../interfaces/Project"

const projects: Project[] = [
    {
        title: "Cross platform Mobile Application",
        description: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        frameworks: ["Ionic & Angular", "Cordova", "Express.js", "MySQL", "Tailwind"],
        role: "Full"
    },
    {
        title: "XML To Excel Report Organizer",
        description: "An in-house desktop application developed with Electron.js to convert and export XML format data to Excel table format",
        frameworks: ["Ionic & Angular", "Electron.js", "Node.js"],
        role: "Full"
    },
    {
        title: "Construction Marketplace Website",
        description: "",
        frameworks: ["React", "Next.js", "Express.js", "MySQL"],
        role: "Full"
    },
    {
        title: "Honeywell Scanpal EDA31 Barcode Scanner App",
        description: "A mobile application developed with React Native to utilize the built-in scanner to scan and send barcode data to Honeywell MPD31D Thermal printer for print job.",
        frameworks: ["React Native", "Java", "Bluetooth"],
        role: "Full"
    },

    {
        title: "",
        description: "",
        frameworks: [],
    },
    {
        title: "",
        description: "",
        frameworks: [],
    },

]


export { projects }