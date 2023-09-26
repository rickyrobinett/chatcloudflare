# ChatCloudflare

Want to give Cloudflare Workers AI a try? This repo can help you get started quickly with a chat application built using Next.js, Tailwindcss and Workers AI. Based on [Nashex's wonderful GPT-4 Playground repo](https://github.com/Nashex/gpt4-playground).

## Demo

### Mock ChatGPT Environment
This environment has most of the critical features like conversation history (which is stored locally), prompting, and multiple conversations. This environment is a great way to see what kind of responses!

### Playground Environment
This environment lets you test out different system prompts and see how they shift the responses you'll get from Workers AI.

## Running Locally
To run this project locally, you will need to have [Node.js](https://nodejs.org/en/) installed. Once you have Node.js installed, you can clone this repository and run the following commands:

```bash
yarn install
npx @cloudflare/next-on-pages
npx wrangler pages dev .vercel/output/static --compatibility-flag=nodejs_compat --binding CLOUDFLARE_ACCOUNT_ID=%YOURCLOUDFLAREACCOUNT% CLOUDFLARE_API_KEY=%YOURCLOUDFLAREAPIKEY%
```

This will start a local server on port 8788. You can then navigate to `http://127.0.0.1:8788` to view the project!

## Deploying to Cloudflare Pages

You can deploy this applicatin to Cloudflare Pages by running the following commands:

```bash
npx @cloudflare/next-on-pages
npx wrangler pages deploy .vercel/output/static
```

Once this project is created, you'll need to add your environment variables for CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_KEY in the Cloudflare dash under this project's settings. You'll also need to add the `nodejs_compat` compatibility flag under this project's settings within the Settings->Functions section in the Cloudflare dash.


## Contributing

**This project is still in development! Contributions are very much appreciated!**

If you would like to contribute to this project, please feel free to open a pull request or an issue, I hashed this project out in a few hours so there are bound to be some bugs!
