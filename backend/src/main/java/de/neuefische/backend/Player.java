package de.neuefische.backend;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
@AllArgsConstructor
@NoArgsConstructor
@Document
@Data

public class Player {
    String id;
    String name;
    String rank;
    String rank_score;
    String level;
    String kills;
    String damage;
    String wins;
}
