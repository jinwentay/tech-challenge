import { action, runInAction, observable } from 'mobx';
import API from '../api';
import ls from 'local-storage';

class UserStore {
  constructor() {
    const currentUser = ls.get('account');
    if (currentUser) {
      this.account = currentUser;
    }
  }

  @observable
  account = {
    id: -1,
    username: '',
    name: ''
  }

  @observable
  state = 'SUCCESS';

  @action
  login = (data) => {
    this.state = 'LOADING';
    API.get(`users`)
    .then((res) => {
      const users = res.data;
      const user = users.find((person) => { console.log(person.username, data.username); return person.username === data.username });
      console.log(user);
      if (user) {
        const userData = {
          id: user.id,
          username: user.username,
          name: user.name
        };
        console.log(userData);
        ls.set('account', userData);
        runInAction(() => {
          this.account = userData;
          this.state = 'SUCCESS';
        })
      } else {
        this.state = 'ERROR';
      }
    })
  }

  @action
  logout = () => {
    console.log("LOGGING OUT");
    const userData = {
      id: -1,
      username: '',
      name: ''
    };
    this.account = userData;
    ls.set('account', userData);
    this.isLoggedIn = false;;
  }
}

const userStore = new UserStore();
export default userStore;