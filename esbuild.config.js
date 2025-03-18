require('esbuild').build({
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'dist/out.js',
    loader: {
      '.js': 'jsx'  // Tell esbuild to parse .js files as JSX
    }
  }).catch(() => process.exit(1));