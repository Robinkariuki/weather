import React from 'react';




const Home =()=>{
    const DateBuilder =(d)=>{
        const months = ['January','February','March','April','May','June','July','August',
    'September','October','November','December'];
    }
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    
    const day = days[d.getDay()];
    const date = d.getDate();
    const mont = months[d.getMonth()];
}