Rails.application.routes.draw do
  resources :users
  mount ActionCable.server => '/cable'
  root 'pages#index'
  resources :messages, only: %i[create]
  resources :users
end
