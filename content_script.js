$('body').find('*').contents().filter(function() { return (this.nodeType === 3) }).each(function(i, elm) {
  if(this.textContent.match(/(art critic)|(Art Critic)|(Art critic)/g)) {
    this.textContent = this.textContent
      .replace(/art critic/g, 'judgmental homeless German man')
      .replace(/Art Critic /g, 'judgmental homeless German man')
      .replace(/Art critic/g, 'judgmental homeless German man');

    this.parentNode.replaceChild($('<span>'+this.textContent+'</span>')[0], this)
  }
});
