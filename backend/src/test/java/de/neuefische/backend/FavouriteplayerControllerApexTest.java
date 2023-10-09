package de.neuefische.backend;

import de.neuefische.backend.FavouritePlayersApex.FavouritePlayerApex;
import de.neuefische.backend.FavouritePlayersApex.MongoDbRepository2;
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
class FavouritePlayerControllerApexTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private MongoDbRepository2 mongoDbRepository2;

    @Test
    void getAllFavouritePlayer_ShouldReturnEmptyList_whenRepositoryIsEmpty() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/api/fplayerapex/listofallplayer"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("[]"));
    }

    @DirtiesContext
    @Test
    void getFavouritePlayerById_ShouldReturnPlayer() throws Exception {
        FavouritePlayerApex favouriteplayerapex = new FavouritePlayerApex("1", "alex");
        mongoDbRepository2.save(favouriteplayerapex);

        mvc.perform(MockMvcRequestBuilders.get("/api/fplayerapex/1"))
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
    void getFavouritePlayerByName_ShouldReturnPlayer() throws Exception {
        FavouritePlayerApex favouriteplayer = new FavouritePlayerApex("1", "alex");
        mongoDbRepository2.save(favouriteplayer);

        mvc.perform(MockMvcRequestBuilders.get("/api/fplayerapex/name/alex"))
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
    void addFavouritePlayer_ShouldReturn200_WhenPlayerWasAddedSuccessfully() throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/api/fplayerapex/1")
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
    void deleteFavouritePlayerById() throws Exception {
        FavouritePlayerApex favouriteplayerapex = new FavouritePlayerApex("1", "alex");
        mongoDbRepository2.save(favouriteplayerapex);

        mvc.perform(MockMvcRequestBuilders.delete("/api/fplayerapex/1")
                        .with(csrf()))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @DirtiesContext
    @Test
    @WithMockUser(username = "a", password = "a")
    void updateFavouritePlayerById_ShouldReturn200_WhenPlayerWasUpdatedSuccessfullyByRank() throws Exception {
        FavouritePlayerApex favouriteplayerapex = new FavouritePlayerApex("1", "alex");
        mongoDbRepository2.save(favouriteplayerapex);

        mvc.perform(MockMvcRequestBuilders.put("/api/fplayerapex/1")
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