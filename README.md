# Router Protocol Documentation

This repository contains the documentation website for Router Protocol built with [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Getting Started

### Prerequisites

- Node.js (version 16.14 or above)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-github-org/router-docs.git
cd router-docs

# Install dependencies
npm install
```

### Local Development

```bash
# Start the development server
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
# Build the website
npm run build
```

This command generates static content into the `build` directory that can be served using any static content hosting service.

### Deployment

```bash
# Deploy to GitHub Pages
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Project Structure

```
router-docs/
├── blog/
│   ├── ...
├── docs/
│   ├── introduction.md
│   ├── getting-started/
│   │   ├── overview.md
│   │   ├── cross-talk.md
│   │   └── cross-chain-apps.md
│   ├── developers/
│   │   ├── voyager/
│   │   │   ├── introduction.md
│   │   │   ├── concepts.md
│   │   │   └── integration-guide.md
│   │   ├── crosstalk/
│   │   │   ├── introduction.md
│   │   │   ├── architecture.md
│   │   │   └── integration-guide.md
│   │   └── pathfinder/
│   │       ├── introduction.md
│   │       ├── concepts.md
│   │       └── integration-guide.md
│   ├── networks/
│   │   ├── supported-chains.md
│   │   └── testnets.md
│   └── resources/
│       ├── faq.md
│       └── glossary.md
├── src/
│   ├── components/
│   │   └── HomepageFeatures/
│   ├── css/
│   │   └── custom.css
│   └── pages/
│       └── index.tsx
├── static/
│   └── img/
├── docusaurus.config.ts
├── sidebars.ts
├── package.json
└── tsconfig.json
```

## Customization

### Changing the Theme

You can modify the theme colors in `src/css/custom.css`. The default color scheme is set to match Router Protocol's branding, but you can adjust it to your preferences.

### Adding Content

1. **Documentation**: Add new markdown files to the `docs` directory. Update `sidebars.ts` to include them in the navigation.
2. **Blog**: Add new markdown files to the `blog` directory.
3. **Pages**: Create or modify React components in the `src/pages` directory.

### Configuration

The main configuration file is `docusaurus.config.ts`. You can modify it to:

- Change the site metadata
- Update navigation links
- Configure plugins
- Customize the theme

## Additional Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Markdown Features](https://docusaurus.io/docs/markdown-features)
- [Plugin System](https://docusaurus.io/docs/api/plugins)
- [Routing](https://docusaurus.io/docs/routing)