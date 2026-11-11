package com.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class RetrieveData {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/college";
        String user = "root";
        String password = "root";

        String query = "SELECT id, name, email FROM students";

        try (Connection connection = DriverManager.getConnection(url, user, password);
             Statement statement = connection.createStatement();
             ResultSet results = statement.executeQuery(query)) {
            while (results.next()) {
                System.out.println(
                        results.getInt("id") + " "
                                + results.getString("name") + " "
                                + results.getString("email"));
            }
        } catch (SQLException exception) {
            System.err.println("Could not retrieve students from the college database.");
            System.err.println(exception.getMessage());
        }
    }
}
