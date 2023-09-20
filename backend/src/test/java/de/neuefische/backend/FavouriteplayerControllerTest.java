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

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;

@SpringBootTest
@AutoConfigureMockMvc
class FavouriteplayerControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private MongoDbRepository2 mongoDbRepository2;

    @Test
    void getAllFavouritePlayer_ShouldReturnEmptyList_whenRepositoryIsEmpty() throws Exception{
        mvc.perform(MockMvcRequestBuilders.get("/api/fplayer/listofallplayer"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("[]"));
    }

    @DirtiesContext
    @Test
    void getFavouritePlayerById_ShouldReturnPlayer() throws Exception{
        Favouriteplayer favouriteplayer = new Favouriteplayer("1", "alex");
        mongoDbRepository2.save(favouriteplayer);

        mvc.perform(MockMvcRequestBuilders.get("/api/fplayer/1"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("""
                        {
                         "id": "1",
                         "name": "alex"
                        }
                        """
                ));
    }

    @Test
    void getFavouritePlayerByName_ShouldReturnPlayer() throws Exception{
        Favouriteplayer favouriteplayer = new Favouriteplayer("1", "alex");
        mongoDbRepository2.save(favouriteplayer);

        mvc.perform(MockMvcRequestBuilders.get("/api/fplayer/name/alex"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("""
                        {
                         "id": "1",
                         "name": "alex"
                        }
                        """
                ));
    }

    @DirtiesContext
    @Test
    @WithMockUser(username = "a", password = "a")
    void addFavouritePlayer_ShouldReturn200_WhenPlayerWasAddedSuccessfully() throws Exception{
        mvc.perform(MockMvcRequestBuilders.post("/api/fplayer/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                         {
                                          "id": "1",
                                          "name": "alex"
                                          }
                                        """
                        )
                        .with(csrf()))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @DirtiesContext
    @Test
    @WithMockUser(username = "a", password = "a")
    void deleteFavouritePlayerById() throws Exception{
        Favouriteplayer favouriteplayer = new Favouriteplayer("1", "alex");
        mongoDbRepository2.save(favouriteplayer);

        mvc.perform(MockMvcRequestBuilders.delete("/api/fplayer/1")
                        .with(csrf()))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @DirtiesContext
    @Test
    @WithMockUser(username = "a", password = "a")
    void updateFavouritePlayerById_ShouldReturn200_WhenPlayerWasUpdatedSuccessfullyByRank() throws Exception{
        Favouriteplayer favouriteplayer = new Favouriteplayer("1", "alex");
        mongoDbRepository2.save(favouriteplayer);

        mvc.perform(MockMvcRequestBuilders.put("/api/fplayer/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(
                                """
                                         {
                                          "id": "1",
                                          "name": "alex"
                                          }
                                        """
                        )
                        .with(csrf()))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}