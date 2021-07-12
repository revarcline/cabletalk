class Message < ApplicationRecord
  include ActiveModel::Serializers::JSON
  attr_accessor
  belongs_to :user

  def username
    user.username
  end

  def chat_json
    as_json(methods: :username)
  end
end
