Rails.application.routes.draw do
  resources :users
  mount ActionCable.server => '/cable'
  root 'pages#index'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  resources :messages, only: %i[create]
  resources :users, only: %i[update destroy]
end
