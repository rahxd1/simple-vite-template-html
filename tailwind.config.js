/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,css,js}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    darkMode: ["class", '[data-theme="themeDark"]'],
    daisyui: {
        // based on daisyUI night and winter themes
        themes: [
            {
                themeLight: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=emerald]"
                    ],
                    "--primary-cool": "38 83% 66%",
                },
                themeDark: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=night]"
                    ],
                    "--primary-cool": "38 83% 66%",
                },
            },
        ],
        darkTheme: "themeDark",
    },
};
