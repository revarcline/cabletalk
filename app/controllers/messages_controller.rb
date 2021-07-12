class MessagesController < ApplicationController
  def create
    # hardcoding user til auth is done
    user = User.first

    Message.create(content: params[:message], user: user)
    ActionCable.server.broadcast('messages', { messages: Message.all })
  end
end
