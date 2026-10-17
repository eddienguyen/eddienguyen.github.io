const path = require('path');

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    // Exclude contexts from stories
    '!../components/contexts/**',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        useSWC: true, // Use SWC for faster builds (Storybook 7.6 feature)
      },
    },
  },

  docs: {
    autodocs: 'tag', // Generate docs automatically for stories with 'autodocs' tag
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    check: false, // Disable type checking for faster builds
  },

  // Webpack customization
  webpackFinal: async (config) => {
    // Add Sass support (should work out of the box with @storybook/nextjs, but explicit config)
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [path.join(__dirname, '../styles')],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    // Add styled-jsx support
    const babelLoader = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes('jsx')
    );
    
    if (babelLoader && babelLoader.use) {
      const babelLoaderConfig = Array.isArray(babelLoader.use) 
        ? babelLoader.use[0] 
        : babelLoader.use;
      
      if (babelLoaderConfig.options) {
        babelLoaderConfig.options.plugins = [
          ...(babelLoaderConfig.options.plugins || []),
          'styled-jsx/babel',
        ];
      }
    }

    // Add path aliases to match Next.js config
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../'),
      '@/styles': path.resolve(__dirname, '../styles'),
      '@/components': path.resolve(__dirname, '../components'),
    };

    return config;
  },

  // Serve static files from public directory
  staticDirs: ['../public'],

  // Core configuration
  core: {
    disableTelemetry: true, // Disable telemetry for privacy
  },
};

export default config;
