const socialMedia = [
  {
    url: 'https://www.facebook.com/sharer/sharer.php?u={{ site.url }}{{ site.baseurl }}{{ page.url }}',
    name: 'Facebook',
    windowSize: 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'
  },
  {
    url: 'https://twitter.com/intent/tweet?text={{ page.title }}&url={{ site.url }}{{ site.baseurl }}{{ page.url }}',
    name: 'Twitter',
    windowSize: 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'
  },
  {
    url: 'https://plus.google.com/share?url={{ site.url }}{{ site.baseurl }}{{ page.url }}',
    name: 'GooglePlus',
    windowSize: 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'
  },
  {
    url: 'http://www.reddit.com/submit?url={{ site.url }}{{ site.baseurl }}{{ page.url }}',
    name: 'Reddit',
    windowSize: 'left=20,top=20,width=900,height=500,toolbar=1,resizable=0'
  }
];

function attachLink(m) {
  let node = document.querySelector(`.share-${m.name.toLowerCase()}`);
  node.setAttribute('href', m.url);
  node.setAttribute('title', `Share on ${m.name}`)
  node.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(m.url, 'pop-up', m.windowSize);
    return false;
  });
}

window.addEventListener('DOMContentLoaded', () => {
  socialMedia.forEach(m => attachLink(m));
})
