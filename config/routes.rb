Rails.application.routes.draw do
  resources :users
  mount ActionCable.server => '/cable'
  get '/', to: 'pages#index'
  resources :messages, only: %i[create]
end
