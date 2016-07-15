import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  translationsFetcher: inject.service(),
  i18n: inject.service(),

  _setLanguage(val) {
    return this.get("translationsFetcher").fetch(val).then((lang) => {
      this.set('i18n.locale', lang);
    });
  },

  beforeModel() {
    return this._setLanguage("en");
  },

  actions: {
    changeLanguage(lang) {
      this._setLanguage(lang);
    }
  }
});
