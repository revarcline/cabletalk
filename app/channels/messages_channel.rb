class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'messages'

    ActionCable.server.broadcast('messages', { messages: Message.all_chats })
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
