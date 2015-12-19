(function() {
    var transforms = getInput();
    var base = 'ORnPBPMgArCaCaCaSiThCaCaSiThCaCaPBSiRnFArRnFArCaCaSiThCaCaSiThCaCaCaCaCaCaSiRnFYFArSiRnMgArCaSiRnPTiTiBFYPBFArSiRnCaSiRnTiRnFArSiAlArPTiBPTiRnCaSiAlArCaPTiTiBPMgYFArPTiRnFArSiRnCaCaFArRnCaFArCaSiRnSiRnMgArFYCaSiRnMgArCaCaSiThPRnFArPBCaSiRnMgArCaCaSiThCaSiRnTiMgArFArSiThSiThCaCaSiRnMgArCaCaSiRnFArTiBPTiRnCaSiAlArCaPTiRnFArPBPBCaCaSiThCaPBSiThPRnFArSiThCaSiThCaSiThCaPTiBSiRnFYFArCaCaPRnFArPBCaCaPBSiRnTiRnFArCaPRnFArSiRnCaCaCaSiThCaRnCaFArYCaSiRnFArBCaCaCaSiThFArPBFArCaSiRnFArRnCaCaCaFArSiRnFArTiRnPMgArF';
    
    var resultSet = {};
    
    for (var i = 0; i < base.length; i++) {
        permuteBase(i, base[i], base, transforms, resultSet);
        
        if (i+1 < base.length) {
            permuteBase(i, base.substr(i, 2), base, transforms, resultSet);
        }
    }
    
    var permutations = Object.keys(resultSet);
    
    console.log(permutations.length);
})();

function permuteBase(index, substitution, base, transforms, resultSet) {
    if (substitution in transforms) {
        for (var transformedIndex in transforms[substitution]) {
            var transformed = transforms[substitution][transformedIndex];
            var transformedBase = base.slice(0, index) + transformed + base.slice(index + substitution.length);
            resultSet[transformedBase] = 1;
        }
    }
}

function getInput() {
    var input = [
        'Al => ThF',
        'Al => ThRnFAr',
        'B => BCa',
        'B => TiB',
        'B => TiRnFAr',
        'Ca => CaCa',
        'Ca => PB',
        'Ca => PRnFAr',
        'Ca => SiRnFYFAr',
        'Ca => SiRnMgAr',
        'Ca => SiTh',
        'F => CaF',
        'F => PMg',
        'F => SiAl',
        'H => CRnAlAr',
        'H => CRnFYFYFAr',
        'H => CRnFYMgAr',
        'H => CRnMgYFAr',
        'H => HCa',
        'H => NRnFYFAr',
        'H => NRnMgAr',
        'H => NTh',
        'H => OB',
        'H => ORnFAr',
        'Mg => BF',
        'Mg => TiMg',
        'N => CRnFAr',
        'N => HSi',
        'O => CRnFYFAr',
        'O => CRnMgAr',
        'O => HP',
        'O => NRnFAr',
        'O => OTi',
        'P => CaP',
        'P => PTi',
        'P => SiRnFAr',
        'Si => CaSi',
        'Th => ThCa',
        'Ti => BP',
        'Ti => TiTi',
        'e => HF',
        'e => NAl',
        'e => OMg'
    ];
    
    var parser = /(\w+) => (\w+)/;
    
    var map = {};
    for (var i in input) {
        var match = parser.exec(input[i]);
        var start = match[1];
        
        if (!(start in map)) {
            map[start] = [];
        }
        map[start].push(match[2]);
    }
    
    return map;
}
