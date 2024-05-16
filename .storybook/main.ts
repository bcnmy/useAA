import type { StorybookConfig } from "@storybook/react-vite"
import { mergeConfig } from "vite"
import { config as dotenvConfig } from "dotenv"

dotenvConfig()

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      define: {
        "process.env": {
          PROJECT_ID: process.env.PROJECT_ID,
          AUTH_TOKEN: process.env.AUTH_TOKEN,
          PRIVATE_KEY: process.env.PRIVATE_KEY,
          PAYMASTER_KEY: process.env.PAYMASTER_KEY,
          BUNDLER_URL: process.env.BUNDLER_URL,
          REACT_APP_BICONOMY_SDK_DEBUG: process.env.REACT_APP_BICONOMY_SDK_DEBUG
        }
      }
    })
  }
}
export default config
