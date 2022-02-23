Rails.application.routes.draw do
  # get 'sessions/create'
  # get 'sessions/destroy'
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
# get '/hello', to: 'application#hello_world'

get '/signup', to: "users#create"
get '/me', to: "users#show"
post "/login", to: "sessions#create"
delete "/logout", to: "sessions#destroy"
end
