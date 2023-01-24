const aaa = new Date();
console.log(aaa.getFullYear());
console.log(aaa.getMonth() + 1);

class Monster {
  power = 10;
  name = '';
  constructor(name) {
    this.name = name;
  }
  
  attack = () => {
    console.log(this.name + ' 공격');
  }
  run = () => {
    console.log(this.name + ' 도망');
  }
}

class GroundMonster extends Monster {
  constructor (name) {
    super('ground ' + name);
  }
  attack = () => {
    console.log(this.name + ' 뛰어서 공격');
  }
  run = () => {
    console.log(this.name + ' 뛰어서 도망');
  }
}

class SkyMonster extends Monster {
  constructor (name) {
    super('sky ' + name);
  }
  attack = () => {
    console.log(this.name + ' 날아서 공격');
  }
  run = () => {
    console.log(this.name + ' 날아서 도망');
  }
}

const mon1 = new GroundMonster('mon1');
const mon2 = new SkyMonster('mon2');
mon1.attack();
mon2.run();