# Titanic Mini Visualization Dashboard

A comprehensive data visualization dashboard exploring the Titanic dataset using pandas, matplotlib, and seaborn in Jupyter Notebook.

## Dataset

This project uses the **Titanic dataset** from the GitHub repository [datasciencedojo/datasets](https://github.com/datasciencedojo/datasets). The dataset contains information about passengers aboard the RMS Titanic, including:

- Passenger demographics (age, sex, class)
- Ticket information (fare, cabin, embarkation)
- Family information (siblings/spouses, parents/children)
- Survival status

The dataset is included as `titanic.csv` in the project directory for reliable loading without external dependencies.

## Requirements

### Required Libraries

- **pandas** (3.0.5) - Data manipulation and analysis
- **numpy** (2.5.1) - Numerical computing
- **seaborn** (0.13.2) - Statistical data visualization
- **matplotlib** (3.11.1) - Plotting and visualization

### Installation

To install the required libraries, run:

```bash
pip install pandas numpy seaborn matplotlib
```

Or using pip3:

```bash
pip3 install pandas numpy seaborn matplotlib
```

## How to Run

### Option 1: Using Jupyter Notebook (Recommended)

1. Ensure Jupyter is installed:
   ```bash
   pip install jupyter
   ```

2. Navigate to the project directory:
   ```bash
   cd titanic_dashboard
   ```

3. Launch Jupyter Notebook:
   ```bash
   jupyter notebook
   ```

4. Open `titanic_dashboard.ipynb` in the browser interface
5. Run cells sequentially using "Run" button or Shift+Enter

### Option 2: Using Google Colab

1. Upload `titanic_dashboard.ipynb` and `titanic.csv` to Google Colab
2. Open the notebook in Colab
3. Run cells sequentially

### Option 3: Pre-executed Notebook

A pre-executed version with all outputs and charts is available as `titanic_dashboard_executed.ipynb`. You can open this directly to view results without re-running the code.

## Notebook Structure

The notebook is organized into the following sections:

1. **Overview** - Introduction to the dataset and dashboard objectives
2. **Cleaning** - Data loading and missing value handling
3. **Features** - Feature engineering (FamilySize, AgeGroup)
4. **Visualizations** - Six data visualization plots with insights
5. **Insights** - Key findings from the analysis
6. **Conclusion** - Summary and takeaways

## Visualizations

The dashboard includes 6 visualization plots:

1. **Age Distribution** - Histogram with KDE showing passenger age demographics
2. **Survival Rate by Sex** - Bar chart comparing male/female survival rates
3. **Fare by Passenger Class** - Boxplot showing fare distribution across classes
4. **Age vs Fare (Survival)** - Scatter plot colored by survival status
5. **Correlation Heatmap** - Heatmap showing correlations between numeric features
6. **Survival by Sex and Class** - Facet grid showing survival patterns across demographics

All plots are automatically saved as high-resolution PNG files in the `images/` folder.

## Output Files

- `titanic_dashboard.ipynb` - Main notebook (code only)
- `titanic_dashboard_executed.ipynb` - Executed notebook with outputs
- `titanic.csv` - Dataset file
- `images/` - Folder containing 6 PNG visualization files:
  - `age_distribution.png`
  - `survival_by_sex.png`
  - `fare_by_class.png`
  - `age_vs_fare_survival.png`
  - `correlation_heatmap.png`
  - `survival_by_sex_class.png`

## Key Insights

- **Gender was the strongest survival predictor** - Women survived at 4x the rate of men
- **Socioeconomic status mattered** - First-class passengers had significantly better survival rates
- **Age distribution was right-skewed** - Most passengers were young adults (20-40 years)
- **Fare and class were strongly correlated** - Higher class correlated with higher fares
- **Intersectional effects were pronounced** - First-class women had the best outcomes

## License

This project is created for educational purposes as part of a Data Science internship task. The Titanic dataset is publicly available for educational use.
