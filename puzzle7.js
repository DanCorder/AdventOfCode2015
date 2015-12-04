var crypto = require('crypto');

(function() {
    var input = "abcdef609043"
    var secretKey = 'yzbqklnj';
    var coinValue = 1;
    
    while(true) {
        var md5sum = crypto.createHash('md5');
        md5sum.update(secretKey + coinValue);
        var answer = md5sum.digest('hex');
        
        if (answer.slice(0, 5) === '00000') {
            break;
        }
        
        coinValue++;
    }
    
    console.log(coinValue);
})();
