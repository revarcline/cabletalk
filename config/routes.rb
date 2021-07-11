Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  get '/', to 'pages#index' 
  resources :messages, only: %i[create]
end
