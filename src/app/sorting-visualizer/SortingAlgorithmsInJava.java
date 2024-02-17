class MergeSort {
    // Time Complextity :- O(nLogn)
    // Space Complexity :- O(n)

    private static void divide(int arr[], int start, int end) {
        if (start >= end) {
            return;
        }
        int mid = (start + end) / 2;
        divide(arr, start, mid);
        divide(arr, mid + 1, end);
        sortAndMerge(arr, start, mid, end);

    }

    private static void sortAndMerge(int[] arr, int start, int mid, int end) {
        int mergeArray[] = new int[end - start + 1];
        int index1 = start;
        int index2 = mid + 1;
        int k = 0;
        while (index1 <= mid & index2 <= end) {
            if (arr[index1] <= arr[index2]) {
                mergeArray[k++] = arr[index1++];
            } else {
                mergeArray[k++] = arr[index2++];
            }
        }
        while (index1 <= mid) {
            mergeArray[k++] = arr[index1++];
        }
        while (index2 <= end) {
            mergeArray[k++] = arr[index2++];
        }
        for (int index = 0, j = start; index < mergeArray.length; index++, j++) {
            arr[j] = mergeArray[index];
        }
    }

    public static void main(int[] arr) {
        System.out.println("-------Merge Sort ----------");
        divide(arr, 0, arr.length - 1);
    }
}

class QuickSort {

    public static void main(int[] arr) {
        System.out.println("-------Quick Sort ----------");
        quickHelper(arr, 0, arr.length - 1);
    }

    private static void quickHelper(int[] arr, int low, int high) {
        if (high > low) {
            int pivotIndex = partition(arr, low, high);
            // function to put smaller than pivot to left side of the pivot.
            quickHelper(arr, low, pivotIndex - 1);
            // function to put smaller than pivot to right side of the pivot.
            quickHelper(arr, pivotIndex + 1, high);
        }
    }

    private static int partition(int[] arr, int low, int high) {
        // define the pivot
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                // now swap the elements;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        i++;
        // now swap the elements at the pivot
        int temp = arr[i];
        arr[i] = pivot;
        arr[high] = temp;
        return i;

    }
}

class BubbleSort {

    public static void main(int[] arr) {
        System.out.println("-------Bubble Sort ----------");
        bubbleHelper(arr);
    }

    private static void bubbleHelper(int[] arr) {
        for (int i = arr.length - 1; i >= 0; i--) {
            for (int j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

}

class InsertionSort {
    public static void main(int[] arr) {
        System.out.println("-------Insertion Sort ----------");
        insertionHelper(arr);
    }

    private static void insertionHelper(int[] arr) {
        for (int i = 1; i < arr.length ; i++) {
            for (int j = i; j > 0;) {
                if (arr[j] < arr[j - 1]) {
                    int temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
                j--;
            }
        }

    }
}

class SelectionSort {
    public static void main(int[] arr) {
        System.out.println("-------Selection Sort ----------");
        selectionHelper(arr);
    }

    private static void selectionHelper(int[] arr) {
        for (int i = 0; i < arr.length - 1;) {
            int smallest = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[smallest] > arr[j]) {
                    smallest = j;
                }
            }
            int temp = arr[smallest];
            arr[smallest] = arr[i];
            arr[i] = temp;
            i++;
        }
    }
}

public class SortingAlgorithmsInJava {
    public static void main(String[] args) {
        int[] arr = { 6, 3, 9, 5, 2, 8 };
        // MergeSort.main(arr);
        // BubbleSort.main(arr);
        // SelectionSort.main(arr);
        InsertionSort.main(arr);
        // QuickSort.main(arr);
        display(arr);
    }

    public static void display(int[] arr) {
        for (int element : arr) {
            System.out.print(element + " | ");
        }
        System.out.println();
    }
}