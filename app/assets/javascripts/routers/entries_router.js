NewsReader.Routers.EntriesRouter = Backbone.Router.extend({

  initialize: function($rootEl, entries) {
    this.$rootEl = $rootEl;
    this.entries = entries;
  },

  routes: {
    "": "index",
    "entries/:id": "show",
  },

  show: function(id) {
    var entry = this.entries.get(id)
    var showView = new NewsReader.Views.EntryShow({
      model: entry
    })

    this.$rootEl.html(showView.render().$el);
  }

})