class Pin < ApplicationRecord
    belongs_to :user

    validates :longitude, presence: true
    validates :latitude, presence: true
    validates :description, presence: true
    validates :icon, presence: true
end
