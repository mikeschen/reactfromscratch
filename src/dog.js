export default class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    return `Wah, I am ${this.name}`;
  }
}

module.exports = Dog;
