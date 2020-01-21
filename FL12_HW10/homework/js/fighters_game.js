function Fighter({ name, damage, hp, strength, agility }) {
  const totalHP = hp; 
  let winsNumb = 0, losNumb = 0;
    
  return {
    __proto__: this,
    getName: function() { 
      return name; 
    }, 
    getDamage: function() { 
      return damage; 
    }, 
    getStrength: function() {
      return strength;
    },
    getAgility: function() {
      return agility;
    },
    getHealth: function() {
      return hp
    },
    attack: defender => {
      const oneHundred = 100;
      const attackProbability = Math.random();
      const damResis =
        (defender.getStrength() + defender.getAgility()) / oneHundred;
     
      if (attackProbability > damResis) {
        defender.dealDamage(damage);
        console.log(`${name} carry outs ${damage} to ${defender.getName()}`);
      } else {
        console.log(`${name} attack has missed`);
      }
    },

    logCombatHistory: function() {
      console.log(`name: ${name}, wins: ${winsNumb}, losses: ${losNumb}`);
    },

    heal: healPoints => {
      const incHealth = hp + healPoints;
      hp = incHealth > totalHP ? totalHP : incHealth;
    },

    dealDamage: damagePoints => {
      const decHealth = hp - damagePoints;
      hp = decHealth < 0 ? 0 : decHealth;
    },

    addWin: function() {
      return winsNumb++;
    },
    addLoss: function() {
      return losNumb++;
    } 
  };
}

function battle(attacker, defender) {
  const loseFighter = deadFighter(attacker, defender);
  
  if (loseFighter) {
    console.log(`${loseFighter.getName()} is dead.`);
    return;
  }

  while (attacker.getHealth() > 0 && defender.getHealth() > 0) {
    attacker.attack(defender);
    [attacker, defender] = [defender, attacker]; 
  }

  const champion =
    attacker.getHealth() > defender.getHealth() ? attacker : defender;
 
  const fail =
    attacker.getHealth() < defender.getHealth() ? attacker : defender;
  champion.addWin();
  fail.addLoss();
  console.log(`${champion.getName()} is winner!`);

  function deadFighter(...fighters) {
    return fighters.find(fighter => fighter.getHealth() === 0);
  }
}
