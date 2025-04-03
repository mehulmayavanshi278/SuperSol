---
id: Getting-Started
title: ""
sidebar_position: 1
---


#  Getting Started

This section will guide developers through the foundational steps of working with SuperSol, from understanding its architecture to setting up a development environment.

## A. Introduction to SuperSol: Overview of SuperSol’s architecture and key concepts.

SuperSol is a Layer 2 (L2) scaling solution designed to enhance the Solana blockchain by improving scalability, transaction speed, and cost efficiency. It leverages Evanescent Rollups, a specialized rollup mechanism that ensures lightweight state commitment, reducing data bloat while maintaining security and finality on Solana Layer 1 (L1).

### Key Concepts

- **Layer 2 Scaling:** Offloads computation from Solana L1 while ensuring secure finality.
- **Evanescent Rollups:** Temporary rollup states that improve efficiency and minimize storage costs.
- **Shared Liquidity Layer:** Enables cross-chain liquidity access across L2 chains and Solana L1.
- **State Commitment & Fraud Proofs:** Ensures security and integrity of transactions.
- **Canonical Bridge:** Facilitates seamless cross-chain interoperability.

Developers can build DeFi protocols, NFT marketplaces, GameFi applications, and cross-chain solutions on SuperSol while benefiting from lower fees and high throughput.

## B. Prerequisites: Tools and knowledge developers need before starting.

Before you start developing on SuperSol, ensure you have the following:

### Technical Requirements

- **Solana Wallet:** Required for managing accounts and transactions. Compatible wallets include Phantom and Solflare.
- **Solana CLI:** Used for interacting with the blockchain.
- **SuperSol CLI:** A command-line tool for deploying and managing L2 chains.
- **Rust and Solana Development Tools:** Required for writing smart contracts.
- **Node.js & npm/yarn:** Essential for setting up dependencies and interacting with APIs.

### Knowledge Requirements

- Basic Understanding of Blockchain & Smart Contracts
- Familiarity with Solana’s Architecture
- Experience with Rust (for Solana contracts) or Solidity (if using EVM compatibility)

## C. Installation Guide: How to install SuperSol CLI, SDK, and dependencies.

To set up your SuperSol development environment, follow these steps:

### Step 1: Install Solana CLI

```sh
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
```

Verify installation:

```sh
solana --version
```

### Step 2: Install SuperSol CLI

```sh
npm install -g supersol-cli
```

This tool allows developers to create, deploy, and manage L2 Appchains.

### Step 3: Install Rust and Solana Development Tools

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustup update
cargo install --git https://github.com/solana-labs/solana solana-program
```

### Step 4: Install Node.js and Dependencies

```sh
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
sudo apt-get install -y nodejs
npm install -g yarn
```

After completing these steps, your system is ready to start building on SuperSol.

## D. Creating a Wallet: Setting up a Solana wallet for development.

A Solana wallet is necessary to interact with SuperSol's blockchain. You can create one using Solana CLI or a browser extension like Phantom.

### Option 1: Create a Wallet Using Solana CLI

1. Generate a new keypair:

   ```sh
   solana-keygen new --outfile ~/my-wallet.json
   ```

2. Save the keypair and set it as the default:

   ```sh
   solana config set --keypair ~/my-wallet.json
   ```

3. Check your wallet address:

   ```sh
   solana address
   ```

### Option 2: Use a Phantom Wallet

- Install the Phantom extension from [phantom.app](https://phantom.app).
- Create a new wallet and securely save the recovery phrase.
- Connect your Phantom wallet to SuperSol’s testnet or mainnet.

## E. Connecting to Networks: Accessing devnet, testnet, and mainnet.

SuperSol operates on three network environments:

- **Devnet** (for testing new features)
- **Testnet** (for staging environments)
- **Mainnet** (for live deployments)

### Step 1: Configure Solana Network

Set the default network in Solana CLI:

```sh
solana config set --url https://api.devnet.solana.com
```

For testnet:

```sh
solana config set --url https://api.testnet.solana.com
```

For mainnet:

```sh
solana config set --url https://api.mainnet-beta.solana.com
```

### Step 2: Fund Your Wallet

For devnet or testnet, request free SOL tokens using:

```sh
solana airdrop 2
```

For mainnet, transfer SOL from an exchange or another wallet.

### Step 3: Verify Network Connection

Check your current balance:

```sh
solana balance
```

After completing these steps, your development environment is ready, and you can begin deploying on SuperSol’s scalable Layer 2 infrastructure.
