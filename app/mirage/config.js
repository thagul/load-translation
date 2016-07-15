
export default function() {

  this.get("/i18n/:lang", function() {
    return {
      "key1": "Hello",
      "key2": "World"
    };
  });
}