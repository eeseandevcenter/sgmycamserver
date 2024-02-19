# SGMYCAM Server
### An open-sourced server in express.js, developed for SGMYCAM, to make request and query to government of Singapore's LTA DataMall and other related open-source databases. 

## Usage
Host the server files at Vercel or a hosting provider that supports Express.js hosting and CORS (Cross-Origin-Resources-Sharing). Request through a specific parameter to get a specific dataset. 

Besides Express.js, the server also uses Axios and CORS for requesting traffic data. 

For a better experience, an <a target="_blank" href="https://datamall.lta.gov.sg/content/datamall/en/request-for-api.html">account key</a> from LTA's DataMall is advised. 

## Endpoints
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

## Open resources out from LTA Singapore used
Starting from 8/2/2024, the request link for the bus-stops codes will be replaced to the following source: <a target="_blank" href="https://data.busrouter.sg/v1/stops.json">https://data.busrouter.sg/v1/stops.json</a>

The resource is from the following GitHub Project: <a target="_blank" href="https://github.com/cheeaun/arrivelah">arrivelah</a> .

## Skip function updated
Starting from 19/2/2024, all request for the endpoints except /bus-stops can have a skip header included to retireve more data. Through this, 500 data per-request can be ignored. Read the DataMall PDF Document(Page 7) from LTA to get more informations. 

## Reminder
1. In some specific parameter, (id) is for the a specific value, such as a bus code or a train service route. For example, in "bus-arrival", (id) such as bus code "83139" is used to query a specific bus arrival timetable. In the other-hand, (id) in "pcd" is for train routes such as "NSL", "NEL", etc. 

2. All traffic data are from LTA Singapore.  

##### Developed by THATSEANDEV in 2023. 
