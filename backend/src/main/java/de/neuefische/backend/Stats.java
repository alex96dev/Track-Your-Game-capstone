package de.neuefische.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Stats {

    Level level;
    Kills kills;

    Damage damage;

    MatchesPlayed matchesPlayed;

}
