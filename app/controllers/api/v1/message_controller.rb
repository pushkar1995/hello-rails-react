class Api::V1::MessagesController < ApplicationController
    def index
        @message=Message.order('RANDOM()').first
        render json: {success: true, message: @message.content}
    end
end