package com.example.RacingGame;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Component
public class ScoreRepository {

    @Autowired
    public DataSource dataSource;

    public void addHighscore(int id,int score) {

        try {
            Connection conn = dataSource.getConnection();
            PreparedStatement ps = conn.prepareStatement("INSERT INTO [statistics] VALUES(?,?, ?)");
            ps.setInt(1,id);
            ps.setInt(2,score);
            ps.setNull(3,1);
            ps.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }

    }
    public List <String> getHighscores(){

        List <String> scores = new ArrayList<>();
        try {
            Connection conn = dataSource.getConnection();
            PreparedStatement ps = conn.prepareStatement("SELECT TOP (3) dbo.users.username, dbo.[statistics].highscore FROM dbo.[statistics] INNER JOIN dbo.users ON dbo.[statistics].userID = dbo.users.userID ORDER BY dbo.[statistics].highscore DESC");

            ResultSet resultSet = ps.executeQuery();

            while(resultSet.next()){
                scores.add(resultSet.getString("username"));
                scores.add(resultSet.getString("highscore"));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return scores;
    }
}
