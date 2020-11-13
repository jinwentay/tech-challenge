import { action, runInAction, observable } from 'mobx';
import API from '../api';
import ls from 'local-storage';

class PhotoStore {
  constructor() {
    const currentUser = ls.get('account');
    if (currentUser) {
      this.getAlbums(currentUser.id);
    }
  }

  @observable
  albums = [];

  @action
  getAlbums = (userId) => {
    API.get(`/albums?userId=${userId}`)
    .then((res) => {
      if (res.data) {
        runInAction(() => {
          this.albums = res.data;
        })
      }
    })
  }

  @observable
  photos = [];

  @action
  getPhotos = (albumId) => {
    API.get(`/albums/${albumId}/photos`)
    .then((res) => {
      if (res.data) {
        runInAction(() => {
          this.photos = res.data;
        })
      }
    })
  }
}

const photoStore = new PhotoStore();
export default photoStore;