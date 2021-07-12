class MessageSerializer
  include JSONAPI::Serializer
  attributes :content

  attribute :post_date do |message|
    message.created_at.strftime('%c').to_s
  end

  attribute :username do |message|
    message.user.username
  end
end
