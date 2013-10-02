NewsReader.Views.FeedShow = Backbone.View.extend({

  render: function() {
    var that = this;

    var renderedContent = JST["feeds/show"]({
      feed: that.model
    })

    that.$el.html(renderedContent);
    return that;
  }
})