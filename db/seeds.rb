# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

books = Feed.find_or_create_by_url("http://www.huffingtonpost.com/feeds/verticals/books/index.xml")
latest = Feed.find_or_create_by_url('http://feeds.huffingtonpost.com/huffingtonpost/LatestNews')
