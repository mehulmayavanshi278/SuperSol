---
id: proof-of-history
title: ""
sidebar_position: 1
---

# Proof of History (PoH)

Proof of History (PoH) is the foundational innovation of Solana, designed to create a verifiable and trustworthy sequence of events without relying on traditional consensus mechanisms for timestamping. It acts as a decentralized clock that enables nodes to agree on the timing and order of transactions, significantly improving blockchain efficiency.

Here’s how Proof of History works and its key benefits:



## 1. The Concept of PoH
- **Definition:** Proof of History is a cryptographic timestamping mechanism that records the passage of time between events.
- **Purpose:** It eliminates the need for nodes to communicate continuously to establish consensus on transaction order.
- **Impact:** By providing a historical record, PoH accelerates transaction validation and increases Solana's throughput.



## 2. How PoH Works
- **Sequential Hashing:** PoH uses a sequential hashing process where each transaction is hashed using the output of the previous transaction.
- **Verifiable Time Source:** This series of cryptographic hashes creates a unique and tamper-proof ledger of time.
- **Independent Validation:** Validators can verify transaction timestamps without communicating with the entire network.

### Example:
If **Transaction A** is followed by **Transaction B**, PoH records both the data and the exact time difference between the two events. Validators simply check the hash chain to confirm the order.



## 3. Benefits of PoH
- **Faster Consensus:** Since the time of events is already established, nodes reach consensus quicker using Tower BFT.
- **Reduced Latency:** PoH reduces the need for time-consuming communication between nodes.
- **High Throughput:** Solana can process thousands of transactions per second, making it ideal for large-scale applications.
- **Increased Security:** The cryptographic nature of PoH ensures data integrity and prevents manipulation.



## 4. PoH and SuperSol
- **Enhanced Efficiency:** SuperSol leverages Solana’s PoH to ensure accurate and fast transaction processing.
- **Seamless Integration:** By using PoH as a foundational layer, SuperSol maintains compatibility with Solana’s ecosystem.
- **Improved Scalability:** PoH enables SuperSol to manage large transaction volumes while keeping fees low.
