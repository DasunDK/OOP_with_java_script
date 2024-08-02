class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    login() {
        console.log(this.email, 'just logged in');
        return this;
    }

    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }

    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter((u) => {
            return u.email !== user.email;
        });
        return this;
    }
}

const userOne = new User('dasun@gmail.com', 'Sagar');
const userTwo = new User('kumara@gmail.com', 'Sarika');

const admin = new Admin('dasun2@gmail.com', 'Sagar');

var users = [userOne, userTwo, admin];


admin.deleteUser(userOne).updateScore().logout().login();
console.log(users)