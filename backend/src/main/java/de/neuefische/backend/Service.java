package de.neuefische.backend;

import lombok.AllArgsConstructor;

import java.util.List;

@org.springframework.stereotype.Service
@AllArgsConstructor

public class Service {

    private MongoDbRepository repository;

    public void addPlayer(Player player) throws PlayerAlreadyExistException {

        boolean containsPlayer = repository.existsById(player.getId());
        if (containsPlayer) {
            throw new PlayerAlreadyExistException("Player already exist");
        } else {
            repository.save(player);
        }
    }

    public Player getPlayerById(String id) throws PlayerDoesNotExistException {
        if (!repository.existsById(id)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        return repository.findById(id).orElse(null);
    }
    public Player getPlayerByName(String name) throws PlayerDoesNotExistException {
        if (!repository.existsPlayerByName(name)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        return repository.findPlayerByName(name);
    }

    public List<Player> getAllPlayer() {
        List<Player> listOfAllPlayer = repository.findAll();
        return listOfAllPlayer;
    }

    public void deletePlayerById(String id) throws PlayerDoesNotExistException{
        if(!repository.existsById(id)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        repository.deleteById(id);
    }

    public void updatePlayerById(String id, Player player) throws PlayerDoesNotExistException{
        if(!repository.existsById(id)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        repository.save(player);
    }

}
