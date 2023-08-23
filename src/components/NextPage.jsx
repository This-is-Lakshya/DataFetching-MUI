import React, {useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import axios from 'axios';
import '../styles/NextPage.css';
import CheckBox from './CheckBox';


const NextPage = () => {

  const [data,setData] = useState([]);

  const getJsonData = async ()=>{
    await axios.get('https://myjsonserver-ec2d.onrender.com/data').then((res)=>{
      setData(res.data);
    })
  }

  useEffect(()=>{
    getJsonData();
  }, [])

  const columns = [
    {field:"id", headerName: "ID", width:90},
    {field:"name", headerName: "Name", width:150},
    {field:"city", headerName: "City", width:150},
    {field:"state", headerName: "State", width:150},
    {field:"country", headerName: "Country", width:150}
  ]

  const rows = data.map((row)=>({
    id: row.id,
    name: row.name,
    city: row.city,
    state: row.state,
    country: row.country
  }))

  console.log(data);

  return (
    <>
    <div className='next' style={{
      height:500
    }}>
      <DataGrid 
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOption={[10]}
      />
    </div>
    <CheckBox />
    </>
  )
}

export default NextPage