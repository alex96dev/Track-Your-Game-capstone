package de.neuefische.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor


public class MongoUserService implements UserDetailsService {

    private final MongoUserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        MongoUser optionalMongoUser = repository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return new User(optionalMongoUser.getUsername(), optionalMongoUser.getPassword(), List.of());
    }

    public MongoUser saveUser(MongoUser user) {
        if (repository.findByUsername(user.getUsername()).equals(user.getUsername())){
            throw new IllegalArgumentException("Username already taken");
        }
        PasswordEncoder encoder = Argon2PasswordEncoder.defaultsForSpringSecurity_v5_8();
        repository.save(user.withPassword(encoder.encode(user.getPassword())));
        return user;
    }

}