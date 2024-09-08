package com.abc_restaurant.back_end.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not found the user with id "+ id);
    }
    public UserNotFoundException(String email){
        super("Could not found the user with email "+ email);
    }
}
