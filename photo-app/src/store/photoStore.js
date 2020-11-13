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
  selectedAlbum = null;

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

  @observable
  loadingState = 'SUCCESS';

  @action
  getPhotos = (album) => {
    const { id, title } = album;
    this.loadingState = 'LOADING';
    API.get(`/albums/${id}/photos`)
    .then((res) => {
      console.log("Photos",res.data);
      if (res.data) {
        runInAction(() => {
          this.selectedAlbum = title;
          this.photos = res.data;
        })
        this.loadingState = 'SUCCESS';
      }
    })
  }
}

const photoStore = new PhotoStore();
export default photoStore;