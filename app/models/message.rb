class Message < ApplicationRecord
  include ActiveModel::Serializers::JSON
  belongs_to :user

  def username
    user.username
  end

  def chat_json
    as_json(methods: :username)
  end

  def self.all_chats
    all.map(&:chat_json)
  end
end
