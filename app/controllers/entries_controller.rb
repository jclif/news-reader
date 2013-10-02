class EntriesController < ApplicationController
  def index
    feed = Feed.find(params[:feed_id])

    Feed.reload if (Time.now - feed.updated_at).minutes > 2

    render :json => feed.entries
  end
end