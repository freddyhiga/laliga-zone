package com.ll.laliga_zone.controller;

import com.ll.laliga_zone.model.Player;
import com.ll.laliga_zone.service.PlayerService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/players")
public class PlayerController {

    private final PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public List<Player> getPlayers(
            @RequestParam(required = false) String team,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String position,
            @RequestParam(required = false) String nation
    ) {
       if (team != null && position != null) {
           return playerService.getPlayersByTeamAndPosition(team, position);
       } else if (team != null) {
           return playerService.getPlayersFromTeam(team);
       } else if (name != null) {
           return playerService.getPlayersByName(name);
       } else if (position != null) {
           return playerService.getPlayersByPosition(position);
       } else if (nation != null) {
           return playerService.getPlayersByNation(nation);
       } else {
           return playerService.getPlayers();
       }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Player> getPlayerById(@PathVariable Long id) {
        Player player = playerService.getPlayerById(id);

        if (player == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(player);
    }

    @PostMapping
    public ResponseEntity<Player> addPlayer(@Valid @RequestBody Player player) {
        Player createdPlayer = playerService.addPlayer(player);

        return ResponseEntity.status(HttpStatus.CREATED).body(createdPlayer);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Player> updatePlayer(@PathVariable Long id, @Valid @RequestBody Player player) {
        Player updatedPlayer = playerService.updatePlayer(id, player);

        return ResponseEntity.ok(updatedPlayer);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlayer(@PathVariable Long id) {
        playerService.deletePlayer(id);

        return ResponseEntity.noContent().build();
    }
}
