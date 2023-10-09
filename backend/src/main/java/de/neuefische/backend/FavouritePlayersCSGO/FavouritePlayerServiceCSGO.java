package de.neuefische.backend.FavouritePlayersCSGO;

import de.neuefische.backend.PlayerAlreadyExistException;
import de.neuefische.backend.PlayerDoesNotExistException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FavouritePlayerServiceCSGO {

    MongoDbRepository3CSGO repository3;

    public void addFavouritePlayerCSGO(FavouritePlayerCSGO favouriteplayercsgo) throws PlayerAlreadyExistException {

        boolean containsFavouritePlayer = repository3.existsById(favouriteplayercsgo.getId());
        if (containsFavouritePlayer) {
            throw new PlayerAlreadyExistException("Player already exist");
        } else {
            repository3.save(favouriteplayercsgo);
        }
    }

    public FavouritePlayerCSGO getFavouritePlayerCSGOById(String id) throws PlayerDoesNotExistException {
        if (!repository3.existsById(id)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        return repository3.findById(id).orElse(null);
    }
    public FavouritePlayerCSGO getFavouritePlayerCSGOByName(String name) throws PlayerDoesNotExistException {
        if (!repository3.existsFavouritePlayerCSGOByName(name)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        return repository3.findFavouritePlayerCSGOByName(name);
    }

    public List<FavouritePlayerCSGO> getAllFavouritePlayerCSGO() {
        List<FavouritePlayerCSGO> listOfAllPlayer = repository3.findAll();
        return listOfAllPlayer;
    }

    public void deleteFavouritePlayerCSGOById(String id) throws PlayerDoesNotExistException{
        if(!repository3.existsById(id)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        repository3.deleteById(id);
    }

    public void updateFavouritePlayerCSGOById(String id, FavouritePlayerCSGO favouriteplayercsgo) throws PlayerDoesNotExistException{
        if(!repository3.existsById(id)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        repository3.save(favouriteplayercsgo);
    }

}
