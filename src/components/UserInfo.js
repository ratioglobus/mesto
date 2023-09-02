export default class UserInfo {
  constructor(CONFIG) {
    this._name = document.querySelector(CONFIG.profileNameSelector);
    this._about = document.querySelector(CONFIG.profileAboutSelector);

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
