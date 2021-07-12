class UsersController < ApplicationController
  def index
    # show all users
  end

  def show
    # user info
  end

  def create
    # sign up user
  end

  def update
    # change user info
  end

  def delete
    # bye bye
  end

  private

  def user_params
    params.require(:user).permit(%w[name email password password_confirmation])
  end
end
