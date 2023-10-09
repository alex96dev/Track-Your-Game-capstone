package de.neuefische.backend;

import de.neuefische.backend.ApexLegends.ApexLegendsResponseComparePlayer;
import de.neuefische.backend.CSGO.CSGOResponseComparePlayer;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/player")
@AllArgsConstructor

public class PlayerController {

    public final PlayerService service;

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

    @GetMapping("/ApexLegendsComparePlayer/{platform}/{platformUserIdentifier}")
    public ApexLegendsResponseComparePlayer compareApexLegendsPlayer(@PathVariable String platform, @PathVariable String platformUserIdentifier){
        return service.compareApexLegendsPlayer(platform, platformUserIdentifier);
    }
    @GetMapping("/CSGOComparePlayer/{platform}/{platformUserIdentifier}")
    public CSGOResponseComparePlayer compareCSGOPlayer(@PathVariable String platform, @PathVariable String platformUserIdentifier){
        return service.compareCSGOPlayer(platform, platformUserIdentifier);
    }

    /*@GetMapping("/comparePlayer/{platform}/{platformUserIdentifier}")
    public ResponseComparePlayer comparePlayer(@PathVariable String platform, @PathVariable String platformUserIdentifier){
        return new ResponseComparePlayer(new Data(new PlatformInfo("x", "x", "x"), List.of(new Type(new Stats(new Level("x","x"), new Kills("x", "x"), new Damage("x", "x"), new MatchesPlayed("x", "x"))))));
    }*/

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
