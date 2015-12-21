(function() {
    var start = 'ORnPBPMgArCaCaCaSiThCaCaSiThCaCaPBSiRnFArRnFArCaCaSiThCaCaSiThCaCaCaCaCaCaSiRnFYFArSiRnMgArCaSiRnPTiTiBFYPBFArSiRnCaSiRnTiRnFArSiAlArPTiBPTiRnCaSiAlArCaPTiTiBPMgYFArPTiRnFArSiRnCaCaFArRnCaFArCaSiRnSiRnMgArFYCaSiRnMgArCaCaSiThPRnFArPBCaSiRnMgArCaCaSiThCaSiRnTiMgArFArSiThSiThCaCaSiRnMgArCaCaSiRnFArTiBPTiRnCaSiAlArCaPTiRnFArPBPBCaCaSiThCaPBSiThPRnFArSiThCaSiThCaSiThCaPTiBSiRnFYFArCaCaPRnFArPBCaCaPBSiRnTiRnFArCaPRnFArSiRnCaCaCaSiThCaRnCaFArYCaSiRnFArBCaCaCaSiThFArPBFArCaSiRnFArRnCaCaCaFArSiRnFArTiRnPMgArF';
    
    // There are no CRn... strings and no way to create them so ignore those transforms
    var Als = start.match(/Al/g).length;
    var Bs = start.match(/B/g).length;
    var Cas = start.match(/Ca/g).length;
    var Fs = start.match(/F/g).length;
    var Hs = 0; //start.match(/H/g).length;
    var Mgs = start.match(/Mg/g).length;
    var Ns = 0; //start.match(/N/g).length;
    var Os = start.match(/O/g).length;
    var Ps = start.match(/P/g).length;
    var Sis = start.match(/Si/g).length;
    var Ths = start.match(/Th/g).length;
    var Tis = start.match(/Ti/g).length;
    
    var Rns = start.match(/Rn/g).length;
    var Ys = start.match(/Y/g).length;
    var Ars = start.match(/Ar/g).length;
    
    // Transforms decrease length by one element for normal transforms. x -> xx
    // Or decrease by 3 for x -> x Rn x Ar
    // Or decrease by 5 for x -> x Rn x Y x AR
    // Or decrease by 7 for x -> x Rn x Y x Y x AR
    
    var totalCount = Als + Bs + Cas + Fs + Hs + Mgs + Ns + Os + Ps + Sis + Ths + Tis + Rns + Ys + Ars;
    var RnsAndArs = Rns + Ars;
    
    var numberOfSteps = totalCount - RnsAndArs - (2 * Ys) - 1;
    
    console.log(numberOfSteps);
})();
