class SessionsController < ApplicationController
    
    def new
        
    end

    def create
        user = User.find_by(username: params[:session][:username])
        if user && user.authenticate(params[:session][:password])
            session[:user_id] = user.id
            flash[:success] = "#{user.username} successfully logged in"
            redirect_to root_path
        else
            flash.now[:error] = "Username or password is incorrect"
            render 'new'
        end
    end

    def destroy
        session[:user_id] = nil
        flash[:success] = "Successfully logged out"
        redirect_to login_path
    end
end