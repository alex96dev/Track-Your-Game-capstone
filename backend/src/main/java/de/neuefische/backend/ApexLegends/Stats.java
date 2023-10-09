package de.neuefische.backend.ApexLegends;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Stats {

    Level level;
    Kills kills;

    Damage damage;

    MatchesPlayed matchesPlayed;

}
