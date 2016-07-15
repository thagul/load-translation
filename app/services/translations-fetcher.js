import Ember from 'ember';

const { inject } = Ember;

export default Ember.Service.extend({
  ajax: inject.service(),
  i18n: inject.service(),

  fetch(lang) {
    let url = "http://" + window.location.host + "/i18n/" + lang + ".json";
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.get("ajax").request(url, {
        type: "GET"
      }).then((json) => {
        this.get('i18n').addTranslations(lang, json);
        resolve(lang);
      }, (params) => {
        console.log(params);
        reject();
      });
    });
  }
});
