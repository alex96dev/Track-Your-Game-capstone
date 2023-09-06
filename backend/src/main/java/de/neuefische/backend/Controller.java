package de.neuefische.backend;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@AllArgsConstructor

public class Controller {

    public final Service service;

    @GetMapping("/listofallplayer")
    public List<Player> getAllPlayer(){
        return service.getAllPlayer();
    }

    @GetMapping("/{id}")
    public Player getPlayerById(@PathVariable String id) throws PlayerDoesNotExistException{
        return service.getPlayerById(id);
    }
    @GetMapping("/name/{name}")
    public Player getPlayerByName(@PathVariable String name) throws PlayerDoesNotExistException{
        return service.getPlayerByName(name);
    }

    @PostMapping("/{id}")
    public void addPlayer(@RequestBody Player player) throws PlayerAlreadyExistException{
        service.addPlayer(player);
    }

    @DeleteMapping("/{id}")
    public void deletePlayerById(@PathVariable String id) throws PlayerDoesNotExistException{
        service.deletePlayerById(id);
    }

    @PutMapping("/{id}")
    public void updatePlayerById(@PathVariable String id, @RequestBody Player player) throws PlayerDoesNotExistException{
        service.updatePlayerById(id, player);
    }

}
