---
id: API-Reference
title: ""
sidebar_position: 1
---

# API Reference
The SuperSol API provides developers with a comprehensive set of functions for interacting with the SuperSol network. From managing transactions to querying on-chain data, the API offers robust tools to build and maintain decentralized applications (dApps). This section includes an overview of the API, functions for transaction management, and methods for querying chain states.

## A. SuperSol API Overview: Comprehensive API documentation.
The SuperSol API is designed to facilitate seamless interaction between applications and the SuperSol network. It supports various operations, including submitting transactions, monitoring state changes, querying chain data, and managing assets.

### 1.1. Key Features
- **REST and WebSocket Support**: Offers both REST APIs for synchronous requests and WebSocket endpoints for real-time data.
- **Cross-Chain Interoperability**: Access data from both Layer 1 (Solana) and Layer 2 (SuperSol Appchains).
- **Authentication**: Use API keys for secure interactions.
- **Error Handling**: Detailed error messages for quick debugging.

#### Example API Authentication Request:
```sh
curl -X POST https://api.supersol.network/auth \  
-H "Content-Type: application/json" \  
-d '{"apiKey": "your-api-key"}'
```

## B. Transaction Management: API functions for submitting, verifying, and monitoring transactions.
SuperSol provides API endpoints to manage transactions, ensuring reliable and verifiable processing across networks. Developers can submit, verify, and monitor the status of their transactions.

### 2.1. Submitting Transactions
To submit a transaction, use the `/submit-transaction` endpoint. Ensure transactions are signed using the appropriate private keys.

#### Example Request:
```sh
curl -X POST https://api.supersol.network/submit-transaction \  
-H "Content-Type: application/json" \  
-d '{
  "sender": "0xabc...",
  "receiver": "0xdef...",
  "amount": 100,
  "signature": "0x123..."
}'
```

### 2.2. Verifying Transactions
Check transaction validity using cryptographic proofs. The API provides detailed results on state verification.

#### Example Request:
```sh
curl -X GET https://api.supersol.network/verify-transaction?txId=123456
```

### 2.3. Monitoring Transaction Status
Track real-time transaction updates using the `/transaction-status` endpoint.

#### Example Request:
```sh
curl -X GET https://api.supersol.network/transaction-status?txId=123456
```

#### Response:
```json
{
  "status": "Pending",
  "blockNumber": 789123,
  "timestamp": "2025-03-20T14:30:00Z"
}
```

## C. Chain State Queries: Methods to query on-chain data.
SuperSol API supports various endpoints to query real-time and historical chain data. Developers can access block information, account balances, contract states, and other on-chain data.

### 3.1. Querying Account Balance
Retrieve account balance by providing the wallet address.

#### Example Request:
```sh
curl -X GET https://api.supersol.network/account-balance?address=0xabc...
```

#### Response:
```json
{
  "address": "0xabc...",
  "balance": "5000 SOL"
}
```

### 3.2. Fetching Block Details
Get block details using the block number or hash.

#### Example Request:
```sh
curl -X GET https://api.supersol.network/block-details?blockNumber=123456
```

#### Response:
```json
{
  "blockNumber": 123456,
  "timestamp": "2025-03-20T12:00:00Z",
  "transactions": 120,
  "stateRoot": "0xabc..."
}
```

### 3.3. Querying Smart Contract State
Fetch current or historical state data of a deployed smart contract.

#### Example Request:
```sh
curl -X GET https://api.supersol.network/contract-state?contractAddress=0xdef...
```

#### Response:
```json
{
  "contractAddress": "0xdef...",
  "state": {
    "totalSupply": "1000000",
    "owner": "0xabc..."
  }
}
```

### 3.4. Event Logs and Data
Query event logs from smart contracts using the API. This is useful for tracking custom events in dApps.

#### Example Request:
```sh
curl -X GET https://api.supersol.network/event-logs?contractAddress=0xdef...
```

#### Response:
```json
{
  "events": [
    {
      "eventName": "Transfer",
      "from": "0xabc...",
      "to": "0xdef...",
      "amount": 100
    }
  ]
}
```

By utilizing the SuperSol API, developers can efficiently manage transactions, monitor blockchain activity, and build robust, scalable applications.
