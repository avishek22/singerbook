
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useEffect, useState, useContext } from "react";
import Swal from 'sweetalert2'
import { UserContext } from "../../App";
import { Link, useHistory } from "react-router-dom";

let c=0,a=0;
const genre1 = [
    { title: 'Jazz' },
    { title: 'Pop' },
    { title: 'Hiphop' }]

    const area1 = [
        { title: 'Chennai' },
        { title: 'Punjab' },
        { title: 'Gujrat' }]
        const category1 = [
          { title: 'Weddings' },
          { title: 'Short parties' },
          { title: 'Birthdays' }]
   
const SingerProfile=()=>{

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const[bio,setBio]=useState("")
    const[area,setArea]=useState([])
    const[genre,setGenre]=useState([])
    const[category,setCategory]=useState([])
    const [value, setValue] = React.useState(genre[0]);
    const [value1, setValue1] = React.useState(area[0]);
    const [value2, setValue2] = React.useState(category[0]);
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
         setBio(result.user.bio)
         setGenre(result.user.genre)
         setCategory(result.user.category)
         console.log(result.user.genre)
         c=0;
         a=0;
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
         setBio(result.user.bio)
         setArea(result.user.area)
         setGenre(result.user.genre)
         setCategory(result.user.category)
         console.log(result.user.area)
         c=0;
         a=0;
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
        if(result.error){
          Swal.fire("Error!",result.error,"error")
        }
        console.log(result);
        
        reload()
        
      }).catch((err)=>{

      })
  };

  const addcategory = (categoryoption) => {
    fetch(`http://localhost:4000/addcategory`, {
      method: "put",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
          category:categoryoption
      })
    })
      .then((res) => res.json())
      .then((result) => {
        if(result.error){
          Swal.fire("Error!",result.error,"error")
        }
        console.log(result);
        
        reload()
        
      })
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
        if(result.error){
          Swal.fire("Error!",result.error,"error")
        }
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

  const removecategory = (categoryoption) => {
    fetch(`http://localhost:4000/removecategory`, {
      method: "put",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
          category:categoryoption
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
        <div style={{display:'flex',padding:'2% ' ,flexWrap:'wrap'}}><h7>{bio}</h7></div>
        <button onClick={()=>{
          localStorage.setItem('firstname', firstname)
          localStorage.setItem('lastname', lastname)
          localStorage.setItem('bio',bio)
          
        }}>Edit</button>
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
        
        

        <div className="genreandarea  card horizontal"  style={{display:'flex'}}>
            <div className="genre card-stacked">
            <div style={{display:'flex'}} className='card-content'>
            <Autocomplete
      id="combo-box-demo"
      options={genre1}
      getOptionLabel={(option) => option.title}
      style={{ width: '70%' }}
      value={value}
        onChange={(event, newValue) => {
          if(!newValue){
            alert("Function not permitted")
            window.location.reload()
          }
          setValue(newValue.title);
          console.log(newValue.title)
        }}
     
      renderInput={(params) => <TextField {...params} label="Genre" variant="outlined" 
          
      />}
    />
    <i class="large material-icons" style={{cursor:'pointer'}} onClick={()=>{
      a++;
        console.log(value)
        if(a===1)
        addgenre(value)
    }}>add_circle</i>
    </div>
    <div className="genreitems" style={{display:'flex',flexWrap:'wrap'}}>
    {genre.map((item)=>{
       return <div className="genreitemstext" style={{border:'2px solid gray',margin:'5%',padding:'5% 10%',borderRadius:'20%'}} key={item}><div style={{display:'flex'}}><p>{item}</p> <i class="material-icons" style={{marginLeft:'30%',cursor:'pointer'}} onClick={()=>{console.log(item);removegenre(item)}}>cancel</i></div></div>
    })}
        
        
    </div>
            </div>
            <div className="area card-stacked"><div style={{display:'flex'}} className='card-content'>
            <Autocomplete
      id="combo-box-demo"
      options={area1}
      getOptionLabel={(option) => option.title}
      style={{ width: '70%' }}
      value={value1}
        onChange={(event, newValue) => {
          if(!newValue){
            alert("Function not permitted")
            return
          }
          setValue1(newValue.title);
          console.log(newValue.title)
        }}
      
      renderInput={(params) => <TextField {...params} label="Area" variant="outlined" />}
    />
    <i class="large material-icons"  style={{cursor:'pointer'}} onClick={()=>{
        c++
        console.log(c)
        if(c===1)
        addarea(value1)
        }}>add_circle</i>
    </div>
    <div className="areaitems" style={{display:'flex',flexWrap:'wrap'}}>
    {area.map((item)=>{
        return <div className="genreitemstext" style={{border:'2px solid gray',margin:'5%',padding:'5% 10%',borderRadius:'20%'}} key={item}><div style={{display:'flex'}} ><p>{item}</p> <i class="material-icons" style={{marginLeft:'30%',cursor:'pointer'}} onClick={()=>{console.log(item); removearea(item)}}>cancel</i></div></div>
    })}
        
        
    </div>
    
    </div>
    <div className="area"><div style={{display:'flex'}}>
            <Autocomplete
      id="combo-box-demo"
      options={category1}
      getOptionLabel={(option) => option.title}
      style={{ width: '70%' }}
      value={value2}
        onChange={(event, newValue) => {
          if(!newValue){
            alert("Function not permitted")
            return
          }
          setValue2(newValue.title);
          console.log(newValue.title)
        }}
      
      renderInput={(params) => <TextField {...params} label="Category" variant="outlined" />}
    />
    <i class="large material-icons"  style={{cursor:'pointer'}} onClick={()=>{
        c++
        console.log(c)
        if(c===1)
        addcategory(value2)
        }}>add_circle</i>
    </div>
    <div className="areaitems" style={{display:'flex',flexWrap:'wrap'}}>
    {category.map((item)=>{
        return <div className="genreitemstext" style={{border:'2px solid gray',margin:'5%',padding:'5% 10%',borderRadius:'20%'}} key={item}><div style={{display:'flex'}} ><p>{item}</p> <i class="material-icons" style={{marginLeft:'30%',cursor:'pointer'}} onClick={()=>{console.log(item); removecategory(item)}}>cancel</i></div></div>
    })}
        
        
    </div>
    
    </div>
        </div>
    </div>
}


export default SingerProfile;