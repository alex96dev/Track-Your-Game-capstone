package de.neuefische.backend.FavouritePlayersCSGO;

import de.neuefische.backend.PlayerAlreadyExistException;
import de.neuefische.backend.PlayerDoesNotExistException;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/fplayercsgo")
@AllArgsConstructor
public class FavouritePlayerControllerCSGO {
    public final FavouritePlayerServiceCSGO service;

    @GetMapping("/listofallplayer")
    public List<FavouritePlayerCSGO> getAllFavouritePlayerCSGO(){
        return service.getAllFavouritePlayerCSGO();
    }

    @GetMapping("/{id}")
    public FavouritePlayerCSGO getFavouritePlayerCSGOById(@PathVariable String id) throws PlayerDoesNotExistException {
        return service.getFavouritePlayerCSGOById(id);
    }

    @GetMapping("/name/{name}")
    public FavouritePlayerCSGO getFavouritePlayerCSGOByName(@PathVariable String name) throws PlayerDoesNotExistException{
        return service.getFavouritePlayerCSGOByName(name);
    }

    @PostMapping("/{id}")
    public void addFavouritePlayerCSGO(@RequestBody FavouritePlayerCSGO favouriteplayercsgo) throws PlayerAlreadyExistException {
        service.addFavouritePlayerCSGO(favouriteplayercsgo);
    }

    @DeleteMapping("/{id}")
    public void deleteFavouritePlayerCSGOById(@PathVariable String id) throws PlayerDoesNotExistException{
        service.deleteFavouritePlayerCSGOById(id);
    }

    @PutMapping("/{id}")
    public void updateFavouritePlayerCSGOById(@PathVariable String id, @RequestBody FavouritePlayerCSGO favouriteplayercsgo) throws PlayerDoesNotExistException{
        service.updateFavouritePlayerCSGOById(id, favouriteplayercsgo);
    }

}
