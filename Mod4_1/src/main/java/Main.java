import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Main {
    public static void main(String[] args) {
        try (SessionFactory factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Student.class)
                .buildSessionFactory();
             Session session = factory.openSession()) {

            session.beginTransaction();
            Student studentToInsert = new Student(4, "Ravi", "Java");
            session.persist(studentToInsert);
            session.getTransaction().commit();

            System.out.println("Student inserted successfully!");

            Student student = session.get(Student.class, 4);
            if (student == null) {
                System.out.println("Student not found.");
                return;
            }

            System.out.println("Student Details");
            System.out.println("ID: " + student.getId());
            System.out.println("Name: " + student.getName());
            System.out.println("Course: " + student.getCourse());
        }
    }
}
