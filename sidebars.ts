import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {


  introSidebar:[

  {
    type:'category',
    label:'Introduction',
    collapsed:true,
    collapsible:true,
    link:{type:'doc'  , id:'introduction/introduction'},
    items:[
      {
        type:'doc',
        label:'Overview of SuperSol',
        id:'introduction/Overview-Of-SuperSol'
      },
      {
        type:'doc',
        label:'Why Layer 2 for Solana?',
        id:'introduction/why-layer-2-for-solana'
      },
      {
        type:'doc',
        label:'Key Features & Benefits',
        id:'introduction/key-features-and-banefits'
      },
    ]
  },



  {
    type: 'category',
    label:'Solana A Primer',
    collapsed:true,
    collapsible:true,
       items:[
        {
          type:'doc',
          label:'How Solana Works',
          id:'introduction/how-solana-works'
        },
        {
          type:'doc',
          label:'Tower BFT & Gulf Stream',
          id:'introduction/tower-bft-and-gilf-stream'
        },
        {
          type:'doc',
          label:'Proof of History',
          id:'introduction/proof-of-history'
        },
        {
          type:'doc',
          label:'Parallel Execution via Sealevel',
          id:'introduction/paraller-execution-via-scealevel'
        },
       ]
  },
  


  {
    type: 'category',
    label:'The Need for Layer 2 Scaling',
    collapsed:true,
    collapsible:true,
    items:[
      {
        type:'doc',
        label:'Blockchain Scalability Trilemma',
        id:'introduction/blockchain-scalability-trilemma'
      },
      {
        type:'doc',
        label:'Challenges in Solana’s Scaling',
        id:'introduction/Challenges-in-Solana-Scaling'
      },
      {
        type:'doc',
        label:'Why Layer 2 is the Solution',
        id:'introduction/Why-Layer-2-is-the-Solution'
      },
    ]
  },


  {
    type: 'category',
    label:'Understanding Rollups',
    collapsed:true,
    collapsible:true,
    items:[
      {
        type:'doc',
        label:'What are Rollups?',
        id:'introduction/What-are-Rollups'
      },
      {
        type:'doc',
        label:'Optimistic vs ZK-Rollups',
        id:'introduction/Optimistic-vs-ZK-Rollups'
      },
      {
        type:'doc',
        label:'The Role of Evanescent Rollups in SuperSol',
        id:'introduction/The-Role-of-Evanescent-Rollups-in-SuperSol'
      },
    ]

  },



  {
    type: 'category',
    collapsed:true,
    collapsible:true,
    label:'SuperSol Architecture',
    items:[
      {
        type:'doc',
        label:'Overview',
        id:'introduction/Overview-of-SuperSol-Infrastructure'
      },
      {
        type:'doc',
        label:'Core Components',
        id:'introduction/Core-Components-of-SuperSol'
      },
      {
        type:'doc',
        label:'Batching/Roll-Up Layer',
        id:'introduction/Batching-Roll-Up-Layer'
      },
      {
        type:'doc',
        label:'Appchains & Chain Development Kit',
        id:'introduction/Appchains-&-Chain-Development'
      },
      {
        type:'doc',
        label:'Settlement Layer',
        id:'introduction/Settlement-Layer'
      },
    ]
  },



  {
    type: 'category',
    label: 'Evanescent Rollups in SuperSol',
    collapsed:true,
    collapsible:true,
    items:[
      {
        type:'doc',
        label:'How Evanescent Rollups Work',
        id:'introduction/How-Evanescent-Rollups-Work'
      },
      {
        type:'doc',
        label:'Benefits Over Traditional Rollups',
        id:'introduction/Benefits-Over-Traditional-Rollups'
      },
      {
        type:'doc',
        label:'Security & Finality Considerations',
        id:'introduction/Security-&-Finality-Considerations'
      },
    ]
  },




  {
    type: 'category',
    label: 'SuperSol Chain Development Kit (CDK)',
    collapsed:true,
    collapsible:true,
    items:[
      {
        type:'doc',
        label:'What is CDK?',
        id:'introduction/What-is-CDK'
      },
      {
        type:'doc',
        label:'Customizing L2 Solutions with CDK',
        id:'introduction/Customizing-L2-Solutions-with-CDK'
      },
      {
        type:'doc',
        label:'Integration with Solana L1',
        id:'introduction/Integration-with-Solana-L1'
      },
      {
        type:'doc',
        label:'Modular & Customizable L2 Chains',
        id:'introduction/Modular-&-Customizable-L2-Chains'
      },
    ]

  },


  {
    type: 'category',
    label:'Shared Liquidity Layer',
    collapsed:true,
    collapsible:true,
    items:[
      {
        type:'doc',
        label:'Why Shared Liquidity?',
        id:'introduction/Why-Shared-Liquidity'
      },
      {
        type:'doc',
        label:'Benefits for dApps and DeFi',
        id:'introduction/Benefits-for-dApps-and-DeFi'
      },
      {
        type:'doc',
        label:'Cross-Chain Liquidity Sharing',
        id:'introduction/Cross-Chain-Liquidity-Sharing'
      },
    ]
  },


  {
    type: 'category',
    label:'Fraud-Proof & Validation Mechanisms',
    collapsed:true,
    collapsible:true,
    items:[
      {
        type:'doc',
        label:'Fraud Proof Mechanism in SuperSol',
        id:'introduction/Fraud-Proof-Mechanism-in-SuperSol'
      },
      {
        type:'doc',
        label:'State Commitment & Verification',
        id:'introduction/State-Commitment-&-Verification'
      },
      {
        type:'doc',
        label:'Interactive Proof System for Dispute Resolution',
        id:'introduction/Interactive-Proof-System-for-Dispute-Resolution'
      },
      {
        type:'doc',
        label:'Fraud Verification & Replay Transactions',
        id:'introduction/Fraud-Verification-&-Replay-Transactions'
      },
    ]
  },



  {
    type: 'category',
    label: 'Sequencer and Transaction Ordering',
    collapsed:true,
    collapsible:true,
    items:[
      {
        type:'doc',
        label:'Centralized Sequencing',
        id:'introduction/Centralized-Sequencing'
      },
      {
        type:'doc',
        label:'Transitioning to Decentralized Sequencing',
        id:'introduction/Transitioning-to-Decentralized-Sequencing'
      },
      {
        type:'doc',
        label:'Challenges & Solutions',
        id:'introduction/Challenges-&-Solutions-in-Decentralized-Sequencing'
      },
    ]
  },




  {
    type: 'category',
    label: 'Smart Contract Infrastructure',
    collapsed:true,
    collapsible:true,
    items:[
      {
        type:'doc',
        label:'The Rollup Contract',
        id:'introduction/The-Rollup-Contract'
      },
      {
        type:'doc',
        label:'Canonical Bridge for Interoperability',
        id:'introduction/Canonical-Bridge-for-Interoperability'
      },
      {
        type:'doc',
        label:'Cross-Layer Communication & Security',
        id:'introduction/Cross-Layer-Communication-&-Security'
      },
    ]
  },



  {
    type: 'category',
    label: 'SuperSol’s Focus on Industry Use Cases',
    collapsed:true,
    collapsible:true,
    items:[
      {
        type:'doc',
        label:'GameFi: High-Frequency Transactions & NFT Economies',
        id:'introduction/High-Frequency-Transaction-&-NFT-Economies'
      },
      {
        type:'doc',
        label:'DePIN: Decentralized Physical Infrastructure Networks',
        id:'introduction/Decentralized-Physical-Infrastructure-Networks'
      },
      {
        type:'doc',
        label:'DeFi & Stablecoins: Scalability & Liquidity',
        id:'introduction/DeFi-&-Stablecoins-Scalability-&-Liquidity'
      },
    ]
  },



  {
    type: 'category',
    label:'Developer Resources',
    collapsed:true,
    collapsible:true,
    items:[
      {
        type:'doc',
        label:'Getting Started with SuperSol',
        id:'introduction/Getting-Started-with-SuperSol'
      },
      {
        type:'doc',
        label:'Deploying L2 Appchains using CDK',
        id:'introduction/Deploying-L2-Appchains-using-CDK'
      },
      {
        type:'doc',
        label:'Integrating Liqu',
        id:'introduction/Integrating-Liqu'
      },
    ]
  },


  ],

  developerSidebar:[
    {
      type:'doc',
      label:'Getting-Started',
      id:'developers/Getting-Started',
    },
    {
      type:'doc',
      label:'Building with Chain Development Kit',
      id:'developers/Building-with-Chain-Development-Kit',
    },
    {
      type:'doc',
      label:'Smart Contract Development',
      id:'developers/Smart-Contract-Development',
    },
    {
      type:'doc',
      label:'Integrating Liquidity Pools',
      id:'developers/Integrating-Liquidity-Pools',
    },
    {
      type:'doc',
      label:'Using Rollups and Scaling Solutions',
      id:'developers/Using-Rollups-and-Scaling-Solutions',
    },
    {
      type:'doc',
      label:'Sequencer and Validator Management',
      id:'developers/Sequencer-and-Validator-Management',
    },
    {
      type:'doc',
      label:'Bridging and Interoperability',
      id:'developers/Bridging-and-Interoperability',
    },
    {
      type:'doc',
      label:'Security and Best Practices',
      id:'developers/Security-and-Best-Practices',
    },
    {
      type:'doc',
      label:'API Reference',
      id:'developers/API-Reference',
    },
    {
      type:'doc',
      label:'Tutorials and Examples',
      id:'developers/Tutorials-and-Examples',
    },
    {
      type:'doc',
      label:'Troubleshooting and Support',
      id:'developers/Troubleshooting-and-Support',
    },
  ]

  
  
};


export default sidebars;

















// introSidebar:[
//   {
//     type: 'html', // Adds space
//     value: '<div style="margin-top: 20px;margin-left:10px">Welcome</div>',
//   },
//   {
//     type:'doc',
//     label:'Introduction',
//     id:'introduction/what is supersol'
//   },
//   {
//     type:'doc',
//     label:'Overview of SuperSol',
//     id:'introduction/what is supersol'
//   },
//   {
//     type:'doc',
//     label:'Why Layer 2 for Solana?',
//     id:'introduction/tokenomics'
//   },
//   {
//     type:'doc',
//     label:'Key Features & Benefits',
//     id:'introduction/tokenomics'
//   },
//   {
//     type: 'html', // Adds space
//     value: '<div style="margin-top: 40px;margin-left:10px">Super Adoption Stack</div>',
//   },
//   {
//     type:'doc',
//     label:'our vision sas',
//     id:'introduction/our-vision-sas'
//   },
//   {
//     type:'doc',
//     label:'Soon mainnet',
//     id:'introduction/soon-mainnet'
//   },
//   {
//     type:'doc',
//     label:'Soon stack',
//     id:'introduction/soon-stack'
//   },
//   {
//     type:'doc',
//     label:'intersoon',
//     id:'introduction/intersoon'
//   },
//   {
//     type:'html',
//     value: '<div style="margin-top: 40px;margin-left:10px">Core Technical Innovations</div>',
//   },
  
//   {
//     type:'doc',
//     label:'decoupled svm',
//     id:'introduction/decoupled-svm'
//   },
//   {
//     type:'doc',
//     label:'merklization',
//     id:'introduction/merklization'
//   },
//   {
//     type:'doc',
//     label:'horizontal scaling',
//     id:'introduction/horizontal-scaling'
//   },
//  ],
//  developersSidebar:[
//   {
//     type:'html',
//     value: '<div style="margin-top: 20px;margin-left:10px">Using SuperSol</div>',
//   },
//   {
//     type:'category',
//     label:'Quick Start',
//     collapsed:true,
//     items:[
//       {
//         type:'doc',
//         label:'RPC setup',
//         id:'developers/quick-rpc-setup'
//       },
//       {
//         type:'doc',
//         label:'Reading-From Network',
//         id:'developers/reading-from-network'
//       },
//       {
//         type:'doc',
//         label:'Writing To Network',
//         id:'developers/writing-to-network'
//       },
//       {
//         type:'doc',
//         label:'Deploying Programs',
//         id:'developers/deploying-programs'
//       }, 
//     ]
//   },
//   {
//     type:'doc',
//     label:'Network Info',
//     id:'developers/network-info'
//   },
//   {
//     type:'doc',
//     label:'wallet',
//     id:'developers/wallet'
//   },
//   {
//     type:'doc',
//     label:'faucet',
//     id:'developers/faucet'
//   },
//   {
//     type:'doc',
//     label:'explorer',
//     id:'developers/explorer'
//   },
//   {
//     type:'doc',
//     label:'Supported Assets',
//     id:'developers/nativeAssets'
//   },
//   {
//     type:'html',
//     value: '<div style="margin-top: 40px;margin-left:10px">  Building on SuperSol</div>',
//   },
//   {
//     type:'category',
//     label:'Environment Setup',
//     collapsible: true,
//     collapsed: true,
//     link: { type: "doc", id: "developers/required-environments" },
//     items:[
//       {
//         type:'doc',
//         label:'Install Rust',
//         id:'developers/install-rust'
//       },
//       {
//         type:'doc',
//         label:'Install solana cli',
//         id:'developers/install-solana-cli'
//       },
//       {
//         type:'doc',
//         label:'Install anchor cli',
//         id:'developers/install-anchor-cli'
//       },
//       {
//         type:'doc',
//         label:'Install nodejs yarn & pnpm',
//         id:'developers/install-nodejs-yarn-and-pnpm'
//       },
//       {
//         type:'doc',
//         label:'SuperSol RPC configuration',
//         id:'developers/soon-rpc-configuration'
//       },
//       {
//         type:'doc',
//         label:'New Key Pair',
//         id:'developers/new-key-pair'
//       },
//       {
//         type:'doc',
//         label:'Get Test Token',
//         id:'developers/get-test-token-via-soon-faucet'
//       },
//     ]
//   },
//   {
//     type:'category',
//     label:'Examples',
//     collapsible: true,
//     collapsed: true,
//     link: { type: "doc", id: "developers/create-new-project" },
//     items:[
//       {
//        type:'doc',
//        label:'create-new-project',
//        id:'developers/create-new-project'
//     },
//       {
//        type:'doc',
//        label:'Deploy Smart Contracts',
//        id:'developers/deploy-smart-contracts'
//     },
//   ]
//   },
//   {
//     type:'doc',
//     label:'Oracle',
//     id:'developers/oracle'
//   },
//   {
//     type:'doc',
//     label:'SQD',
//     id:'developers/sqd'
//   },
//   {
//     type:'html',
//     value: '<div style="margin-top: 40px;margin-left:10px">Metaplex</div>',
//   },
//   {
//     type:'doc',
//     label:'SuperSol SPL',
//     id:'developers/supersol-spl'
//   },
//   {
//     type:'doc',
//     label:'SuperSol NFT',
//     id:'developers/nft'
//   },

  
//  ],
//  rpcSidebar: [
//   {
//     type:'html',
//     value: '<div style="margin-top: 20px;margin-left:10px">RPC</div>',
//   },
//   {
//     type: 'doc',
//     label: "Data Structure",
//     id: 'rpc/dataStructures',
//   },
//   {
//     type:'category',
//     label:"HTTP Methods",
//     collapsible: true,
//     collapsed: true,
//     link: { type: "doc", id: "rpc/required-environments" },
//     items:[
//       {
//         type: 'doc',
//         label: "Overview",
//         id: 'rpc/overview',
//       },
//       {
//         type: 'doc',
//         label: "GetAccountInfo",
//         id: 'rpc/getAccountInfo',
//       },
//       {
//         type: 'doc',
//         label: "GetBalance",
//         id: 'rpc/getBalance',
//       },
//       {
//         type: 'doc',
//         label: "GetBlock",
//         id: 'rpc/getBlock',
//       },
//       {
//         type: 'doc',
//         label: "GetBlockHeight",
//         id: 'rpc/getBlockHeight',
//       },
//       {
//         type: 'doc',
//         label: "GetBlockProduction",
//         id: 'rpc/getBlockProduction',
//       },
//       {
//         type: 'doc',
//         label: "GetBlockTime",
//         id: 'rpc/getBlockTime',
//       },
//       {
//         type: 'doc',
//         label: "GetBlocks",
//         id: 'rpc/getBlocks',
//       },
//       {
//         type: 'doc',
//         label: "GetBlocksWithLimit",
//         id: 'rpc/getBlocksWithLimit',
//       },
//       {
//         type: 'doc',
//         label: "GetClusterNodes",
//         id: 'rpc/getClusterNodes',
//       },
//       {
//         type: 'doc',
//         label: "GetEpochInfo",
//         id: 'rpc/getEpochInfo',
//       },
//       {
//         type: 'doc',
//         label: "GetEpochSchedule",
//         id: 'rpc/getEpochSchedule',
//       },
//       {
//         type: 'doc',
//         label: "GetGenesisHash",
//         id: 'rpc/getGenesisHash',
//       },
//       {
//         type: 'doc',
//         label: "GetHealth",
//         id: 'rpc/getHealth',
//       },
//       {
//         type: 'doc',
//         label: "GetHighestSnapshotSlot",
//         id: 'rpc/getHighestSnapshotSlot',
//       },
//       {
//         type: 'doc',
//         label: "GetIdentity",
//         id: 'rpc/getIdentity',
//       },
//       {
//         type: 'doc',
//         label: "GetInflationGovernor",
//         id: 'rpc/getInflationGovernor',
//       },
//       {
//         type: 'doc',
//         label: "GetInflationRate",
//         id: 'rpc/getInflationRate',
//       },
//       {
//         type: 'doc',
//         label: "GetLargestAccounts",
//         id: 'rpc/getLargestAccounts',
//       },
//       {
//         type: 'doc',
//         label: "GetLatestBlockhash",
//         id: 'rpc/getLatestBlockhash',
//       },
//       {
//         type: 'doc',
//         label: "GetMinimumBalanceForRentExemption",
//         id: 'rpc/getMinimumBalanceForRentExemption',
//       },
//       {
//         type: 'doc',
//         label: "GetMultipleAccounts",
//         id: 'rpc/getMultipleAccounts',
//       },
//       {
//         type: 'doc',
//         label: "GetRecentPerformanceSamples",
//         id: 'rpc/getRecentPerformanceSamples',
//       },
//       {
//         type: 'doc',
//         label: "GetRecentPrioritizationFees",
//         id: 'rpc/getRecentPrioritizationFees',
//       },
//       {
//         type: 'doc',
//         label: "GetSignatureStatuses",
//         id: 'rpc/getSignatureStatuses',
//       },
//       {
//         type: 'doc',
//         label: "GetSignaturesForAddress",
//         id: 'rpc/getSignaturesForAddress',
//       },
//       {
//         type: 'doc',
//         label: "GetSlot",
//         id: 'rpc/getSlot',
//       },
//       {
//         type: 'doc',
//         label: "GetSlotLeader",
//         id: 'rpc/getSlotLeader',
//       },
//       {
//         type: 'doc',
//         label: "GetStakeMinimumDelegation",
//         id: 'rpc/getStakeMinimumDelegation',
//       },
//       {
//         type: 'doc',
//         label: "GetSupply",
//         id: 'rpc/getSupply',
//       },
//       {
//         type: 'doc',
//         label: "GetTokenAccountBalance",
//         id: 'rpc/getTokenAccountBalance',
//       },
//       {
//         type: 'doc',
//         label: "GetTokenAccountsByDelegate",
//         id: 'rpc/getTokenAccountsByDelegate',
//       },
//       {
//         type: 'doc',
//         label: "GetTokenAccountsByOwner",
//         id: 'rpc/getTokenAccountsByOwner',
//       },
//       {
//         type: 'doc',
//         label: "GetTokenLargestAccounts",
//         id: 'rpc/getTokenLargestAccounts',
//       },
//       {
//         type: 'doc',
//         label: "GetTokenSupply",
//         id: 'rpc/getTokenSupply',
//       },
//       {
//         type: 'doc',
//         label: "GetTransaction",
//         id: 'rpc/getTransaction',
//       },
//       {
//         type: 'doc',
//         label: "GetTransactionCount",
//         id: 'rpc/getTransactionCount',
//       },
//       {
//         type: 'doc',
//         label: "GetVersion",
//         id: 'rpc/getVersion',
//       },
//       {
//         type: 'doc',
//         label: "IsBlockhashValid",
//         id: 'rpc/isBlockhashValid',
//       },
//       {
//         type: 'doc',
//         label: "SendTransaction",
//         id: 'rpc/sendTransaction',
//       },
//       {
//         type: 'doc',
//         label: "SimulateTransaction",
//         id: 'rpc/simulateTransaction',
//       }
//     ],

//   }
  
// ],
// resourcesSidebar:[
//   {
//     type:'html',
//     value: '<div style="margin-top: 20px;margin-left:10px">Resources</div>',
//   },
//   {
//     type:'doc',
//     label:'Developer Tools',
//     id:'resourse/developer-tools'
//   },
//   {
//     type:'doc',
//     label:'Blog',
//     id:'resourse/blog'
//   },
// ],
// svmBNBSidebar:[
//   {
//     type:'html',
//     value: '<div style="margin-top: 20px;margin-left:10px">svmBNB</div>',
//   },
//   {
//     type:'doc',
//     label:'What is svmBNB',
//     id:'svmBNB/what_is_svmBNB'
//   },
//   {
//     type:'doc',
//     label:'Empowering BNB Ecosystem',
//     id:'svmBNB/empowering_BNB_Chain'
//   },
//   {
//     type:'doc',
//     label:'svmBNB Network Info',
//     id:'svmBNB/network_Info'
//   },
//   {
//     type:'doc',
//     label:'Wallet and Bridge Guide',
//     id:'svmBNB/wallet_svmBNB'
//   },
// ]