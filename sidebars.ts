import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
   introSidebar:[
    {
      type: 'html', // Adds space
      value: '<div style="margin-top: 20px;margin-left:10px">Welcome</div>',
    },,
    {
      type:'doc',
      label:'What is SuperSol',
      id:'introduction/what is supersol'
    },
    {
      type:'doc',
      label:'tokenomics',
      id:'introduction/tokenomics'
    },
    {
      type: 'html', // Adds space
      value: '<div style="margin-top: 40px;margin-left:10px">Super Adoption Stack</div>',
    },
    {
      type:'doc',
      label:'our vision sas',
      id:'introduction/our-vision-sas'
    },
    {
      type:'doc',
      label:'Soon mainnet',
      id:'introduction/soon-mainnet'
    },
    {
      type:'doc',
      label:'Soon stack',
      id:'introduction/soon-stack'
    },
    {
      type:'doc',
      label:'intersoon',
      id:'introduction/intersoon'
    },
    {
      type:'html',
      value: '<div style="margin-top: 40px;margin-left:10px">Core Technical Innovations</div>',
    },
    
    {
      type:'doc',
      label:'decoupled svm',
      id:'introduction/decoupled-svm'
    },
    {
      type:'doc',
      label:'merklization',
      id:'introduction/merklization'
    },
    {
      type:'doc',
      label:'horizontal scaling',
      id:'introduction/horizontal-scaling'
    },
   ],
   developersSidebar:[
    {
      type:'html',
      value: '<div style="margin-top: 20px;margin-left:10px">Using SuperSol</div>',
    },
    {
      type:'category',
      label:'Quick Start',
      collapsed:true,
      items:[
        {
          type:'doc',
          label:'RPC setup',
          id:'developers/quick-rpc-setup'
        },
        {
          type:'doc',
          label:'Reading-From Network',
          id:'developers/reading-from-network'
        },
        {
          type:'doc',
          label:'Writing To Network',
          id:'developers/writing-to-network'
        },
        {
          type:'doc',
          label:'Deploying Programs',
          id:'developers/deploying-programs'
        }, 
      ]
    },
    {
      type:'doc',
      label:'Network Info',
      id:'developers/network-info'
    },
    {
      type:'doc',
      label:'wallet',
      id:'developers/wallet'
    },
    {
      type:'doc',
      label:'faucet',
      id:'developers/faucet'
    },
    {
      type:'doc',
      label:'explorer',
      id:'developers/explorer'
    },
    {
      type:'doc',
      label:'Supported Assets',
      id:'developers/nativeAssets'
    },
    {
      type:'html',
      value: '<div style="margin-top: 40px;margin-left:10px">  Building on SuperSol</div>',
    },
    {
      type:'category',
      label:'Environment Setup',
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "developers/required-environments" },
      items:[
        {
          type:'doc',
          label:'Install Rust',
          id:'developers/install-rust'
        },
        {
          type:'doc',
          label:'Install solana cli',
          id:'developers/install-solana-cli'
        },
        {
          type:'doc',
          label:'Install anchor cli',
          id:'developers/install-anchor-cli'
        },
        {
          type:'doc',
          label:'Install nodejs yarn & pnpm',
          id:'developers/install-nodejs-yarn-and-pnpm'
        },
        {
          type:'doc',
          label:'SuperSol RPC configuration',
          id:'developers/soon-rpc-configuration'
        },
        {
          type:'doc',
          label:'New Key Pair',
          id:'developers/new-key-pair'
        },
        {
          type:'doc',
          label:'Get Test Token',
          id:'developers/get-test-token-via-soon-faucet'
        },
      ]
    },
    {
      type:'category',
      label:'Examples',
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "developers/create-new-project" },
      items:[
        {
         type:'doc',
         label:'create-new-project',
         id:'developers/create-new-project'
      },
        {
         type:'doc',
         label:'Deploy Smart Contracts',
         id:'developers/deploy-smart-contracts'
      },
    ]
    },
    {
      type:'doc',
      label:'Oracle',
      id:'developers/oracle'
    },
    {
      type:'doc',
      label:'SQD',
      id:'developers/sqd'
    },
    {
      type:'html',
      value: '<div style="margin-top: 40px;margin-left:10px">Metaplex</div>',
    },
    {
      type:'doc',
      label:'SuperSol SPL',
      id:'developers/supersol-spl'
    },
    {
      type:'doc',
      label:'SuperSol NFT',
      id:'developers/nft'
    },
  
    
   ],
   rpcSidebar: [
    {
      type:'html',
      value: '<div style="margin-top: 20px;margin-left:10px">RPC</div>',
    },
    {
      type: 'doc',
      label: "Data Structure",
      id: 'rpc/dataStructures',
    },
    {
      type:'category',
      label:"HTTP Methods",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "rpc/required-environments" },
      items:[
        {
          type: 'doc',
          label: "Overview",
          id: 'rpc/overview',
        },
        {
          type: 'doc',
          label: "GetAccountInfo",
          id: 'rpc/getAccountInfo',
        },
        {
          type: 'doc',
          label: "GetBalance",
          id: 'rpc/getBalance',
        },
        {
          type: 'doc',
          label: "GetBlock",
          id: 'rpc/getBlock',
        },
        {
          type: 'doc',
          label: "GetBlockHeight",
          id: 'rpc/getBlockHeight',
        },
        {
          type: 'doc',
          label: "GetBlockProduction",
          id: 'rpc/getBlockProduction',
        },
        {
          type: 'doc',
          label: "GetBlockTime",
          id: 'rpc/getBlockTime',
        },
        {
          type: 'doc',
          label: "GetBlocks",
          id: 'rpc/getBlocks',
        },
        {
          type: 'doc',
          label: "GetBlocksWithLimit",
          id: 'rpc/getBlocksWithLimit',
        },
        {
          type: 'doc',
          label: "GetClusterNodes",
          id: 'rpc/getClusterNodes',
        },
        {
          type: 'doc',
          label: "GetEpochInfo",
          id: 'rpc/getEpochInfo',
        },
        {
          type: 'doc',
          label: "GetEpochSchedule",
          id: 'rpc/getEpochSchedule',
        },
        {
          type: 'doc',
          label: "GetGenesisHash",
          id: 'rpc/getGenesisHash',
        },
        {
          type: 'doc',
          label: "GetHealth",
          id: 'rpc/getHealth',
        },
        {
          type: 'doc',
          label: "GetHighestSnapshotSlot",
          id: 'rpc/getHighestSnapshotSlot',
        },
        {
          type: 'doc',
          label: "GetIdentity",
          id: 'rpc/getIdentity',
        },
        {
          type: 'doc',
          label: "GetInflationGovernor",
          id: 'rpc/getInflationGovernor',
        },
        {
          type: 'doc',
          label: "GetInflationRate",
          id: 'rpc/getInflationRate',
        },
        {
          type: 'doc',
          label: "GetLargestAccounts",
          id: 'rpc/getLargestAccounts',
        },
        {
          type: 'doc',
          label: "GetLatestBlockhash",
          id: 'rpc/getLatestBlockhash',
        },
        {
          type: 'doc',
          label: "GetMinimumBalanceForRentExemption",
          id: 'rpc/getMinimumBalanceForRentExemption',
        },
        {
          type: 'doc',
          label: "GetMultipleAccounts",
          id: 'rpc/getMultipleAccounts',
        },
        {
          type: 'doc',
          label: "GetRecentPerformanceSamples",
          id: 'rpc/getRecentPerformanceSamples',
        },
        {
          type: 'doc',
          label: "GetRecentPrioritizationFees",
          id: 'rpc/getRecentPrioritizationFees',
        },
        {
          type: 'doc',
          label: "GetSignatureStatuses",
          id: 'rpc/getSignatureStatuses',
        },
        {
          type: 'doc',
          label: "GetSignaturesForAddress",
          id: 'rpc/getSignaturesForAddress',
        },
        {
          type: 'doc',
          label: "GetSlot",
          id: 'rpc/getSlot',
        },
        {
          type: 'doc',
          label: "GetSlotLeader",
          id: 'rpc/getSlotLeader',
        },
        {
          type: 'doc',
          label: "GetStakeMinimumDelegation",
          id: 'rpc/getStakeMinimumDelegation',
        },
        {
          type: 'doc',
          label: "GetSupply",
          id: 'rpc/getSupply',
        },
        {
          type: 'doc',
          label: "GetTokenAccountBalance",
          id: 'rpc/getTokenAccountBalance',
        },
        {
          type: 'doc',
          label: "GetTokenAccountsByDelegate",
          id: 'rpc/getTokenAccountsByDelegate',
        },
        {
          type: 'doc',
          label: "GetTokenAccountsByOwner",
          id: 'rpc/getTokenAccountsByOwner',
        },
        {
          type: 'doc',
          label: "GetTokenLargestAccounts",
          id: 'rpc/getTokenLargestAccounts',
        },
        {
          type: 'doc',
          label: "GetTokenSupply",
          id: 'rpc/getTokenSupply',
        },
        {
          type: 'doc',
          label: "GetTransaction",
          id: 'rpc/getTransaction',
        },
        {
          type: 'doc',
          label: "GetTransactionCount",
          id: 'rpc/getTransactionCount',
        },
        {
          type: 'doc',
          label: "GetVersion",
          id: 'rpc/getVersion',
        },
        {
          type: 'doc',
          label: "IsBlockhashValid",
          id: 'rpc/isBlockhashValid',
        },
        {
          type: 'doc',
          label: "SendTransaction",
          id: 'rpc/sendTransaction',
        },
        {
          type: 'doc',
          label: "SimulateTransaction",
          id: 'rpc/simulateTransaction',
        }
      ],

    }
    
  ],
  resourcesSidebar:[
    {
      type:'html',
      value: '<div style="margin-top: 20px;margin-left:10px">Resources</div>',
    },
    {
      type:'doc',
      label:'Developer Tools',
      id:'resourse/developer-tools'
    },
    {
      type:'doc',
      label:'Blog',
      id:'resourse/blog'
    },
  ],
  svmBNBSidebar:[
    {
      type:'html',
      value: '<div style="margin-top: 20px;margin-left:10px">svmBNB</div>',
    },
    {
      type:'doc',
      label:'What is svmBNB',
      id:'svmBNB/what_is_svmBNB'
    },
    {
      type:'doc',
      label:'Empowering BNB Ecosystem',
      id:'svmBNB/empowering_BNB_Chain'
    },
    {
      type:'doc',
      label:'svmBNB Network Info',
      id:'svmBNB/network_Info'
    },
    {
      type:'doc',
      label:'Wallet and Bridge Guide',
      id:'svmBNB/wallet_svmBNB'
    },
  ]

};

export default sidebars;