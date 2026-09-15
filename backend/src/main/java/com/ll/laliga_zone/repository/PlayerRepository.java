package com.ll.laliga_zone.repository;

import com.ll.laliga_zone.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long > {

    void deleteByName(String name);
    Optional<Player> findByName(String name);
    boolean existsByNameAndTeam(String name, String team);
}
