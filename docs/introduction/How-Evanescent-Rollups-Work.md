---
id: How-Evanescent-Rollups-Work
title: ""
sidebar_position: 1
---



# How Evanescent Rollups Work

Evanescent Rollups in SuperSol are a novel form of rollup technology designed to maximize scalability and minimize on-chain data storage. Unlike traditional rollups that retain state data for extended periods, Evanescent Rollups temporarily store data for validation purposes and discard it once it is no longer needed. This process ensures high transaction throughput while keeping storage and computational costs low.

Here’s how Evanescent Rollups operate within the SuperSol ecosystem:



### 1. Transaction Aggregation
- Users initiate transactions on SuperSol’s Layer 2 network.
- Transactions are aggregated into a batch using the Roll-Up Layer.
- Each batch consists of hundreds or thousands of transactions, reducing the number of interactions with Solana’s Layer 1.



### 2. Proof Generation
- After aggregation, SuperSol uses cryptographic methods to generate proofs verifying the accuracy of the transactions.
- Zero-Knowledge Proofs (ZK-Proofs) or Optimistic Proofs are used, depending on the rollup type.
- These proofs ensure that transactions are valid without revealing sensitive information.



### 3. State Commitment and Submission
- A state commitment is created to represent the current state of the blockchain after processing the transactions.
- The proof and the state commitment are submitted to Solana’s Layer 1 for verification.
- Solana validates the proof without needing to store detailed transaction data.



### 4. Data Expiration
- After the state update is finalized on Layer 1, the underlying transaction data is discarded from the Layer 2 network.
- Only the necessary cryptographic proofs and state commitments are retained for future reference.
- This minimizes data storage requirements and enhances blockchain scalability.



### 5. Security and Dispute Resolution
- For Optimistic Evanescent Rollups, there is a designated challenge period during which anyone can submit a fraud proof if they detect an invalid transaction.
- For ZK Evanescent Rollups, validity is guaranteed through zero-knowledge proofs, eliminating the need for a challenge period.
- Once the challenge period expires or the proof is validated, the state commitment is accepted as final.



### 6. Data Availability Layer (DAL)
- During the proof generation and validation phase, the Data Availability Layer (DAL) ensures that data remains accessible for auditors and validators.
- This temporary availability allows verification while keeping the data off-chain for reduced storage costs.



### 7. Advantages of Evanescent Rollups
- **Efficient Storage Management:** Data is discarded once it is no longer required, significantly reducing on-chain storage demands.
- **Cost Reduction:** Lower gas fees compared to traditional rollups due to minimized storage requirements.
- **Faster Finality:** Transactions are confirmed quickly with reduced network congestion.
- **Enhanced Scalability:** Supports thousands of transactions per second by offloading computational work from Layer 1.



Evanescent Rollups offer a groundbreaking solution to Solana’s scalability challenges by combining temporary data storage with secure validation. In SuperSol, this approach ensures faster transactions, lower costs, and sustainable blockchain growth, making it an ideal choice for applications requiring high throughput and minimal on-chain storage.