// custom-processor.js

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    const randomLength = Math.floor(Math.random() * 196) + 5; // Length between 5 and 200
    let randomString = '';
    
    for (let i = 0; i < randomLength; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return randomString;
}

module.exports = {
  generateRandomString: function (context, events, done) {
    // Generate a random string and add it to the context vars
    context.vars.randomString = generateRandomString();
    return done();
  }
};
