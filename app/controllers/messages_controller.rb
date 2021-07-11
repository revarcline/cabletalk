class MessagesController < ApplicationController
  def create
    Message.create(content: params[:message])
    ActionCable.server.broadcast('messages', { messages: Message.all })
  end
end
