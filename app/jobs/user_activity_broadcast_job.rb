class UserActivityBroadcastJob < ApplicationJob
  queue_as :default

  def perform(*args)
    ActionCable.server.broadcast 'user_activity_channel', message: args
  end
end
