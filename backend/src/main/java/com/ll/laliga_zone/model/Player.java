package com.ll.laliga_zone.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "player_stats")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    @NotBlank
    private String name;
    @NotBlank
    private String nation;
    @NotBlank
    private String position;
    @NotBlank
    private String team;

    @PositiveOrZero @NotNull
    private Integer age;
    @PositiveOrZero @NotNull
    private Integer matchesPlayed;
    @PositiveOrZero @NotNull
    private Integer starts;
    @PositiveOrZero @NotNull
    private Integer minutes;
    @PositiveOrZero @NotNull
    private Integer goals;
    @PositiveOrZero @NotNull
    private Integer assists;
    @PositiveOrZero @NotNull
    private Integer penaltyGoals;
    @PositiveOrZero @NotNull
    private Integer yellowCards;
    @PositiveOrZero @NotNull
    private Integer redCards;

    @PositiveOrZero @NotNull
    private Double expectedGoals;
    @PositiveOrZero @NotNull
    private Double expectedAssists;
}
