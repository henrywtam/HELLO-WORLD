class BartController < ApplicationController
  include BartHelper

  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  def index
  end

  def new
    erb :trip_planner
  end

  def create
    trip = {}
    origin = params.values[0]
    destination = params.values[1]
    time = params.values[2]

    options = yourDetailedTrip(origin, destination, time)
    p '*' * 500


    ugly = "Board your train at #{options[0][0]} at #{options[0][3]} headed towards #{options[3]}, and you will arrive at #{options[0][1]} at #{options[0][5]}. Bring $#{options[0][2]} for fare."

    p ugly
    p '-' * 500

    render json: ugly

    # render json: '_trip_info'
    # render json: trip
  end

  private
    def trip_params
      params.require(:trip).permit(:origin, :destination, :time)
    end

end
