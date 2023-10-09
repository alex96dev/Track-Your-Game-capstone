package de.neuefische.backend.FavouritePlayersApex;

import de.neuefische.backend.PlayerAlreadyExistException;
import de.neuefische.backend.PlayerDoesNotExistException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FavouritePlayerServiceApex {

    MongoDbRepository2 repository2;

    public void addFavouritePlayerApex(FavouritePlayerApex favouriteplayerapex) throws PlayerAlreadyExistException {

        boolean containsFavouritePlayer = repository2.existsById(favouriteplayerapex.getId());
        if (containsFavouritePlayer) {
            throw new PlayerAlreadyExistException("Player already exist");
        } else {
            repository2.save(favouriteplayerapex);
        }
    }

    public FavouritePlayerApex getFavouritePlayerApexById(String id) throws PlayerDoesNotExistException {
        if (!repository2.existsById(id)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        return repository2.findById(id).orElse(null);
    }
    public FavouritePlayerApex getFavouritePlayerApexByName(String name) throws PlayerDoesNotExistException {
        if (!repository2.existsFavouritePlayerApexByName(name)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        return repository2.findFavouritePlayerApexByName(name);
    }

    public List<FavouritePlayerApex> getAllFavouritePlayerApex() {
        List<FavouritePlayerApex> listOfAllPlayer = repository2.findAll();
        return listOfAllPlayer;
    }

    public void deleteFavouritePlayerApexById(String id) throws PlayerDoesNotExistException{
        if(!repository2.existsById(id)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        repository2.deleteById(id);
    }

    public void updateFavouritePlayerApexById(String id, FavouritePlayerApex favouriteplayerapex) throws PlayerDoesNotExistException{
        if(!repository2.existsById(id)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        repository2.save(favouriteplayerapex);
    }

}
