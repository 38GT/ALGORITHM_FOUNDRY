package java_algorithm;
import java.util.*;

public class Binary_search {
    public int listSearch(List<Integer> arr, int target) {
        Collections.sort(arr);
        return Collections.binarySearch(arr, target);
    }

    public int listSearchWithWhile(List<Integer> arr, int target) {
        int start = 0;
        int end = arr.size() - 1;

        while (start <= end) {
            System.out.println("start:" + start + " end:" + end);
            int mid = (start + end) / 2;
            System.out.println("mid:" + mid);
            if (arr.get(mid) == target) {
                return mid;
            }else if (arr.get(mid) < target) {
                start = mid + 1;
                System.out.println(start);
            }else{
                end = mid - 1;
            }
        }
        return -1;
    }


//    public int listSearchWithRecursive(List<Integer> arr, int target) {}

    public Integer arraySearch(int[] arr, int target) {
        Arrays.sort(arr);
        return Arrays.binarySearch(arr, target);
    }
}
