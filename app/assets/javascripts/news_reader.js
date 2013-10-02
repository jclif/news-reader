window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, feedsData) {
    var feeds = new NewsReader.Collections.Feeds(feedsData)

    new NewsReader.Routers.FeedsRouter($rootEl, feeds)
    Backbone.history.start();
  }
};

$(document).ready(function(){
  var feedsData = JSON.parse($('#bootstrapped_feeds_json').html());
  NewsReader.initialize($('body'), feedsData);
});
