package de.neuefische.backend;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MongoDbRepository2 extends MongoRepository<Favouriteplayer, String> {
    boolean existsFavouriteplayerByName(String name);
    Favouriteplayer findFavouriteplayerByName(String name);
}
