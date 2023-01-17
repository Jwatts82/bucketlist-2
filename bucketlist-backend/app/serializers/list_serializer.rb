class ListSerializer < ActiveModel::Serializer
  attributes :id, :description, :completed
end
