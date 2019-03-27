module.exports = function() {
    this.cacheable && this.cacheable();
    return Buffer.from('find me', 'utf8');
};
