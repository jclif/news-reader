NewsReader.Routers.FeedsRouter = Backbone.Router.extend({

  initialize: function($rootEl, feeds) {
    this.$rootEl = $rootEl;
    this.feeds = feeds;
  },

  routes: {
    "": "index",
    "feeds/:id": "show",
  },

  index: function() {
    var indexView = new NewsReader.Views.FeedsList({
      collection: this.feeds
    });

    this.$rootEl.html(indexView.render().$el);
  },

  show: function(id) {
    var that = this
    var feed = this.feeds.get(id)

    var showView = new NewsReader.Views.FeedShow({
      model: feed
    })

    that.$rootEl.html(showView.render().$el);
  }
})