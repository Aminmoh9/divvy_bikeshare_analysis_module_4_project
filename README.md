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

- **Raw Ride Data** – [Divvy Trip Data Portal](#)  
- **Chicago ZIP Code Reference File** – coordinate-to-ZIP mapping  
- **Aggregated CSVs** – stored in `aggregations/` folder for visualization  

---

## 🧹 Data Preparation

- Merged **monthly CSVs** from 2019 to 2024  
- Cleaned **null values** and standardized columns  
- Replaced missing data (e.g. station/ZIP code) with `"Unknown"`  
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

### ❓ How has bike usage changed (2019–2024)?  
💡 **Up 53.5%**, highest in **2024**. Growth rebounded after 2020 with a **2.5%** increase from 2023–2024.

### ❓ What’s the user type breakdown?  
💡 **Members** dominate, but **casual riders surged** post-2020—likely due to tourism.

### ❓ Seasonal or monthly trends?  
💡 Clear seasonality: **peaks in summer**, low in winter. Trends consistent across user types.

### ❓ Which days/hours have highest usage?  
💡 Weekday commute peaks: **7–9 AM**, **4–6 PM**. Weekends are steady: **10 AM–7 PM**.

### ❓ Do ride durations differ by user?  
💡 **Casual users ride longer**, favoring leisure. Members take shorter commuter trips.

### ❓ Bike type usage patterns?  
💡 **Classic and electric** bikes dominate. Docked bikes solid. **E-scooters** least used.

### ❓ Station popularity and changes?  
💡 **Streeter Dr & Grand Ave** is a long-time top station. Others shift yearly.

### ❓ Any geographic planning insights?  
💡 Most usage near **downtown and lakefront** ZIPs. Outskirts underused—opportunity for investment.  
💡 Popular routes include **round trips**, especially in central areas and parks.  

---

## 📊 Visualizations

Tableau dashboards include:

- **Ride trends (2019–2024)**  
- **User patterns**: Members vs Casual  
- **Bike type usage over time**  
- **ZIP-to-ZIP route volume**  
- **Daily and hourly usage patterns**

Dashboards are built from the `aggregations/` CSVs.  
👉 *[https://public.tableau.com/views/DivvyBikeShareAnalysis_17530696403280/DivvyBikeShareAnalysis-2019-2024?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link]*

---

## 🌐 Interactive Web Story

This project also includes an **interactive web page** that:

- **Loads questions and insights dynamically** from `story.json`  
- **Embeds Tableau dashboard** via Tableau’s **JavaScript API**  
- Allows **easy updates** to insights without editing page code  

To run locally:

- Use a local web server like **VS Code’s Live Server**  
- This avoids browser restrictions on loading JSON files  

📁 Available files:

- `index.html` – interactive web story  
- `story.json` – dynamic question/insight data  

---

## 🚀 How to Use This Project

1. **Download raw data** from the Divvy Trip Data Portal  
2. **Run Jupyter Notebook** for cleaning & aggregation  
3. **Explore CSVs** in `aggregations/` or recreate Tableau dashboards  
4. **Review insights** or create new features for deeper analysis  
