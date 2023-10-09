package de.neuefische.backend.FavouritePlayersSplitgate;

import de.neuefische.backend.PlayerAlreadyExistException;
import de.neuefische.backend.PlayerDoesNotExistException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FavouritePlayerServiceSplitgate {

    MongoDbRepository4Splitgate repository4;

    public void addFavouritePlayerSplitgate(FavouritePlayerSplitgate favouriteplayersplitgate) throws PlayerAlreadyExistException {

        boolean containsFavouritePlayer = repository4.existsById(favouriteplayersplitgate.getId());
        if (containsFavouritePlayer) {
            throw new PlayerAlreadyExistException("Player already exist");
        } else {
            repository4.save(favouriteplayersplitgate);
        }
    }

    public FavouritePlayerSplitgate getFavouritePlayerSplitgateById(String id) throws PlayerDoesNotExistException {
        if (!repository4.existsById(id)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        return repository4.findById(id).orElse(null);
    }
    public FavouritePlayerSplitgate getFavouritePlayerSplitgateByName(String name) throws PlayerDoesNotExistException {
        if (!repository4.existsFavouritePlayerSplitgateByName(name)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        return repository4.findFavouritePlayerSplitgateByName(name);
    }

    public List<FavouritePlayerSplitgate> getAllFavouritePlayerSplitgate() {
        List<FavouritePlayerSplitgate> listOfAllPlayer = repository4.findAll();
        return listOfAllPlayer;
    }

    public void deleteFavouritePlayerSplitgateById(String id) throws PlayerDoesNotExistException{
        if(!repository4.existsById(id)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        repository4.deleteById(id);
    }

    public void updateFavouritePlayerSplitgateById(String id, FavouritePlayerSplitgate favouriteplayersplitgate) throws PlayerDoesNotExistException{
        if(!repository4.existsById(id)){
            throw new PlayerDoesNotExistException("Player does not exist");
        }
        repository4.save(favouriteplayersplitgate);
    }

}
