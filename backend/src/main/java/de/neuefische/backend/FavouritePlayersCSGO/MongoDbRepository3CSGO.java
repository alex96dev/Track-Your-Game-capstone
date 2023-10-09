package de.neuefische.backend.FavouritePlayersCSGO;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoDbRepository3CSGO extends MongoRepository<FavouritePlayerCSGO, String> {
    boolean existsFavouritePlayerCSGOByName(String name);
    FavouritePlayerCSGO findFavouritePlayerCSGOByName(String name);
}
