package de.neuefische.backend.FavouritePlayersCSGO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Document
@Data
public class FavouritePlayerCSGO {
    String id;
    String name;
}
