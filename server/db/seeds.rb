# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
u1=User.create(username: "bob", password:"123", email:"bobb@gmail.com")
u2=User.create(username: "peterp", password: "webdev", email:"peterp@gmail.com")
Pin.create(user_id: u1.id, longitude: -76.9310857, latitude:42.22368, description:"best deer spot", icon:"https://cdn-images-1.medium.com/max/800/1*0sKQ6aSWNyzlhXr3VpjubQ.png")
Pin.create(user_id: u1.id, longitude: -160.125633628, latitude:63.532979905, description:"best big game spot", icon:"https://cdn-images-1.medium.com/max/1200/1*-VXfpshznOJCgb90pFcmSA.png")
Pin.create(user_id: u1.id, longitude: -85.217805, latitude:35.727288, description:"best bird spot",icon:"https://cdn-images-1.medium.com/max/1200/1*sfWjTld683Ox4NcySVxtfA.png" )
Pin.create(user_id: u1.id, longitude: -76.85160308297012, latitude:42.282521629080135, description:"best fish spot", icon:"https://cdn-images-1.medium.com/max/1200/1*0IHgbmT-9k_z-V5ZN1qV6A.png" )