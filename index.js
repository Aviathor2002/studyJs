const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        console.log(`Find - ${newPotion.name}`);
        console.log(
          `Error! Potion ${newPotion.name} is already in your inventory!`
        );
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
    // for (let i = 0; i < this.potions.length; i += 1) {
    //   const potion = this.potions[i];

    //   if (newPotion.name === potion.name) {
    //     console.log(`Find - ${newPotion.name}`);

    //     return `Error! Potion ${newPotion} is already in your inventory!`;
    //   }

    //   this.potions.push(newPotion);
    // }

    // if (this.potions.includes(newPotion)) {
    //   return `Error! Potion ${newPotion} is already in your inventory!`;
    // }

    // this.potions.push(newPotion);
  },

  removePotion(potionName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      const { name } = potions[i];

      if (potionName === name) {
        // console.log(`Find - ${potionName}`);
        // console.log(i);

        potions.splice(i, 1);
      }
    }
    // for (const potion of this.potions) {
    //   const potionIndex = this.potions.indexOf(potion);

    //   if (potionName === potion.name) {
    //     this.potions.splice(potionIndex, 1);
    //   }

    //   return potionIndex;
    // }

    // if (potionIndex === -1) {
    //   return `Potion ${potionName} is not in inventory!`;
    // }

    // this.potions.splice(potionIndex, 1);
  },
  updatePotionName(coldName, newName) {
    // for (const potion of this.potions) {
    //   if (potion.name === coldName) {
    //     potion.name = newName;
    //   }
    // }

    // for (let i = 0; i < this.potions.length; i += 1) {
    //   this.potions[i].name;

    //   if (this.potions[i].name === coldName) {
    //     console.log(`Find - ${coldName}`);
    //     console.log(i);
    //     this.potions[i].name = newName;
    //   }
    // }

    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      let { name } = potions[i];

      if (name === coldName) {
        console.log(`Find - ${coldName}`);
        console.log(i);
        name = newName;
      }
    }

    // const potionIndex = this.potions.indexOf(oldName);
    // if (potionIndex === -1) {
    //   return `Potion ${oldName} is not in inventory!`;
    // }
    // this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

console.log(atTheOldToad.getPotions());
atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
console.log(atTheOldToad.getPotions());
