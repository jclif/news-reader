class EntriesController < ApplicationController
  def index
    feed = Feed.find(params[:feed_id])

    feed.reload if (Time.now - feed.updated_at).minutes > 2

    render :json => feed.entries
  end
end