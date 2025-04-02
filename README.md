
# ✈️ Airport Runway Scheduler

This project simulates scheduling takeoffs and landings on a single airport runway using two different algorithms:

- **Inefficient Scheduler**: Scans minute-by-minute to find the next free slot.
- **Optimized Scheduler**: Uses a next-available-time pointer to directly assign slots.

It includes:
- ✅ A **Java backend** for scheduling logic and performance testing.
- ✅ A **visual simulation** in HTML, CSS, and JavaScript styled like real airport boards.

---

## 📁 Project Structure

```
AirportRunwayScheduler/
├── AirportScheduler.java         # Java logic with timing comparison
├── airport_scheduler.html        # Frontend simulation
├── styles.css                    # Airport-style table styling
├── script.js                     # JavaScript to simulate scheduling
├── README.md                     # Project documentation
```

---

## 🧠 Java Scheduler

### 🔧 How to Run

```bash
javac AirportScheduler.java
java AirportScheduler
```

### 🧪 Sample Output

```
Planes: 100
Inefficient Scheduler: 1 ms
Optimized Scheduler:   0 ms

Planes: 500
Inefficient Scheduler: 7 ms
Optimized Scheduler:   1 ms

Planes: 1000
Inefficient Scheduler: 11 ms
Optimized Scheduler:   2 ms
```

> These results show how optimized scheduling becomes increasingly efficient as task load increases.

---

## 🌐 Visual Airport Simulation

### 🚀 How to Use

1. Open `airport_scheduler.html` in any modern browser.
2. Click the **“Start Scheduler”** button.
3. Watch both tables fill with flights:
   - **Left:** Inefficient Scheduler
   - **Right:** Optimized Scheduler

### ✨ Features

- Flight numbers like `UA312`, `AA475`, `EK222`
- Type: `Landing` or `Takeoff`
- Assigned runway: `A1`, `B2`, etc.
- Status: `Scheduled`
- Styled like a real airport departure board

---

## 🛠 Technologies Used

| Feature          | Technology             |
|------------------|------------------------|
| Scheduler Logic  | Java                   |
| Visual Simulation| HTML + CSS + JavaScript |
| Styling          | Dark mode airport board |
| Random Flights   | JavaScript flight generator |

---

## 🧠 Real-Time Concepts Demonstrated

| Scheduler       | Logic                               | Efficiency |
|------------------|-------------------------------------|-------------|
| Inefficient       | Scans from arrival to 1440 minutes  | O(n²)       |
| Optimized         | Tracks next available slot directly | O(n)        |

> This mimics how modern real-time systems like airports, ATC, and embedded controllers optimize performance.

---

## 🎓 Authors

**Widyan Mohammed Hussien**  
Computer Science Student — University of Houston  
Project for Real-Time Systems (COSC 6384, Spring 2025)

**Ali Javaid**
Computer Science Student — University of Houston Project for Real-Time Systems (COSC 6384, Spring 2025)

---