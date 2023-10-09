package de.neuefische.backend.FavouritePlayersSplitgate;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MongoDbRepository4Splitgate extends MongoRepository<FavouritePlayerSplitgate, String> {
    boolean existsFavouritePlayerSplitgateByName(String name);
    FavouritePlayerSplitgate findFavouritePlayerSplitgateByName(String name);
}
