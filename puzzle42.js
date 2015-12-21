(function() {
    var boss = {
        HitPoints: 109,
        Damage: 8,
        Armor: 2
    };
    
    var weapons = {
        Dagger:      { Cost: 8,  Damage: 4, Armor: 0 },
        Shortsword:  { Cost: 10, Damage: 5, Armor: 0 },
        Warhammer:   { Cost: 25, Damage: 6, Armor: 0 },
        Longsword:   { Cost: 40, Damage: 7, Armor: 0 },
        Greataxe:    { Cost: 74, Damage: 8, Armor: 0 }
    };
    
    var armors = {
        None:        { Cost:   0, Damage: 0, Armor: 0 },
        Leather:     { Cost:  13, Damage: 0, Armor: 1 },
        Chainmail:   { Cost:  31, Damage: 0, Armor: 2 },
        Splintmail:  { Cost:  53, Damage: 0, Armor: 3 },
        Bandedmail:  { Cost:  75, Damage: 0, Armor: 4 },
        Platemail:   { Cost: 102, Damage: 0, Armor: 5 }
    };
    
    var rings = {
        None1:    { Cost:   0, Damage: 0, Armor: 0 },
        None2:    { Cost:   0, Damage: 0, Armor: 0 },
        Defense1: { Cost:  20, Damage: 0, Armor: 1 },
        Damage1:  { Cost:  25, Damage: 1, Armor: 0 },
        Defense2: { Cost:  40, Damage: 0, Armor: 2 },
        Damage2:  { Cost:  50, Damage: 2, Armor: 0 },
        Defense3: { Cost:  80, Damage: 0, Armor: 3 },
        Damage3:  { Cost: 100, Damage: 3, Armor: 0 }
    };
    
    var player = {
        HitPoints: 100,
        Damage: 0,
        Armor: 0
    };
    var highestCost = 0;
    
    for (var weapon in weapons) {
        for (var armor in armors) {
            for (var ring1 in rings) {
                for (var ring2 in rings) {
                    
                    if (ring1 === ring2) {
                        continue;
                    }
                    
                    var cost = weapons[weapon].Cost + armors[armor].Cost + rings[ring1].Cost + rings[ring2].Cost;
                    if (cost > highestCost) {
                        var equipedPlayer = {
                            HitPoints: player.HitPoints,
                            Damage: weapons[weapon].Damage + rings[ring1].Damage + rings[ring2].Damage,
                            Armor: armors[armor].Armor + rings[ring1].Armor + rings[ring2].Armor
                        };
                        var bossCopy = {
                            HitPoints: boss.HitPoints,
                            Damage: boss.Damage,
                            Armor: boss.Armor
                        };
                        
                        if (!runFight(bossCopy, equipedPlayer)) {
                            highestCost = cost;
                        }
                    }
                }
            }
        }
    }
    
    console.log(highestCost);
    
})();

function runFight(boss, player) {
    while(true) {
        attack(player, boss);
        if (boss.HitPoints <= 0) {
            return true;
        }
        attack(boss, player);
        if (player.HitPoints <= 0) {
            return false;
        }
    }
}

function attack(attacker, defender) {
    damage = Math.max(1, attacker.Damage - defender.Armor);
    defender.HitPoints -= damage;
}