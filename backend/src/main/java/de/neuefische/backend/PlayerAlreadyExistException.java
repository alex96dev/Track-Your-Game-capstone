package de.neuefische.backend;

public class PlayerAlreadyExistException extends Exception{
    public PlayerAlreadyExistException(String message) {
        super(message);
    }

    public PlayerAlreadyExistException(String message, Throwable cause) {
        super(message, cause);
    }
}
