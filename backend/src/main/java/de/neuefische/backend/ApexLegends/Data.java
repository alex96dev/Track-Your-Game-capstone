package de.neuefische.backend.ApexLegends;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@lombok.Data

public class Data {
    PlatformInfo platformInfo;
    List<Type> segments;
}
