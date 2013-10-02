NewsReader.Views.FeedShow = Backbone.View.extend({
  events: {
    "click a#refresh": "refresh"
  },

  render: function() {
    var that = this;

    var renderedContent = JST["feeds/show"]({
      feed: that.model
    })

    entriesList = new NewsReader.Views.EntriesList({
      collection: that.model.entries
    })

    renderedEntries = entriesList.render().$el

    that.$el.html(renderedContent);
    that.$el.append(renderedEntries);
    return that;
  },

  refresh: function(event) {
    event.preventDefault();
    var that = this;

    this.model.entries.fetch({
      success: function() {
        that.render();
      }
    })
  }
})