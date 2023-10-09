package de.neuefische.backend.FavouritePlayersSplitgate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Document
@Data
public class FavouritePlayerSplitgate {
    String id;
    String name;
}
