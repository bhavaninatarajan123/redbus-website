import React, { useState } from 'react'
import '../css/Seat.css'
const Seat = () => {
    const [choose,setChoose]=useState([
        {
            id:1,
            para:""
        },
        {
            id:2,
            para:""
        },
        {
            id:3,
            para:""
        },
        {
            id:4,
            para:""
        },
        {
            id:5,
            para:" "
        },
        {
            id:6,
            para:" "
        },
        {
            id:7,
            para:" "
        },
        {
            id:8,
            para:" "
        },
        {
            id:9,
            para:" "
        },
        {
            id:10,
            para:" "
        },
        {
            id:11,
            para:" "
        },
        {
            id:12,
            para:" "
        },
        {
            id:13,
            para:" "
        },
        {
            id:14,
            para:" "
        },
        {
            id:15,
            para:" "
        },
        {
            id:16,
            para:" "
        },
        {
            id:17,
            para:" "
        },
        {
            id:18,
            para:" "
        },
        {
            id:19,
            para:" "
        },
        {
            id:20,
            para:" "
        },
        {
            id:21,
            para:" "
        },
        {
            id:22,
            para:" "
        },
        {
            id:23,
            para:" "
        },
        {
            id:24,
            para:" "
        },
    
        {
            id:25,
            para:" "
        },
        {
            id:26,
            para:" "
        },
        {
            id:27,
            para:" "
        },
        {
            id:28,
            para:" "
        },
        {
            id:29,
            para:" "
        },
        {
            id:30,
            para:" "
        },
        {
            id:31,
            para:" "
        },
        {
            id:32,
            para:" "
        },
        {
            id:33,
            para:" "
        },
        {
            id:34,
            para:" "
        },
        {
            id:35,
            para:" "
        },
        {
            id:36,
            para:" "
        },
        {
            id:37,
            para:" "
        },
        {
            id:38,
            para:" "
        },
        {
            id:39,
            para:" "
        },
        {
            id:40,
            para:""
        }
    
    ])
    const [count,setCount]=useState([])
    const [amount,setAmout]=useState(0)
    const [color,setColor]=useState(true)

    const handleSeat=(val)=>{
        // console.log(val);
        if(count.indexOf(val) !=-1){
            alert("sorry already selected")
        }
        else{
            count.push(val)
            // console.log(count);
        }
        // console.log(count.length);
        let ans =200;
        ans=ans*count.length
        setAmout(ans);
        const seatIndex = choose.findIndex((seat) => seat.id === val);
        // console.log(seatIndex);
        if (seatIndex !== -1){
            const updatedSeats = [...choose];
            updatedSeats[seatIndex].isSelected = !updatedSeats[seatIndex].isSelected;
            // updatedSeats[seatIndex].backgroundColor = color ? "green":"black"
            // updatedSeats[seatIndex].disabled = false;
            setChoose(updatedSeats)
        }
    }

    const handleBookBtn=()=>{
        if(count.length > 0){
            setColor((prevColor) => !prevColor)
        }
    }
  return (
    <div className='container'>
        <div className='select'>
            <label>SELECT A MOVIE : </label>
            <select>
                <option>Avengers Endgame (200)</option>
            </select>
        </div>
        <div className='status'>
            <div className='status-div'>
                <p className='box1'></p>
                <p>N/A</p>
            </div>
            <div className='status-div'>
                <p className='box2'></p>
                <p>Selected</p>
            </div>
            <div className='status-div'>
                <p className='box3'></p>
                <p>Occupied</p>
            </div>
        </div>
        <div className='row'>
            {
                choose.map((e)=>{
                 return <div className="col" >
                    <p style={{backgroundColor: e.isSelected ? (color ? 'green' : 'black') : 'defaultColor',}} className='box' value={e.id} onClick={()=>handleSeat(e.id)}>{e.para}</p>

                 </div>
                })
            }
        </div>
        <div className='btn-divv'>
            <p>You have selected {count.length} seats fora price of {amount}</p>
            <button onClick={handleBookBtn}>Book</button>
        </div>
    </div>
  )
}

export default Seat