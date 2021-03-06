class PinsController < ApplicationController

    def index
    pins = Pin.all
    render json: pins, status: :ok
    end

    def create
        pin = Pin.new(pin_params)
        
    if pin.save
        render json: pin, status: :created
    else
        render json: { error: pin.errors.full_messages}, status: :unprocessable_entity
    end
end

    def destroy
        pin = Pin.find(params[:id])
        pin.destroy
        head :no_content
    end

    private
    def pin_params
        params.permit(:user_id, :longitude, :latitude, :description, :icon)
    end
end