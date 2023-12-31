package de.neuefische.backend;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MongoDbRepository extends MongoRepository<Player, String> {
 Player findPlayerByName(String name);
 boolean existsPlayerByName(String name);
}
