class CreatePins < ActiveRecord::Migration[7.0]
  def change
    create_table :pins do |t|
      t.float :longitude
      t.float :latitude
      t.string :description
      t.string   :icon
      t.integer :user_id
      t.timestamps
    end
  end
end
