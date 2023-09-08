export default class UserInfo {
  constructor(config) {
    this._name = document.querySelector(config.profileNameSelector);
    this._about = document.querySelector(config.profileAboutSelector);
    this._avatar = document.querySelector(config.profileAvatarSelector);
  };

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src,
    };
  };

  setUserInfo({ name, about, avatar }) {
    this._name.textContent = name;
    this._about.textContent = about;
    this._avatar.src = avatar;
  };

  setUserUrlAvatar(avatarUrl) {
    this._avatar.src = avatarUrl;
  };
};
