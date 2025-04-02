import java.util.*;

class Plane {
    int id;
    int arrivalTime;
    boolean needsLanding;

    Plane(int id, int arrivalTime, boolean needsLanding) {
        this.id = id;
        this.arrivalTime = arrivalTime;
        this.needsLanding = needsLanding;
    }
}

public class AirportScheduler {

    public static void scheduleInefficient(List<Plane> planes) {
        int[] runwaySlots = new int[1440];
        for (Plane plane : planes) {
            for (int t = plane.arrivalTime; t < 1440; t++) {
                if (runwaySlots[t] == 0) {
                    runwaySlots[t] = plane.id;
                    break;
                }
            }
        }
    }

    public static void scheduleOptimized(List<Plane> planes) {
        int[] runwaySlots = new int[1440];
        int nextAvailableSlot = 300;
        for (Plane plane : planes) {
            int t = Math.max(plane.arrivalTime, nextAvailableSlot);
            runwaySlots[t] = plane.id;
            nextAvailableSlot = t + 1;
        }
    }

    public static List<Plane> generatePlanes(int count) {
        List<Plane> planes = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            planes.add(new Plane(i + 1, 300 + (i % 60), i % 2 == 0));
        }
        return planes;
    }

    public static void main(String[] args) {
        int[] testSizes = {100, 500, 1000};

        for (int size : testSizes) {
            List<Plane> planes = generatePlanes(size);

            long start = System.nanoTime();
            scheduleInefficient(planes);
            long end = System.nanoTime();
            long inefficientTime = (end - start) / 1_000_000;

            start = System.nanoTime();
            scheduleOptimized(planes);
            end = System.nanoTime();
            long optimizedTime = (end - start) / 1_000_000;

            System.out.println("Planes: " + size);
            System.out.println("Inefficient Scheduler: " + inefficientTime + " ms");
            System.out.println("Optimized Scheduler:   " + optimizedTime + " ms\n");
        }
    }
}