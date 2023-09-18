package de.neuefische.backend;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/fplayer")
@AllArgsConstructor
public class FavouriteplayerController {
    public final FavouritePlayerService service;

    @GetMapping("/listofallplayer")
    public List<Favouriteplayer> getAllFavouritePlayer(){
        return service.getAllFavouritePlayer();
    }

    @GetMapping("/{id}")
    public Favouriteplayer getFavouritePlayerById(@PathVariable String id) throws PlayerDoesNotExistException{
        return service.getFavouritePlayerById(id);
    }

    @GetMapping("/name/{name}")
    public Favouriteplayer getFavouritePlayerByName(@PathVariable String name) throws PlayerDoesNotExistException{
        return service.getFavouritePlayerByName(name);
    }

    @PostMapping("/{id}")
    public void addFavouritePlayer(@RequestBody Favouriteplayer favouriteplayer) throws PlayerAlreadyExistException{
        service.addFavouritePlayer(favouriteplayer);
    }

    @DeleteMapping("/{id}")
    public void deleteFavouritePlayerById(@PathVariable String id) throws PlayerDoesNotExistException{
        service.deleteFavouritePlayerById(id);
    }

    @PutMapping("/{id}")
    public void updateFavouritePlayerById(@PathVariable String id, @RequestBody Favouriteplayer favouriteplayer) throws PlayerDoesNotExistException{
        service.updateFavouritePlayerById(id, favouriteplayer);
    }

}
