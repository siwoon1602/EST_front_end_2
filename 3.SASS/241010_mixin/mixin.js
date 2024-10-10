// __proto__

// 자바스크립트의 믹스인
const sayHiMixin = {
  sayHi() {
    console.log("hi!");
  },
  sayBye() {
    console.log("bye!");
  },
};
const sayHiMixin2 = {
  sayHi2() {
    console.log("hi!!!!!!!!!!");
  },
  sayBye2() {
    console.log("bye!!!!!!!!!!!!!");
  },
};

class SuperUser {
  canWalk() {
    console.log("뚜벅뚜벅");
  }
}
class User extends SuperUser {
  constructor(name) {
    super();
    this.name = name;
  }

  canTalk() {
    console.log("블라블라");
  }
}

Object.assign(User.prototype, sayHiMixin);
Object.assign(User.prototype, sayHiMixin2);

const user = new User("윤슌");
