package com.example.RacingGame;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class LoginRepository {

    @Autowired
    public DataSource dataSource;

    public boolean addUser(String name, String email, String username, String password) {
        boolean status = false;

        try {
            Connection conn = dataSource.getConnection();
            PreparedStatement ps = conn.prepareStatement("INSERT INTO users VALUES(?,?,?,?)", new String[] {"id"});
            ps.setString(1,name);
            ps.setString(2,email);
            ps.setString(3,username);
            ps.setString(4,password);

            PreparedStatement ps1 = conn.prepareStatement("SELECT username, email FROM users WHERE username = ? OR email = ?");
            ps1.setString(1, username);
            ps1.setString(2, email);
            ResultSet resultSet = ps1.executeQuery();

            if(!resultSet.next()) {
                ps.executeUpdate();
                status = true;
                return status;
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return status;
    }

    public String[] getUser(String username, String password) {
        String status = "false";
        String name = "";
        String[] result = new String[2];

        try {
            Connection conn = dataSource.getConnection();
            PreparedStatement ps = conn.prepareStatement("SELECT name, username, password FROM users WHERE name = ? OR username = ? AND password = ?");
            ps.setString(1, name);
            ps.setString(2, username);
            ps.setString(3, password);
            ResultSet resultSet = ps.executeQuery();

            if (resultSet.next()) {
                status = "true";
                result[0] = status;
                result[1] = resultSet.getString("name");
                return result;
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        result[0] = status;
        return result;
    }
}