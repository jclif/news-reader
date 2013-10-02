NewsReader.Models.Feed = Backbone.Model.extend({
  initialize: function () {
    var that = this

    this.entries = new NewsReader.Collections.Entries;
    this.entries.url = function() {
      return 'feeds/' + that.id + '/entries';
    }
  }
})