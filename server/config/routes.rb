Rails.application.routes.draw do
  resources :pins, only: [:index, :create, :destroy]
  # get 'sessions/create'
  # get 'sessions/destroy'
  resources :users, only: [:index, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
# get '/hello', to: 'application#hello_world'

get '/signup', to: "users#create"
get '/me', to: "users#show"
post "/login", to: "sessions#create"
delete "/logout", to: "sessions#destroy"

get '/getpin', to: "pins#index"
post '/makepin', to: "pins#create"
delete '/destroypin', to: "pins#destroy"

end
