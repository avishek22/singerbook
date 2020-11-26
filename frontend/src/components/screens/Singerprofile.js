import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 }]
const SingerProfile=()=>{

    return <div className="singerprofile">
        <div className="profilepicture">
            <img src="https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg"></img>
        </div>
        
        <div className="basicinfo">
        <div style={{display:'flex',padding:'2%'}}><h5>Name: </h5><h5>Avishek Bhattacharjee</h5></div>
        <div style={{display:'flex',padding:'2%'}}><h5>Age: </h5><h5>20</h5></div>
        <div style={{display:'flex',padding:'2%'}}><h5>Gender: </h5><h5>Male</h5></div>
            
        </div>

        <div className="genreandarea" style={{display:'flex'}}>
            <div className="genre">
            <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Genre" variant="outlined" />}
    />
    <div className="genreitems" style={{display:'flex',flexWrap:'wrap'}}>
        <div className="genreitemstext" style={{border:'2px solid gray',margin:'5%',padding:'5% 10%',borderRadius:'20%'}}><div style={{display:'flex'}}><p>Bad</p> <i class="material-icons" style={{marginLeft:'30%'}}>cancel</i></div></div>
        <div className="genreitemstext" style={{border:'2px solid gray',margin:'5%',padding:'5% 10%',borderRadius:'20%'}}><div style={{display:'flex'}}><p>Good</p> <i class="material-icons" style={{marginLeft:'30%'}}>cancel</i></div></div>
        <div className="genreitemstext" style={{border:'2px solid gray',margin:'5%',padding:'5% 10%',borderRadius:'20%'}}><div style={{display:'flex'}}><p>Very Nice</p> <i class="material-icons" style={{marginLeft:'30%'}}>cancel</i></div></div>
    </div>
            </div>
            <div className="area"><Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Area" variant="outlined" />}
    />
    <div className="areaitems" style={{display:'flex',flexWrap:'wrap'}}>
        <div className="genreitemstext" style={{border:'2px solid gray',margin:'5%',padding:'5% 10%',borderRadius:'20%'}}><div style={{display:'flex'}}><p>Bad</p> <i class="material-icons" style={{marginLeft:'30%'}}>cancel</i></div></div>
        <div className="genreitemstext" style={{border:'2px solid gray',margin:'5%',padding:'5% 10%',borderRadius:'20%'}}><div style={{display:'flex'}}><p>Good</p> <i class="material-icons" style={{marginLeft:'30%'}}>cancel</i></div></div>
        <div className="genreitemstext" style={{border:'2px solid gray',margin:'5%',padding:'5% 10%',borderRadius:'20%'}}><div style={{display:'flex'}}><p>Very Nice</p> <i class="material-icons" style={{marginLeft:'30%'}}>cancel</i></div></div>
    </div>
    </div>
        </div>
    </div>
}


export default SingerProfile;