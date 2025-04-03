---
id: Troubleshooting-and-Support
title: ""
sidebar_position: 1
---

# Troubleshooting and Support

Developing on SuperSol is designed to be a smooth experience, but occasional issues can arise. This section provides guidance on resolving common errors, using debugging tools, and accessing community support channels for assistance.

## A. Common Errors and Fixes: Solutions for common development issues.

Here are some common issues developers might encounter and their corresponding solutions.

### 1.1. Installation Issues

- **Error: CLI not recognized after installation.**  
  **Solution:** Ensure the installation path is added to the system’s PATH variable. Restart the terminal and run:
  ```sh
  supersol --version
  ```

- **Error: Missing dependencies.**  
  **Solution:** Install required packages using:
  ```sh
  npm install -g supersol-cli
  ```

- **Error: Rust not detected.**  
  **Solution:** Install Rust using:
  ```sh
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  ```

### 1.2. Wallet Connection Issues

- **Error: Wallet not connecting to the network.**  
  **Solution:** Verify the network configuration and ensure the correct RPC URL is used:
  ```sh
  supersol config set-rpc-url https://api.devnet.supersol.network
  ```

### 1.3. Smart Contract Deployment Failures

- **Error: Contract deployment fails due to out-of-gas error.**  
  **Solution:** Increase the gas limit using the deploy command:
  ```sh
  supersol contract deploy --gas-limit 5000000
  ```

- **Error: Contract verification failed.**  
  **Solution:** Double-check contract logic and ensure ABI compatibility.

---

## B. Debugging Tools: Using SuperSol’s diagnostic tools.

SuperSol provides a range of diagnostic tools to help developers troubleshoot issues during development and deployment.

### 2.1. Log Viewer

View transaction logs in real-time using the log viewer tool:
```sh
supersol logs --txId <transaction_id>
```

### 2.2. State Inspector

Inspect the state of contracts and accounts using:
```sh
supersol state inspect --contractAddress <contract_address>
```

### 2.3. Performance Profiler

Analyze contract performance and detect bottlenecks:
```sh
supersol profile --contract ./mycontract.rs
```

### 2.4. Error Decoder

- **Decode transaction errors for detailed diagnostics:**
  ```sh
  supersol decode-error --txId <transaction_id>
  ```

---

## C. Community Support: Access to Discord, Telegram, and developer forums.

For additional help, developers can access the SuperSol community. The community is active across multiple channels, providing a space to ask questions, share experiences, and collaborate on projects.

### 3.1. Discord

- Join the official SuperSol Discord for real-time discussions and support.
- Participate in channels like `#dev-support` and `#bug-reports`.

### 3.2. Telegram

- Connect with developers and enthusiasts through the SuperSol Telegram group for quick responses and discussions.

### 3.3. Developer Forums

- Browse the SuperSol Developer Forums for detailed guides, FAQs, and technical discussions.
- Post queries and receive answers from experienced developers and the SuperSol support team.

#### Forum Access:
- **SuperSol Developer Forum**

By using these resources and following the outlined troubleshooting steps, developers can efficiently resolve issues and enhance their development experience with SuperSol.
