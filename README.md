### Copy and edit .env

```
cp .env.example .env
```

### Get .env variables

PRIVATE_KEY - get private key from MetaMask (or other software wallets) or generate your own \
PAYMASTER_KEY - found at https://dashboard.biconomy.io \
BUNDLER_URL - found at https://dashboard.biconomy.io \
PROJECT_ID - WalletConnect Cloud project identifier. You can find your projectId on your [WalletConnect dashboard](https://cloud.walletconnect.com/sign-in) \
AUTH_TOKEN - found at https://dashboard.biconomy.io/account

### Install and test:

```
bun i && bun run test
```

### Develop using storybook

```
bun run storybook
```

### Documentation
[view docs](https://bcnmy.github.io/useAA)