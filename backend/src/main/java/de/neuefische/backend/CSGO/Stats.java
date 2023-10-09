package de.neuefische.backend.CSGO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Stats {

    TimePlayed timePlayed;
    Kills kills;
    Deaths deaths;
    Kd kd;
    Damage damage;
    Headshots headshots;
    Wins wins;
    MatchesPlayed matchesPlayed;

}
