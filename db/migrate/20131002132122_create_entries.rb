class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :guid
      t.string :link
      t.string :title
      t.datetime :published_at
      t.integer :feed_id
      t.text :json

      t.timestamps
    end

    add_index :entries, :feed_id
    add_index :entries, :guid
  end
end