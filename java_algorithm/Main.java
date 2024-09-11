package java_algorithm;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        int[] array = {1,4,6,7,8,10,13,17};
        List<Integer> list = new ArrayList<>(Arrays.asList(1,4,6,7,8,10,13,17));

        Binary_search binary_search = new Binary_search();

        int arrayResult = binary_search.arraySearch(array,13);
        int listResult = binary_search.listSearchWithWhile(list,13);

        System.out.println("arrayResult: " + arrayResult);
        System.out.println("listResult: " + listResult);

    }
}

