class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:session][:username])
    if user&.authenticate(params[:session][:password])
      log_in_user
    else
      # send error
    end
  end

  def destroy
    log_out
  end
end
