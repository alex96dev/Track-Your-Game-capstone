package de.neuefische.backend;

public class PlayerDoesNotExistException extends Exception{

    public PlayerDoesNotExistException(String message) {
        super(message);
    }

    public PlayerDoesNotExistException(String message, Throwable cause) {
        super(message, cause);
    }
}
