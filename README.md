# SGMYCAM Server
### An open-sourced server in express.js, developed by SGMYCAM, to make request and query to government of Singapore's LTA DataMall. 

## Usage
#### Host the server files at Vercel or a hosting provider that supports Express.js hosting and CORS (Cross-Origin-Resources-Sharing). Request through a specific parameter to get a specific dataset. 

#### Besides Express.js, the server also uses Axios and CORS for requesting traffic data. 

#### For a better experience, an <a href="https://datamall.lta.gov.sg/content/datamall/en/request-for-api.html">account key</a> from LTA's DataMall is advised. 

## Parameters
```
/traffic-incidents
/bus-stops
/bus-services
/bus-routes
/carpark-availability
/erp-rates
/est-travel-times
/train-service-alerts
/bus-arrival/(id)
/pcd/(id)
```

## Reminder
#### 1. In some specific parameter, (id) is for the a specific value, such as a bus code or a train service route. For example, in "bus-arrival", (id) such as bus code "83139" is used to query a specific bus arrival timetable. In the other-hand, (id) in "pcd" is for train routes such as "NSL", "NEL", etc. 

#### 2. All traffic data are from DataMall LTA Singapore.  

##### Developed by THATSEANDEV in 2023. 
