export default class UserInfo {
  constructor(config) {
    this._name = document.querySelector(config.profileNameSelector);
    this._about = document.querySelector(config.profileAboutSelector);

  };

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
    };
  };

  setUserInfo(data) {
    this._name.textContent = data.nameProfile;
    this._about.textContent = data.aboutProfile;
  };
};
