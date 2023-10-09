package de.neuefische.backend.FavouritePlayersApex;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Document
@Data

public class FavouritePlayerApex {
    String id;
    String name;
}
