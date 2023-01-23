class UserBase {
    constructor(users) {
        this.users = users;
    };
    count() {
        return this.users.length;
    };
    getNames(){
        return this.users.map((user) => user.getName());
    };
    getIntroduction() {
        return this.users.map((user) => user.getIntroduction());
    };
};

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];

module.exports = UserBase;