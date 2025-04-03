---
id: Using-Rollups-and-Scaling-Solutions
title: ""
sidebar_position: 1
---

# Using Rollups and Scaling Solutions

SuperSol utilizes Evanescent Rollups as a primary scaling solution to enhance Solana’s transaction throughput and reduce fees. Alongside, SuperSol supports both Optimistic and Zero-Knowledge (ZK) Rollups to cater to diverse application needs. This section covers the core concepts of Evanescent Rollups, compares rollup types, and explains how SuperSol ensures security through state commitments and fraud proofs.

### A. Understanding Evanescent Rollups: Explanation and implementation details.

Evanescent Rollups are a unique implementation in SuperSol designed for short-term, high-frequency transaction processing. Unlike traditional rollups, Evanescent Rollups aggregate and validate transactions off-chain, achieving faster finality without compromising security.

#### Key Features of Evanescent Rollups

- **Low Latency:** Transactions are confirmed almost instantly.
- **Temporary State Management:** Intermediate states are discarded after final settlement.
- **Cost-Efficiency:** Reduced gas fees due to off-chain execution.
- **L1 Security:** Final state commitments are anchored on Solana’s L1 for validation.

#### Implementation Details

- **Batching Transactions:** Multiple transactions are aggregated into a single rollup batch.
- **State Snapshot:** A state root is generated representing the final state.
- **Validation & Settlement:** The state root is submitted to Solana for verification and finality.

#### Example Workflow:

1. User submits transactions to the rollup.
2. Transactions are executed off-chain.
3. A state commitment is created and submitted to Solana.
4. After a short verification period, the state is finalized.



### B. Optimistic vs. ZK Rollups: Comparison and usage scenarios.

SuperSol offers flexibility by supporting both Optimistic Rollups and Zero-Knowledge (ZK) Rollups. Each type has specific advantages depending on the application’s needs.

#### 2.1. Optimistic Rollups

- **Assumption of Honesty:** Transactions are considered valid unless proven fraudulent.
- **Challenge Period:** Validators can submit fraud proofs if malicious activity is detected.
- **Lower Computation Costs:** Minimal verification work on-chain.
- **Best for:** DeFi applications, DEXs, and low-risk transactions.

Example Command:
```sh
supersol rollup deploy --type optimistic
```

#### 2.2. ZK Rollups

- **Zero-Knowledge Proofs:** Every batch includes a cryptographic proof verifying the correctness of transactions.
- **Instant Finality:** No challenge period is required.
- **Enhanced Privacy:** Sensitive data remains confidential.
- **Best for:** Privacy-focused applications, financial settlements, and GameFi.

Example Command:
```sh
supersol rollup deploy --type zk
```

#### Comparison Table:

| Feature          | Optimistic Rollups | ZK Rollups |
|-----------------|-------------------|------------|
| Assumption      | Transactions valid unless disputed | Transactions cryptographically proven |
| Challenge Period | Yes | No |
| Computation Cost | Lower | Higher |
| Finality Time | Delayed due to challenge period | Instant |
| Use Case | DeFi, DEXs, low-risk transactions | Privacy-focused apps, GameFi, financial settlements |



### C. State Commitment & Fraud Proofs: How SuperSol ensures security and integrity.

SuperSol ensures the integrity and security of Layer 2 transactions using State Commitments and a Fraud-Proof System.

#### 3.1. State Commitment Process

- **State Root Generation:** After processing transactions, a Merkle root of the state is created.
- **Submission to Solana L1:** This state root is submitted to Solana’s blockchain for finality.
- **Verification:** Solana validators monitor the state root for accuracy and consistency.

**Example State Commitment Flow:**

1. Transactions → Rollup Execution  
2. State Root → State Commitment  
3. On-Chain Verification → Finality  

#### 3.2. Fraud-Proof Mechanism

- In Optimistic Rollups, users can challenge a fraudulent state during the challenge window.
- **Fraud Proof Submission:** Validators submit evidence proving the incorrect state.
- If the fraud proof is valid, the malicious party is penalized.

Example Command:
```sh
supersol fraud-proof submit --stateRoot <state_root_hash>
```

#### 3.3. Security Assurance

- **Decentralized Validation:** Multiple validators ensure accurate state verification.
- **Economic Penalties:** Fraudulent actors lose their staked assets.
- **Immutable State Records:** State commitments are permanently recorded on Solana L1.
