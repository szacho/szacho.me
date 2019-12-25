const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    repo: 'https://github.com/szacho/szacho.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)