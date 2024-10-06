class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends IdolModel {
  dance() {
    return `${this.name}이 춤을 춥니다.`;
  }
}

class MaleIdolModel extends IdolModel {
  sing() {
    return `${this.name}이 춤을 춥니다.`;
  }
}

const yuJin = new FemaleIdolModel("안유진", 2003);

console.log(yuJin.dance());

const jiMin = new MaleIdolModel("지민", 1995);

console.log(jimin.sing());
