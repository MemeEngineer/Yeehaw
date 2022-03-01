class PinsController < ApplicationController

    def index
    pins = Pin.all
    render json: pins, status: :ok
    end

    def create
        pin = Pin.create(pin_params)
    if pin.valid?
        render json: pin, status: :created
    else
        render json: { error: pin.errors.full_message}, status: :unprocessable_entity
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