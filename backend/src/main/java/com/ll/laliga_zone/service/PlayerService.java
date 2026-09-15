package com.ll.laliga_zone.service;

import com.ll.laliga_zone.exception.PlayerAlreadyExistsException;
import com.ll.laliga_zone.exception.PlayerNotFoundException;
import com.ll.laliga_zone.model.Player;
import com.ll.laliga_zone.repository.PlayerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {

    private final PlayerRepository playerRepository;

    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public List<Player> getPlayers() {
        return playerRepository.findAll();
    }

    public Player getPlayerById(Long id) {
        return playerRepository.findById(id)
                .orElseThrow(() -> new PlayerNotFoundException("Player not found with id: " + id));
    }

    public List<Player> getPlayersFromTeam(String teamName) {
        return playerRepository.findAll().stream()
                .filter(p -> teamName.equals(p.getTeam()))
                .toList();
    }

    public List<Player> getPlayersByName(String searchName) {
        return playerRepository.findAll().stream()
                .filter(p -> p.getName().toLowerCase().contains(searchName.toLowerCase()))
                .toList();
    }

    public List<Player> getPlayersByPosition(String searchPosition) {
        return playerRepository.findAll().stream()
                .filter(p -> p.getPosition().toLowerCase().equalsIgnoreCase(searchPosition.toLowerCase()))
                .toList();
    }

    public List<Player> getPlayersByNation(String searchNation) {
        return playerRepository.findAll().stream()
                .filter(p -> p.getNation().toLowerCase().contains(searchNation.toLowerCase()))
                .toList();
    }

    public List<Player> getPlayersByTeamAndPosition(String team, String position) {
        return playerRepository.findAll().stream()
                .filter(p -> team.equalsIgnoreCase(p.getTeam()) && position.equalsIgnoreCase(p.getPosition()))
                .toList();
    }

    public Player addPlayer(Player player) {

        if (playerRepository.existsByNameAndTeam(player.getName(), player.getTeam())) {
            throw new PlayerAlreadyExistsException("Player already exists");
        }

        return playerRepository.save(player);
    }

    public Player updatePlayer(Long id, Player updatedPlayer) {
        Player playerToUpdate = playerRepository.findById(id)
                .orElseThrow(() -> new PlayerNotFoundException("Player not found with id: " + id));

            playerToUpdate.setName(updatedPlayer.getName());
            playerToUpdate.setNation(updatedPlayer.getNation());
            playerToUpdate.setPosition(updatedPlayer.getPosition());
            playerToUpdate.setTeam(updatedPlayer.getTeam());

            playerToUpdate.setAge(updatedPlayer.getAge());
            playerToUpdate.setMatchesPlayed(updatedPlayer.getMatchesPlayed());
            playerToUpdate.setStarts(updatedPlayer.getStarts());
            playerToUpdate.setMinutes(updatedPlayer.getMinutes());
            playerToUpdate.setGoals(updatedPlayer.getGoals());
            playerToUpdate.setAssists(updatedPlayer.getAssists());
            playerToUpdate.setPenaltyGoals(updatedPlayer.getPenaltyGoals());
            playerToUpdate.setYellowCards(updatedPlayer.getYellowCards());
            playerToUpdate.setRedCards(updatedPlayer.getRedCards());

            playerToUpdate.setExpectedGoals(updatedPlayer.getExpectedGoals());
            playerToUpdate.setExpectedAssists(updatedPlayer.getExpectedAssists());

            return playerRepository.save(playerToUpdate);
    }

    public void deletePlayer(Long id) {

        if(!playerRepository.existsById(id)) {
            throw new PlayerNotFoundException("Player not found with id: " + id);
        }

        playerRepository.deleteById(id);
    }
}
