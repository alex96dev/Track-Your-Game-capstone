package de.neuefische.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;


@SpringBootTest
@AutoConfigureMockMvc
class PlayerControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private MongoDbRepository mongoDbRepository;


    @Test
    void getAllPlayer_shouldReturnEmptyList_whenRepositoryIsEmpty() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/api/player/listofallplayer"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("[]"));
    }

    @DirtiesContext
    @Test
    void getPlayerById_ShouldReturnPlayer() throws Exception {
        Player player = new Player("1", "alex", "1", "304", "1", "1", "1", "1");
        mongoDbRepository.save(player);

        mvc.perform(MockMvcRequestBuilders.get("/api/player/1"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("""
                        {
                         "id": "1",
                         "name": "alex",
                         "rank": "1",
                         "rank_score": "304",
                         "level": "1",
                         "kills": "1",
                         "damage": "1",
                         "wins": "1"
                        }
                        """
                ));
    }

    @DirtiesContext
    @Test
    void getPlayerByName_ShouldReturnPlayer() throws Exception {
        Player player = new Player("1", "alex", "1", "304", "1", "1", "1", "1");
        mongoDbRepository.save(player);

        mvc.perform(MockMvcRequestBuilders.get("/api/player/name/alex"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("""
                        {
                         "id": "1",
                         "name": "alex",
                         "rank": "1",
                         "rank_score": "304",
                         "level": "1",
                         "kills": "1",
                         "damage": "1",
                         "wins": "1"
                        }
                        """
                ));
    }


    @Test
    void comparePlayer() throws Exception{
        mvc.perform(MockMvcRequestBuilders.get("/api/player/ApexLegendsComparePlayer/psn/Daltoosh"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("""
                        {
                         "data": {
                                    "platformInfo": {
                                                        "platformSlug": "psn",
                                                        "platformUserIdentifier": "Daltoosh",
                                                        "avatarUrl": "https://avatars.trackercdn.com/api/avatar/2/Daltoosh.png"
                                                    },
                                    "segments": [
                                    {},{},{},{},{},{},{},{},{},{},{},{}
                                    ]
                                }
                         }
                        """
                ));

    }

    @DirtiesContext
    @Test
    @WithMockUser(username = "a", password = "a")
    void addPlayer_ShouldReturn200_WhenPlayerWasAddedSuccessfully() throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/api/player/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                         {
                                          "id": "1",
                                          "name": "alex",
                                          "rank": "1",
                                          "rank_score": "304",
                                          "level": "1",
                                          "kills": "1",
                                          "damage": "1",
                                          "wins": "1"
                                          }
                                        """
                        )
                        .with(csrf()))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @DirtiesContext
    @Test
    @WithMockUser(username = "a", password = "a")
    void deletePlayerById_ShouldReturn200_WhenPlayerWasDeletedSuccessfully() throws Exception {
        Player player = new Player("1", "alex", "1", "304", "1", "1", "1", "1");
        mongoDbRepository.save(player);

        mvc.perform(MockMvcRequestBuilders.delete("/api/player/1")
                        .with(csrf()))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @DirtiesContext
    @Test
    @WithMockUser(username = "a", password = "a")
    void updatePlayerById_ShouldReturn200_WhenPlayerWasUpdatedSuccessfullyByRank() throws Exception {
        Player player = new Player("1", "alex", "1", "304", "1", "1", "1", "1");
        mongoDbRepository.save(player);

        mvc.perform(MockMvcRequestBuilders.put("/api/player/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                         {
                                          "id": "1",
                                          "name": "alex",
                                          "rank": "2",
                                          "rank_score": "304",
                                          "level": "1",
                                          "kills": "1",
                                          "damage": "1",
                                          "wins": "1"
                                          }
                                        """
                        )
                        .with(csrf()))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}