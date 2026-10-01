import adapter from '@sveltejs/adapter-vercel';

const config = {
  kit: {
    adapter: adapter()
  },
  onwarn: (warning, handler) => {
    if (warning.code.startsWith('a11y')) return;
    handler(warning);
  }
};

export default config;
