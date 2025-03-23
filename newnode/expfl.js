function gennm() {
    return Math.floor(Math.random() * 100) + 1;
}

function celtofar(cel) {
    return (cel*9)/5 + 32;
}

module.exports = {
    gennm, 
    celtofar,
};