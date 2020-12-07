
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { Link, useHistory } from "react-router-dom";

const genre1 = [
    { title: 'Jazz' },
    { title: 'Pop' },
    { title: 'Hiphop' }]

    const area1 = [
        { title: 'Chennai' },
        { title: 'Punjab' },
        { title: 'Gujrat' }]
   
const SingerProfile=()=>{

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const[area,setArea]=useState([])
    const[genre,setGenre]=useState([])
    const [value, setValue] = React.useState(genre[0]);
    const [value1, setValue1] = React.useState(area[0]);
//   const { state, dispatch } = useContext(UserContext);
//   const [postno, setPostNo] = useState("0");
//   const [loading, setLoading] = useState(false);
//   const [bio, setBio] = useState("");
//   const [newusername, setNewUsername] = useState("");
//   const [followers, setFollowers] = useState("");
//   const [following, setFollowing] = useState("");
//   const [accounttype, setAccounttype] = useState("");
//   const [dp, setDp] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/singerprofile", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
         console.log(result.user.Firstname);
         setFirstname(result.user.Firstname);
         setLastname(result.user.Lastname);
         setArea(result.user.area)
         setGenre(result.user.genre)
         console.log(result.user.genre)
      });
  }, []);

  const reload=()=>{

    fetch("http://localhost:4000/singerprofile", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
         console.log(result.user.Firstname);
         setFirstname(result.user.Firstname);
         setLastname(result.user.Lastname);
         setArea(result.user.area)
         setGenre(result.user.genre)
         console.log(result.user.area)
      });

  }

  const addgenre = (genreoption) => {
    fetch(`http://localhost:4000/addgenre`, {
      method: "put",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
          genre:genreoption
      })
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        
        reload()
        
      });
  };

  const addarea = (areaoption) => {
    fetch(`http://localhost:4000/addarea`, {
      method: "put",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
          area:areaoption
      })
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        
        reload()
        
      });
  };


  const removegenre = (genreoption) => {
    fetch(`http://localhost:4000/removegenre`, {
      method: "put",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
          genre:genreoption
      })
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        
        reload()
        
      });
  };

  const removearea = (areaoption) => {
    fetch(`http://localhost:4000/removearea`, {
      method: "put",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
          area:areaoption
      })
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        
        reload()
        
      });
  };
    return <div className="singerprofile">
        <div className="profilepicture" style={{display:'flex'}}>
        <div><img src="https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg"></img></div>
            
        <div className='info' style={{display:'flex'}}>
        <div><div className='location' style={{display:'flex'}}><div style={{padding:'2% 0% 0% 2%'}}><h5>{firstname} {lastname}</h5></div>
        <div style={{display:'flex'}}><i className="large material-icons" style={{fontSize:'3rem',marginTop:'7%',color:'gray'}}>location_on</i><h5 style={{color:'grey'}}>Siliguri</h5></div>
        </div>
        <div style={{display:'flex',paddingLeft:'2%',marginTop:'0%'}}><h7 style={{marginTop:'0%',color:'#87CEEB'}}>Singer/Songwriter</h7></div>
        <div style={{display:'flex',padding:'2%'}}><h5 style={{marginTop:'1.4%'}}>5</h5><i className="large material-icons" style={{fontSize:'3rem',color:'gold'}}>star</i></div>
        <div style={{display:'flex',padding:'2% ' ,flexWrap:'wrap'}}><h7>Hey Guys, I am a pssionate musician willing to sing and focus more on my music career. I am happy to help! Well Done guys, , what do you need ypu assshole</h7></div>
        </div>
        <div ></div>
        
            
        </div>
        </div>
        <div className="border"></div>
        <div className="profilepicture" style={{display:'flex'}}>
        <div ><h3 className='imgreplace' style={{color:'gray',textDecoration:'underline'}}>SONG LINKS</h3>
        <a className='imgreplace' href="http://www.google.com">Choo loo</a>
        </div>
        <div></div>
        <div className='info1' style={{display:'flex',flexDirection:'column'}}>
        <h3 style={{color:'gray',textDecoration:'underline'}}>ABOUT ME</h3>
        
        <div><div className='location' style={{display:'flex'}}><div style={{padding:'2% 0% 0% 2%',display:'flex'}}><h5 style={{color:'gray'}}>Phone:</h5><h5 style={{marginLeft:'3%'}}>1234567</h5></div>
        
        </div>
        <div style={{display:'flex',paddingLeft:'2%'}}><h5 style={{color:'gray'}}>Age:</h5><h5 style={{marginLeft:'3%'}}>20</h5></div>
        <div style={{display:'flex',paddingLeft:'2%',flexWrap:'wrap'}}><h5 style={{color:'gray'}}>Address:</h5><h5 style={{marginLeft:'3%'}}></h5></div>
        <div style={{display:'flex',paddingLeft:'2%'}}><h5 style={{color:'gray'}}>Email:</h5><h5 style={{marginLeft:'3%'}}></h5></div>
        
        </div>
        <div ></div>
        
            
        </div>
        </div>
        
        
        

        <div className="genreandarea" style={{display:'flex'}}>
            <div className="genre">
            <div style={{display:'flex'}}>
            <Autocomplete
      id="combo-box-demo"
      options={genre1}
      getOptionLabel={(option) => option.title}
      style={{ width: '70%' }}
      value={value}
        onChange={(event, newValue) => {
          setValue(newValue.title);
          console.log(newValue.title)
        }}
     
      renderInput={(params) => <TextField {...params} label="Genre" variant="outlined" 
          
      />}
    />
    <i class="large material-icons" style={{cursor:'pointer'}} onClick={()=>{
        console.log(value)
        addgenre(value)
    }}>add_circle</i>
    </div>
    <div className="genreitems" style={{display:'flex',flexWrap:'wrap'}}>
    {genre.map((item)=>{
       return <div className="genreitemstext" style={{border:'2px solid gray',margin:'5%',padding:'5% 10%',borderRadius:'20%'}} key={item}><div style={{display:'flex'}}><p>{item}</p> <i class="material-icons" style={{marginLeft:'30%',cursor:'pointer'}} onClick={()=>{console.log(item);removegenre(item)}}>cancel</i></div></div>
    })}
        
        
    </div>
            </div>
            <div className="area"><div style={{display:'flex'}}>
            <Autocomplete
      id="combo-box-demo"
      options={area1}
      getOptionLabel={(option) => option.title}
      style={{ width: '70%' }}
      value={value1}
        onChange={(event, newValue) => {
            
          setValue1(newValue.title);
          console.log(newValue.title)
        }}
      
      renderInput={(params) => <TextField {...params} label="Area" variant="outlined" />}
    />
    <i class="large material-icons"  style={{cursor:'pointer'}} onClick={()=>{
        console.log(value1)
        addarea(value1)
        }}>add_circle</i>
    </div>
    <div className="areaitems" style={{display:'flex',flexWrap:'wrap'}}>
    {area.map((item)=>{
        return <div className="genreitemstext" style={{border:'2px solid gray',margin:'5%',padding:'5% 10%',borderRadius:'20%'}} key={item}><div style={{display:'flex'}} ><p>{item}</p> <i class="material-icons" style={{marginLeft:'30%',cursor:'pointer'}} onClick={()=>{console.log(item); removearea(item)}}>cancel</i></div></div>
    })}
        
        
    </div>
    </div>
        </div>
    </div>
}


export default SingerProfile;