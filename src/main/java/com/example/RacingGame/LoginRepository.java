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

    boolean status = false;

    @Autowired
    public DataSource dataSource;


    public boolean addUser(String email, String username, String password) {
        Connection conn = null;
        try {
            conn = dataSource.getConnection();
            PreparedStatement ps = conn.prepareStatement("INSERT INTO users VALUES(?,?,?)", new String[] {"id"});
            ps.setString(1,email);
            ps.setString(2,username);
            ps.setString(3,password);

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
        }finally {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return status;
    }

    public int getID(String username){

        Connection conn=null;
        int id= 0;

        try {
            conn = dataSource.getConnection();
            PreparedStatement ps = conn.prepareStatement("SELECT userID FROM users WHERE username = ?");
            ps.setString(1, username);
            ResultSet resultSet = ps.executeQuery();

            if (resultSet.next()) {
                id = resultSet.getInt("userID");

            }

        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return id;
    }


    public boolean getUser(String username, String password) {

        Connection conn=null;

        try {
            conn = dataSource.getConnection();
            PreparedStatement ps = conn.prepareStatement("SELECT username, password FROM users WHERE username = ? AND password = ?");
            ps.setString(1, username);
            ps.setString(2, password);
            ResultSet resultSet = ps.executeQuery();

            if (resultSet.next()) {
                status = true;
                return status;

            }

        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return status;
    }
}