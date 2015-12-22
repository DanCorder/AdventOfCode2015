(function() {
    var boss = {
        HitPoints: 55,
        Damage: 8,
        Armor: 0,
        PoisonTimer: 0
    };
    
    var player = {
        HitPoints: 50,
        Damage: 0,
        Armor: 0,
        Mana: 500,
        ShieldTimer: 0,
        RechargeTimer: 0
    };
    
    var spells = {
        Missile:     { Cost:  53, Damage: 4, Healing: 0, Mana:   0, Armor: 0, Duration: 0 },
        Drain:       { Cost:  73, Damage: 2, Healing: 2, Mana:   0, Armor: 0, Duration: 0 },
        Shield:      { Cost: 113, Damage: 0, Healing: 0, Mana:   0, Armor: 7, Duration: 6 },
        Poison:      { Cost: 173, Damage: 3, Healing: 0, Mana:   0, Armor: 0, Duration: 6 },
        Recharge:    { Cost: 229, Damage: 0, Healing: 0, Mana: 101, Armor: 0, Duration: 5 }
    };

    var lowestCost = findLowestCost(player, boss, spells, Number.MAX_SAFE_INTEGER, 0);
    
    console.log(lowestCost);
    
})();

function findLowestCost(player, boss, spells, lowestWinCostSoFar, costSoFar) {

    if (costSoFar > lowestWinCostSoFar) {
        return Number.MAX_SAFE_INTEGER;
    }
    
    var playerWithLingeringEffects = copyCharacter(player);
    var bossWithLingeringEffects = copyCharacter(boss);
    
    applyLingeringAffects(playerWithLingeringEffects, bossWithLingeringEffects);
    if (boss.HitPoints <= 0) {
        return costSoFar;
    }
    
    var triedSpells = {};
    
    while (Object.keys(triedSpells).length < 5)  {
        // Player turn
        var spellName = selectSpell(playerWithLingeringEffects, bossWithLingeringEffects, triedSpells);
        if (!spellName) {
            break;
        }
        if (costSoFar + spells[spellName].Cost > lowestWinCostSoFar) {
            continue;
        }
        
        var playerWithSpellApplied = copyCharacter(playerWithLingeringEffects);
        var bosWithSpellApplied = copyCharacter(bossWithLingeringEffects);
        applySpell(playerWithSpellApplied, bosWithSpellApplied, spellName, spells);
        
        if (playerWithSpellApplied.Mana < 0) {
            // Loss try next spell
            continue;
        }
        if (bosWithSpellApplied.HitPoints <= 0) {
            // Win
            lowestWinCostSoFar = Math.min(lowestWinCostSoFar, costSoFar + spells[spellName].Cost);
            continue;
        }
        
        // Boss turn
        applyLingeringAffects(playerWithSpellApplied, bosWithSpellApplied);
        if (boss.HitPoints <= 0) {
            // Win
            lowestWinCostSoFar = Math.min(lowestWinCostSoFar, (costSoFar + spells[spellName].Cost));
            continue;
        } 
        applyBossTurn(playerWithSpellApplied, bosWithSpellApplied);
        if (playerWithSpellApplied.HitPoints <= 0) {
            // loss try next spell
            continue;
        }
        
        lowestWinCostSoFar = Math.min(lowestWinCostSoFar,
            findLowestCost(playerWithSpellApplied, bosWithSpellApplied, spells, lowestWinCostSoFar, costSoFar + spells[spellName].Cost));
    }
    
    return lowestWinCostSoFar;
}

function copyCharacter(character) {
    var copy = {};
    for (var propertyName in character) {
        copy[propertyName] = character[propertyName];
    }
    return copy;
}

function applySpell(player, boss, spellName, spells) {
    player.Mana -= spells[spellName].Cost;
    
    switch (spellName) {
        case 'Missile':
            boss.HitPoints -= spells[spellName].Damage;
        break;
        case 'Drain':
            boss.HitPoints -= spells[spellName].Damage;
            player.HitPoints += spells[spellName].Healing;
        break;
        case 'Shield':
            player.Armor = spells[spellName].Armor;
            player.ShieldTimer = spells[spellName].Duration;
        break;
        case 'Poison':
            boss.PoisonTimer = spells[spellName].Duration;
        break;
        case 'Recharge':
            player.RechargeTimer = spells[spellName].Duration;
        break;
    }
}

function applyBossTurn(player, boss) {
    player.HitPoints -= (boss.Damage - player.Armor);
}

function applyLingeringAffects(player, boss) {
    if (player.ShieldTimer === 1) {
        player.Armor = 0;
    }
    if (player.RechargeTimer > 0) {
        player.Mana += 101;
    }
    if (boss.PoisonTimer > 0) {
        boss.HitPoints -= 3;
    }
    
    player.ShieldTimer--;
    player.RechargeTimer--;
    boss.PoisonTimer--;
}

function selectSpell(player, boss, triedSpells) {
    if (!('Missile' in triedSpells)) {
        triedSpells['Missile'] = 1
        return 'Missile';
    }
    if (!('Drain' in triedSpells)) {
        triedSpells['Drain'] = 1
        return 'Drain';
    }
    if (!('Shield' in triedSpells)) {
        triedSpells['Shield'] = 1;
        if (player.ShieldTimer <= 0) {
            return 'Shield';
        }
    }
    if (!('Poison' in triedSpells)) {
        triedSpells['Poison'] = 1;
        if (boss.PoisonTimer <= 0) {
            return 'Poison';
        }
    }
    if (!('Recharge' in triedSpells)) {
        triedSpells['Recharge'] = 1;
        if (player.RechargeTimer <= 0) {
            return 'Recharge';
        }
    }
}
