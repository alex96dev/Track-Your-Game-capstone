package de.neuefische.backend;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FavouritePlayerService {

    MongoDbRepository2 repository2;

    public void addFavouritePlayer(Favouriteplayer favouriteplayer) throws PlayerAlreadyExistException {

        boolean containsFavouritePlayer = repository2.existsById(favouriteplayer.getId());
        if (containsFavouritePlayer) {
            throw new PlayerAlreadyExistException("Player already exist");
        } else {
            repository2.save(favouriteplayer);
        }
    }

    public Favouriteplayer getFavouritePlayerById(String id) throws PlayerDoesNotExistException {
        if (!repository2.existsById(id)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        return repository2.findById(id).orElse(null);
    }
    public Favouriteplayer getFavouritePlayerByName(String name) throws PlayerDoesNotExistException {
        if (!repository2.existsFavouriteplayerByName(name)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        return repository2.findFavouriteplayerByName(name);
    }

    public List<Favouriteplayer> getAllFavouritePlayer() {
        List<Favouriteplayer> listOfAllPlayer = repository2.findAll();
        return listOfAllPlayer;
    }

    public void deleteFavouritePlayerById(String id) throws PlayerDoesNotExistException{
        if(!repository2.existsById(id)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        repository2.deleteById(id);
    }

    public void updateFavouritePlayerById(String id, Favouriteplayer favouriteplayer) throws PlayerDoesNotExistException{
        if(!repository2.existsById(id)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        repository2.save(favouriteplayer);
    }

}
