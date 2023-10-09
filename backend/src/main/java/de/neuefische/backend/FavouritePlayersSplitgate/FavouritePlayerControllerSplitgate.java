package de.neuefische.backend.FavouritePlayersSplitgate;


import de.neuefische.backend.FavouritePlayersCSGO.FavouritePlayerCSGO;
import de.neuefische.backend.FavouritePlayersCSGO.FavouritePlayerServiceCSGO;
import de.neuefische.backend.PlayerAlreadyExistException;
import de.neuefische.backend.PlayerDoesNotExistException;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/fplayerspligate")
@AllArgsConstructor
public class FavouritePlayerControllerSplitgate {
    public final FavouritePlayerServiceSplitgate service;

    @GetMapping("/listofallplayer")
    public List<FavouritePlayerSplitgate> getAllFavouritePlayerCSGO(){
        return service.getAllFavouritePlayerSplitgate();
    }

    @GetMapping("/{id}")
    public FavouritePlayerSplitgate getFavouritePlayerSplitgateById(@PathVariable String id) throws PlayerDoesNotExistException {
        return service.getFavouritePlayerSplitgateById(id);
    }

    @GetMapping("/name/{name}")
    public FavouritePlayerSplitgate getFavouritePlayerSplitgateByName(@PathVariable String name) throws PlayerDoesNotExistException{
        return service.getFavouritePlayerSplitgateByName(name);
    }

    @PostMapping("/{id}")
    public void addFavouritePlayerSplitgate(@RequestBody FavouritePlayerSplitgate favouriteplayersplitgate) throws PlayerAlreadyExistException {
        service.addFavouritePlayerSplitgate(favouriteplayersplitgate);
    }

    @DeleteMapping("/{id}")
    public void deleteFavouritePlayerSplitgateById(@PathVariable String id) throws PlayerDoesNotExistException{
        service.deleteFavouritePlayerSplitgateById(id);
    }

    @PutMapping("/{id}")
    public void updateFavouritePlayerSplitgateById(@PathVariable String id, @RequestBody FavouritePlayerSplitgate favouriteplayersplitgate) throws PlayerDoesNotExistException{
        service.updateFavouritePlayerSplitgateById(id, favouriteplayersplitgate);
    }

}
