### Copy and edit .env

```
cp .env.example .env
```

### Install and test:

```
pnpm i && pnpm run test
```

### Develop using storybook

Inside `.storybook/main.ts` add the necessary variables:

```
PROJECT_ID - your project id
AUTH_TOKEN - auth token
PRIVATE_KEY - private account key
PAYMASTER_API_KEY - biconomy paymaster api key
BUNDLER_URL - biconomy bundler url
```
