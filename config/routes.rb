Rails.application.routes.draw do
  resources :users
  mount ActionCable.server => '/cable'
  root 'pages#index'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :messages, only: %i[create]
  resources :users
end
