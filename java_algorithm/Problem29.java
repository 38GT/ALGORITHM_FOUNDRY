package java_algorithm;

import java.util.Set;
import java.util.List;
import java.util.Map;

public class Problem29 {
    private static class Course {
        public final String course;
        public final int occurrences;

        public Course(String course, int occurrences) {
            this.course = course;
            this.occurrences = occurrences;
        }
    }

    private void getCourses(char nextMenu, Set<String> selectedMenus, List<Set<String>> orderList, Map<Integer, List<Course>> courses) {
        orderList.stream()
                .filter(order -> order.containsAll(selectedMenus))
                .count();
    }
}
