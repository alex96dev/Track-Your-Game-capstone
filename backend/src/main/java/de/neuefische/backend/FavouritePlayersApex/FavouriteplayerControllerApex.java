package de.neuefische.backend.FavouritePlayersApex;

import de.neuefische.backend.PlayerAlreadyExistException;
import de.neuefische.backend.PlayerDoesNotExistException;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/fplayerapex")
@AllArgsConstructor
public class FavouriteplayerControllerApex {
    public final FavouritePlayerServiceApex service;

    @GetMapping("/listofallplayer")
    public List<FavouritePlayerApex> getAllFavouritePlayerApex(){
        return service.getAllFavouritePlayerApex();
    }

    @GetMapping("/{id}")
    public FavouritePlayerApex getFavouritePlayerApexById(@PathVariable String id) throws PlayerDoesNotExistException {
        return service.getFavouritePlayerApexById(id);
    }

    @GetMapping("/name/{name}")
    public FavouritePlayerApex getFavouritePlayerApexByName(@PathVariable String name) throws PlayerDoesNotExistException{
        return service.getFavouritePlayerApexByName(name);
    }

    @PostMapping("/{id}")
    public void addFavouritePlayerApex(@RequestBody FavouritePlayerApex favouriteplayerapex) throws PlayerAlreadyExistException {
        service.addFavouritePlayerApex(favouriteplayerapex);
    }

    @DeleteMapping("/{id}")
    public void deleteFavouritePlayerApexById(@PathVariable String id) throws PlayerDoesNotExistException{
        service.deleteFavouritePlayerApexById(id);
    }

    @PutMapping("/{id}")
    public void updateFavouritePlayerApexById(@PathVariable String id, @RequestBody FavouritePlayerApex favouriteplayerapex) throws PlayerDoesNotExistException{
        service.updateFavouritePlayerApexById(id, favouriteplayerapex);
    }

}
