package de.neuefische.backend.FavouritePlayersApex;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MongoDbRepository2 extends MongoRepository<FavouritePlayerApex, String> {
    boolean existsFavouritePlayerApexByName(String name);
    FavouritePlayerApex findFavouritePlayerApexByName(String name);
}
