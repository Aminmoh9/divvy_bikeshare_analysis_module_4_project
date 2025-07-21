# 🚲 **Divvy Bike Share Analysis**

## 📌 Overview

This project analyzes **Divvy Bike Share data from 2019 to 2024** to explore ridership patterns, user behavior, and geographic trends in **Chicago**. Due to the dataset's size, all **cleaning and aggregation were done in Python**, and **Tableau** was used for visualization. The project addresses **key business questions** to understand how the service has evolved and where future improvements could be made.

---

## 🛠️ Tools Used

- **Python** – data cleaning, transformation, aggregation  
- **Pandas, NumPy, scikit-learn** – feature engineering and ZIP code mapping  
- **Jupyter Notebook** – pipeline execution and documentation  
- **Tableau** – dashboards from aggregated outputs  

---

## 📂 Data Sources

- **Raw Ride Data** – [Divvy Trip Data Portal](https://divvybikes.com/system-data)  
- **Chicago ZIP Code Reference File** – coordinate-to-ZIP mapping  
- **Aggregated CSVs** – stored in `aggregations/` folder for visualization  

---

## 🧹 Data Preparation

- Merged **monthly CSVs** from 2019 to 2024  
- Cleaned **null values** and standardized columns  
- Replaced missing data (e.g., station/ZIP code) with `"Unknown"`  
- Converted **datetime fields**; extracted `year`, `month`, `weekday`, `hour`  
- Calculated **ride durations**  
- Used **BallTree** to assign ZIP codes to ride locations  
- Created aggregations for:
  - **User type trends**  
  - **Bike usage patterns**  
  - **Time-based activity**  
  - **Geographic routes**

---

## ❓ Business Questions & 💡 Insights

### 1. How has bike usage changed (2019–2024)?  
**💡 Up 53.5%**, highest in **2024**. Growth rebounded after 2020 with a **2.5%** increase from 2023–2024.

### 2. What’s the user type breakdown?  
**💡 Members** dominate, but **casual riders surged** post-2020 — likely due to tourism.

### 3. Seasonal or monthly trends?  
**💡 Clear seasonality**: peaks in summer, dips in winter. Trends consistent across user types.

### 4. Which days/hours have highest usage?  
**💡 Weekday commute peaks**: 7–9 AM and 4–6 PM. Weekends are steady from 10 AM to 7 PM.

### 5. Do ride durations differ by user?  
**💡 Casual users ride longer**, favoring leisure trips. Members take shorter commuter rides.

### 6. Bike type usage patterns?  
**💡 Classic and electric bikes dominate**. Docked bikes still active. E-scooters least used.

### 7. Station popularity and changes?  
**💡 Streeter Dr & Grand Ave** has been a top station across multiple years.

### 8. Any geographic planning insights?  
**💡 Heavy usage** in downtown and lakefront ZIPs. Outer zones underused — potential for investment.  
**💡 Round trips** are common in parks and central areas.

---

## 📊 Visualizations

Tableau dashboards include:

- **Ride trends (2019–2024)**  
- **User patterns**: Members vs Casual  
- **Bike type usage over time**  
- **ZIP-to-ZIP route volume**  
- **Daily and hourly usage patterns**

Dashboards are built from the `aggregations/` CSVs.  
🔗 [View Tableau Story](https://public.tableau.com/views/DivvyBikeShareAnalysis_17530696403280/DivvyBikeShareAnalysis-2019-2024)

> 📱 *QR code to this dashboard is included in the presentation for easy access.*

---

## 🌐 Interactive Web Story

This project also includes an **interactive web page** that:

- Loads questions and insights dynamically from `story.json`  
- Embeds Tableau dashboard using **Tableau JavaScript API**  
- Allows content updates without touching HTML

To run locally:

1. Use a local web server like **VS Code Live Server**
2. Open `index.html` to see the page

📁 Key files:

- `index.html` – Interactive web story  
- `story.json` – Insight content  
- `aggregations/` – CSVs for Tableau  

---

## 🚀 How to Use This Project

1. **Download data** from the Divvy Trip Data Portal  
2. **Run notebook** to clean and transform data  
3. **Use `aggregations/` files** in Tableau to build dashboards  
4. Explore or extend insights based on your needs

---

## 👤 About Me

Hi, I’m **[Amin Mohammadi]**, a data analyst in training with interest in mobility, urban data, and generative AI.

📎 [LinkedIn Profile](https://linkedin.com/in/sayed-mohd-amin-mohammadi-49873b96/ )                           
📎 [GitHub](https://github.com/Aminmoh9)  
📷 *QR to LinkedIn included in Tableau Story*



