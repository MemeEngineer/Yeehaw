class PinSerializer < ActiveModel::Serializer
  attributes :id, :longitude, :latitude, :description, :icon
end
