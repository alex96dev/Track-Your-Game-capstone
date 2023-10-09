package de.neuefische.backend.CSGO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PlatformInfo {

    String platformSlug;
    String platformUserIdentifier;
    String avatarUrl;

}
