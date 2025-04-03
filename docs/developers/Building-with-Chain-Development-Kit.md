---
id: Building-with-Chain-Development-Kit
title: ""
sidebar_position: 1
---

# Building with Chain Development Kit (CDK)

## A. Introduction to CDK: Explanation of SuperSol’s Chain Development Kit and its capabilities.

The SuperSol CDK provides developers with a comprehensive set of tools to build, manage, and customize L2 Appchains. It abstracts the complexity of blockchain infrastructure, enabling developers to focus on application logic and user experience.

### Key Capabilities of CDK

- **L2 Appchain Creation:** Quickly deploy application-specific blockchains.
- **Modular Customization:** Configure validators, consensus algorithms, and gas policies.
- **Seamless Interoperability:** Leverage the Canonical Bridge to ensure cross-chain connectivity with Solana L1.
- **Evanescent Rollup Support:** Implement lightweight rollups for faster transactions.
- **Shared Liquidity Access:** Enable cross-chain liquidity through SuperSol’s liquidity layer.

CDK is ideal for developers building DeFi protocols, NFT marketplaces, GameFi applications, and Decentralized Physical Infrastructure Networks (DePIN).

## B. Setting Up Appchains: Step-by-step guide on creating and configuring Appchains.

Follow these steps to create and configure your L2 Appchain using CDK:

### Step 1: Install SuperSol CLI

Ensure you have the CLI installed:

```sh
npm install -g supersol-cli
```

### Step 2: Initialize the Appchain

Run the following command to initialize your Appchain:

```sh
supersol init my-appchain
cd my-appchain
```

### Step 3: Configure Network Settings

Edit the `config.json` to define the chain’s properties:

```json
{
  "network": "devnet",
  "consensus": "optimistic",
  "bridge": "canonical"
}
```

### Step 4: Deploy the Appchain

```sh
supersol deploy
```

This registers the Appchain with Solana L1 for finality and cross-chain interoperability.

## C. Customizing L2 Chains: Configuring consensus mechanisms, gas management, and validator setups.

SuperSol CDK provides extensive customization options to meet specific use-case requirements.

### 3.1. Consensus Mechanisms

- **Optimistic Rollups:** Faster processing with lower fees, ideal for DeFi applications.
- **Zero-Knowledge (ZK) Rollups:** Enhanced privacy and security for sensitive transactions.

Specify the consensus in your configuration:

```json
{
  "consensus": "zk-rollup"
}
```

### 3.2. Gas Management

Optimize gas fees using SuperSol’s flexible fee model. You can adjust base fees and transaction priorities:

```json
{
  "gasConfig": {
    "baseFee": "0.01",
    "priorityFee": "0.002"
  }
}
```

### 3.3. Validator Management

Configure validators for decentralized sequencing:

```json
{
  "validators": ["validator1", "validator2"]
}
```

Validators participate in state validation and finality confirmation.

## D. Deploying Smart Contracts: Using the CLI to compile and deploy contracts.

CDK supports deploying smart contracts using both Solana’s native Rust-based contracts and EVM-compatible contracts.

### Step 1: Compile the Contract

```sh
cargo build-bpf --manifest-path=./Cargo.toml --bpf-out-dir=./dist
```

### Step 2: Deploy the Contract

Using SuperSol CLI:

```sh
supersol contract deploy ./dist/my_contract.so
```

### Step 3: Interact with the Contract

Once deployed, interact using the CLI or API:

```sh
supersol contract call --address <contract_address> --function mint --args 1000
```

## E. Upgrading and Managing Chains: Instructions on chain versioning and maintenance.

Maintaining and upgrading L2 Appchains is straightforward with CDK’s built-in management tools.

### 5.1. Versioning Contracts

To upgrade smart contracts without downtime, use SuperSol’s contract versioning:

```sh
supersol contract upgrade --address <contract_address> --path ./new_contract.so
```

### 5.2. Chain Configuration Updates

Adjust network parameters, consensus mechanisms, or fee models through configuration files:

```sh
supersol chain update-config --path ./config.json
```

### 5.3. Monitoring Chain Health

Track chain performance, validator status, and transaction metrics using SuperSol’s monitoring tools:

```sh
supersol monitor --chain my-appchain
```

### 5.4. Troubleshooting and Error Management

For debugging failed transactions or performance issues, access detailed logs:

```sh
supersol logs --chain my-appchain
```

By following these steps, developers can efficiently build, customize, deploy, and maintain L2 Appchains using SuperSol CDK, unlocking scalable, secure, and interoperable blockchain applications.
