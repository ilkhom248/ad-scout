import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Umbrella-neutral palette (not tied to any single product line).
        ink: "#12100E",
        slate: "#3A3A3A",
        mist: "#F5F3EF",
        sand: "#EAE5DC",
        calm: "#2E5D57", // deep teal — recovery / tension-relief cue
        calmLite: "#3E7A72",
        signal: "#C8632B", // warm CTA accent
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
