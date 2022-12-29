import pandas as pd 
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

data = pd.read_csv("https://raw.githubusercontent.com/JangirSumit/kmeans-clustering/master/driver-data.csv")
data.drop("id", axis=1, inplace=True)

print(data.head())

my_cluster = KMeans(n_clusters=5)
my_cluster.fit(data)
y_predicted = my_cluster.predict(data)

print(silhouette_score(data, y_predicted))

plt.scatter(data["mean_dist_day"], data["mean_over_speed_perc"], c=y_predicted)
plt.scatter(my_cluster.cluster_centers_[:,0], my_cluster.cluster_centers_[:,1], s=20, c="red")
plt.show()