import { intercept } from 'mobx';
import API from '../../api';
import { UserStore } from '../userStore';

describe('UserStore', () => {
  let store;
  beforeEach(() => {
    jest.spyOn(API, 'get')
    store = new UserStore();
    store.account = {
      id: 1,
      username: 'user1',
      name: 'user1 lastname'
    }
  })

  describe('logout', () => {
    it('login', () => {
      const userData = {
        id: -1,
        username: '',
        name: ''
      };
      store.logout();
      expect(store.account).toEqual(userData);
    })
  })
})