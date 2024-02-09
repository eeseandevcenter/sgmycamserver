const express = require('express')
const axios = require('axios')
const app = express()
const cors = require('cors')
app.use(cors())
const port = 3002

app.get('/', (req, res) => {
  res.send('SGMYCAM: Invalid parameter for request. ')
})

app.get('/traffic-incidents', (req, res) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://datamall2.mytransport.sg/ltaodataservice/TrafficIncidents',
      headers: { 
        'AccountKey': 'WOgYmxBITSyC93o7cs4BaA==', 
        'accept': 'application/json'
      },
      maxRedirects: 0
    };
    
    axios.request(config)
      .then((response) => {
        let data = JSON.stringify(response.data);
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Traffic-Incidents: An error occurred while fetching data.');
      });
  });

  app.get('/bus-stops', async (req, res) => {
    try {
      const response = await axios.get('https://data.busrouter.sg/v1/stops.json');
      const data = response.data;
      let list = [];
      for (let key in data) {
        let dataPush = {
          "lat": data[key][0],
          "lon": data[key][1],
          "name": data[key][2],
          "road": data[key][3],
        }
        list.push(dataPush);
      }
      res.send(list);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send(error);
    }
  });

  app.get('/bus-stop/near', async( req, res) => {
    try {
      const response = await axios.get('https://data.busrouter.sg/v1/stops.json');
      const data = response.data;
      let list = [];
      let lat = res.headers.coordinates.lat
      let lon = res.headers.coordinates.lon
      let range = res.headers.range
      function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        const distance = R * c;
        return distance;
      }
      
      function deg2rad(deg) {
        return deg * (Math.PI/180)
      }
      for (let key in data) {
        let distance = calculateDistance(lat, lon, data[key][0], data[key][1]);
        if (distance < range && range > 0) {
          let dataPush = {
            "lat": data[key][0],
            "lon": data[key][1],
            "name": data[key][2],
            "road": data[key][3],
          }
          list.push(dataPush);
        }
      }

      res.send(list);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send(error);
    }
  })

  app.get('/bus-services', (req, res) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://datamall2.mytransport.sg/ltaodataservice/BusServices',
      headers: { 
        'AccountKey': 'WOgYmxBITSyC93o7cs4BaA==', 
        'accept': 'application/json'
      },
      maxRedirects: 0
    };
    
    axios.request(config)
      .then((response) => {
        let data = JSON.stringify(response.data);
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Bus-Services: An error occurred while fetching data.');
      });
  });

  app.get('/bus-routes', (req, res) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://datamall2.mytransport.sg/ltaodataservice/BusRoutes',
      headers: { 
        'AccountKey': 'WOgYmxBITSyC93o7cs4BaA==', 
        'accept': 'application/json'
      },
      maxRedirects: 0
    };
    
    axios.request(config)
      .then((response) => {
        let data = JSON.stringify(response.data);
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Bus-Routes: An error occurred while fetching data.');
      });
  });

  app.get('/carpark-availability', (req, res) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2',
      headers: { 
        'AccountKey': 'WOgYmxBITSyC93o7cs4BaA==', 
        'accept': 'application/json'
      },
      maxRedirects: 0
    };
    
    axios.request(config)
      .then((response) => {
        let data = JSON.stringify(response.data);
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Carpark-Availability: An error occurred while fetching data.');
      });
  });

  app.get('/erp-rates', (req, res) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://datamall2.mytransport.sg/ltaodataservice/ERPRates',
      headers: { 
        'AccountKey': 'WOgYmxBITSyC93o7cs4BaA==', 
        'accept': 'application/json'
      },
      maxRedirects: 0
    };
    
    axios.request(config)
      .then((response) => {
        let data = JSON.stringify(response.data);
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('ERP Rates: An error occurred while fetching data.');
      });
  });

  app.get('/est-travel-times', (req, res) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://datamall2.mytransport.sg/ltaodataservice/EstTravelTimes',
      headers: { 
        'AccountKey': 'WOgYmxBITSyC93o7cs4BaA==', 
        'accept': 'application/json'
      },
      maxRedirects: 0
    };
    
    axios.request(config)
      .then((response) => {
        let data = JSON.stringify(response.data);
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Estimated-Travel-Times: An error occurred while fetching data.');
      });
  });
  
  app.get('/train-service-alerts', (req, res) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://datamall2.mytransport.sg/ltaodataservice/TrainServiceAlerts',
      headers: { 
        'AccountKey': 'WOgYmxBITSyC93o7cs4BaA==', 
        'accept': 'application/json'
      },
      maxRedirects: 0
    };
    
    axios.request(config)
      .then((response) => {
        let data = JSON.stringify(response.data);
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Train-Service-Alerts: An error occurred while fetching data.');
      });
  });

  app.get('/bus-arrival/:id', (req, res) => {
    const busStopId = req.params.id.toString();
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=' + busStopId,
      headers: { 
        'AccountKey': 'WOgYmxBITSyC93o7cs4BaA==', 
      },
      maxRedirects: 0
    };

    if (busStopId === 'undefined' || busStopId === 'null' || busStopId === '') {
      res.status(400).send('Bus-Arrival: Invalid parameter for request, bus stop code is required.');
    }
    else {
      axios.request(config)
      .then((response) => {
        let data = JSON.stringify(response.data);
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('An error occurred while fetching data.');
      });
    }
    
  });

  app.get('/pcd/:id', (req, res) => {
    const trainLineID = req.params.id.toString();
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://datamall2.mytransport.sg/ltaodataservice/PCDRealTime?TrainLine=' + trainLineID,
      headers: { 
        'AccountKey': 'WOgYmxBITSyC93o7cs4BaA==', 
      },
      maxRedirects: 0
    };

    if (trainLineID === 'undefined' || trainLineID === 'null' || trainLineID === '') {
      res.status(400).send('Platform-Crowd-Density-Real-Time: Invalid parameter for request, train line code is required.');
    }
    else {
      axios.request(config)
      .then((response) => {
        let data = JSON.stringify(response.data);
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('An error occurred while fetching data.');
      });
    }
    
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
