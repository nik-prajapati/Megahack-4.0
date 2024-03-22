import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { getDoctosRoute } from '../utils/APIRoutes';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import navigation from '../assets/location-pin (1).png'
import { Icon } from "leaflet";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography, Paper } from '@mui/material';


const FindTherapist = () => {
    const [doctors,setDocotrs] = useState([]);

    const customIcon = new Icon({
        iconUrl: navigation, // Replace with the path to your custom icon
        iconSize: [32, 32], // Set the size of your custom icon
        iconAnchor: [16, 32], // Set the anchor point of your custom icon
      });
      
      
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${getDoctosRoute}`)
        .then((response) => {
            setDocotrs(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  return (
    <Container >
      <Grid container spacing={3} sx={{
        width:'100%',
        height:'700px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
    }}>
        <Grid item xs={6}>
          <MapContainer center={[19.0760,72.8777]} zoom={13} style={{ height: '600px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            
            {
                doctors.map((doctor,idx)=>{
                    return <Marker position={[doctor.location.lat, doctor.location.long]} key={idx} icon={customIcon}>
                    <Popup>
                      
                        <Typography variant="h5">{doctor.name}</Typography>
                        <Typography variant="body1">{doctor.speciality}</Typography>
                       
                    </Popup>
                  </Marker>
                })
                
            }

                </MapContainer>
        </Grid>
        <Grid item xs={6}>
      
      <div style={{  height: '100%', textAlign: 'center'  }}>
        <h2 style={{ marginBottom:'10px',fontWeight:'bold'}}>Search Cousellor Nearby You</h2>
        <TextField
          label="Specialty"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '10px',width:'400px' }}
        />
        <br />
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '10px',width:'400px' }}
        />
        <br />
        {/* Search button */}
        <Button variant="contained" style={{ marginBottom: '10px',width:'400px',padding:'10px' }}>Search</Button>
      </div>
    </Grid>
      </Grid>
    </Container>
  );
};

export default FindTherapist;
